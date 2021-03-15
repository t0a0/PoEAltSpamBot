#Include <ActiveScript>
#IfWinActive, ahk_class POEWindowClass

isCancelled := True

#Persistent
OnWinActiveChange(hWinEventHook, vEvent, hWnd)
{
	;EVENT_SYSTEM_FOREGROUND := 0x3
	static _ := DllCall("user32\SetWinEventHook", UInt,0x3, UInt,0x3, Ptr,0, Ptr,RegisterCallback("OnWinActiveChange"), UInt,0, UInt,0, UInt,0, Ptr)
	DetectHiddenWindows, On
	CancelSpam()
}

SleepDefault()
{
	Sleep, 50
}

SleepRandom()
{
	Random r, 113, 211
	Sleep, %r%
}

CopyToClipboard()
{
	If isCancelled = True
	{
		return False
	}
	Clipboard := ""
	SleepDefault()
	If isCancelled = True
	{
		return False
	}
	Send ^{SC02E}
	ClipWait, 2
	If ErrorLevel
	{
	    Return False
	}
	Return True
}

IsResultOK()
{
	script := new ActiveScript("JScript")
	filepath = %A_ScriptDir%\js\middleman.js
	FileRead, code, %filepath%
	script["poeStringClip"] := Clipboard
	script.Exec(code)
	Return script.Eval("shouldStop") = "true"
}

CancelSpam()
{
	isCancelled := True
	CleanupShiftKey()
}

CleanupShiftKey()
{
	If GetKeyState("Shift")
	{
		Send, {Shift Up}
	}
}

F1::
{
	isCancelled := False
	Send, {Shift Down}
	Loop
	{
		If isCancelled = True
		{
			Break
		}
		Click
		SleepDefault()
		If isCancelled = True
		{
			Break
		}
		If not CopyToClipboard()
		{
			Break
		}
		If IsResultOK()
		{
			CleanupShiftKey()
			SoundPlay, *48
			MsgBox, , Spam finished. Resulting item:, %Clipboard%
			Break
		} 
		Else
		{
			If isCancelled = True
			{
				Break
			}
			SleepRandom()
		}
	}
}

F2::
+F2::
{
	CancelSpam()
}
