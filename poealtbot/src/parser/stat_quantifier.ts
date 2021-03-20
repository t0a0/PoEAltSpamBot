import { IndexHandler } from "@/model/StatTranslation";
import { ValueQuantifier } from "@/model/ValueQuantifier";

export function valueQuantifier(indexHandler: IndexHandler): ValueQuantifier {
    let handler: (v: number) => string
    let reverseHandler: (s: string) => number
    switch (indexHandler) {
        case IndexHandler.CanonicalStat:
            handler = v => v.toString()
            reverseHandler = s => Number(s)
            break
        case IndexHandler.DecisecondsToSeconds:
            handler = v => (v / 10).toString()
            reverseHandler = s => Number(s) * 10
            break
        case IndexHandler.DivideByFifteen0DP:
            handler = v => (v / 15).toFixed(0)
            reverseHandler = s => Number(s) * 15
            break
        case IndexHandler.DivideByFive:
            handler = v => (v / 5).toString()
            reverseHandler = s => Number(s) * 5
            break
        case IndexHandler.DivideByOneHundred:
            handler = v => (v / 100).toString()
            reverseHandler = s => Number(s) * 100
            break
        case IndexHandler.DivideByOneHundred2DP:
            handler = v => (v / 100).toFixed(2)
            reverseHandler = s => Number(s) * 100
            break
        case IndexHandler.DivideByOneHundredAndNegate:
            handler = v => (-v / 100).toString()
            reverseHandler = s => -Number(s) * 100
            break
        case IndexHandler.DivideBySix:
            handler = v => (v / 6).toString()
            reverseHandler = s => Number(s) * 6
            break
        case IndexHandler.DivideByTen0DP:
            handler = v => (v / 10).toFixed(0)
            reverseHandler = s => Number(s) * 10
            break
        case IndexHandler.DivideByThree:
            handler = v => (v / 3).toString()
            reverseHandler = s => Number(s) * 3
            break
        case IndexHandler.DivideByTwelve:
            handler = v => (v / 12).toString()
            reverseHandler = s => Number(s) * 12
            break
        case IndexHandler.DivideByTwentyThenDouble0DP:
            handler = v => (Math.floor(v / 10) * 2).toString()
            reverseHandler = s => Math.floor(Number(s) * 20 / 2)
            break
        case IndexHandler.DivideByTwo0DP:
            handler = v => (v / 2).toFixed(0)
            reverseHandler = s => Number(s) * 2
            break
        case IndexHandler.MillisecondsToSeconds:
            handler = v => (v / 1000).toString()
            reverseHandler = s => Number(s) * 1000
            break
        case IndexHandler.MillisecondsToSeconds0DP:
            handler = v => (v / 1000).toFixed(0)
            reverseHandler = s => Number(s) * 1000
            break
        case IndexHandler.MillisecondsToSeconds1DP:
            handler = v => (v / 1000).toFixed(1)
            reverseHandler = s => Number(s) * 1000
            break
        case IndexHandler.MillisecondsToSeconds2DP:
            handler = v => (v / 1000).toFixed(2)
            reverseHandler = s => Number(s) * 1000
            break
        case IndexHandler.ModValueToItemClass:
            //TODO: make actual handlers for this one
            handler = v => "?"
            reverseHandler = s => 0
            break
        case IndexHandler.MultiplyByFour:
            handler = v => (v * 4).toString()
            reverseHandler = s => Math.floor(Number(s) / 4)
            break
        case IndexHandler.Negate:
            handler = v => (-v).toString()
            reverseHandler = s => -Number(s)
            break
        case IndexHandler.OldLeechPercent:
            handler = v => (v / 5).toString()
            reverseHandler = s => Number(s) * 5
            break
        case IndexHandler.OldLeechPermyriad:
            handler = v => (v / 500).toString()
            reverseHandler = s => Number(s) * 500
            break
        case IndexHandler.PerMinuteToPerSecond:
            handler = v => (v / 60).toFixed(1)
            reverseHandler = s => Number(s) * 60
            break
        case IndexHandler.PerMinuteToPerSecond0DP:
            handler = v => (v / 60).toFixed(0)
            reverseHandler = s => Number(s) * 60
            break
        case IndexHandler.PerMinuteToPerSecond1DP:
            handler = v => (v / 60).toFixed(1)
            reverseHandler = s => Number(s) * 60
            break
        case IndexHandler.PerMinuteToPerSecond2DP:
            handler = v => (v / 60).toFixed(2)
            reverseHandler = s => Number(s) * 60
            break
        case IndexHandler.PerMinuteToPerSecond2DPIfRequired:
            handler = v => {
                if (v % 60 == 0) {
                    return (v / 60).toPrecision(0)
                } else {
                    return (v / 60).toFixed(2)
                }
            }
            reverseHandler = s => Number(s) * 60
            break
        case IndexHandler.The30_OfValue:
            handler = v => (v * 0.3).toString()
            reverseHandler = s => Number(s) / 0.3
            break
        case IndexHandler.The60_OfValue:
            handler = v => (v * 0.6).toString()
            reverseHandler = s => Number(s) / 0.6
            break
        case IndexHandler.TimesTwenty:
            handler = v => (v * 20).toString()
            reverseHandler = s => Math.floor(Number(s) / 20)
            break
    }
    const vq: ValueQuantifier = {
        indexHandler,
        handler,
        reverseHandler
    }
    return vq
}