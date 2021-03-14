#Include <ActiveScript>
#IfWinActive, ahk_class POEWindowClass

global isCancelled := 1

SleepRandomDelay()
{
	Random r, 438, 997
	Sleep, %r%
}

CopyToClipboard()
{
	clipboard := ""
	Send ^{SC02E}
	ClipWait
}

IsResultOK()
{
	script := new ActiveScript("JScript")
	filepath = %A_ScriptDir%\js\middleman.js
	FileRead, code, %filepath%
	script["poeStringClip"] := clipboard
	script.Exec(code)
	Return script.Eval("shouldStop") = "true"
}

F1::
{
	%isCancelled% := 0
	Send, {SC02A Down}
	Loop
	{
		If not WinActive(ahk_class POEWindowClass) 
		{
			%isCancelled% :=  1
		}
		If %isCancelled% = 1 
		{
			Break
		}
		Click
		Sleep, 50
		CopyToClipboard()
		If IsResultOK() = True
		{
			%isCancelled% :=  1
		} 
		Else
		{
			SleepRandomDelay()
		}
	}
	Send, {SC02A Up}
}

F2::
+F2::
{
	%isCancelled% :=  1
}

;https://autohotkey.com/board/topic/66726-method-to-detect-active-window-change/