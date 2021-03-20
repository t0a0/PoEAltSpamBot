import { Affix, Stat } from '@/model/Affix'
import { Condition, Format, StatTranslation } from '@/model/StatTranslation'
import { TranslationData } from '@/model/TranslationData'
import StatTranslatonJson from "../assets/data/stat_translations.min.json"
import { valueQuantifier } from '@/parser/stat_quantifier'
function statTranlation(stat: Stat): StatTranslation | undefined {
    const translations: StatTranslation[] = StatTranslatonJson
    const matched = translations.filter((t) => t.ids.includes(stat.id))
    return matched[0]
}

// If strict is true - both stat.min and max must be in range, if false - the one of the stats must be in range
function statMatchesCondition(stat: Stat, condition: Condition, strict: boolean): boolean {
    const min = condition.min ?? -Infinity
    const max = condition.max ?? Infinity
    const statMaxInRange = max >= stat.max && stat.max >= min
    const statMinInRange = max >= stat.min && stat.min >= min
    const conditionResult = strict
        ? statMaxInRange && statMinInRange
        : statMaxInRange || statMinInRange
    return condition.negated != true ? conditionResult : !conditionResult
}

function translationData(stat: Stat, translation: StatTranslation): TranslationData | undefined {
    const index = translation.ids.indexOf(stat.id)
    if (index !== undefined) {
        // Stat values may be a range instead of a single value (e.g. `(10 to 20)`).
        // In that case, the first condition that matches both values in the range (e.g. 10 and 20) is taken.
        for (const english of translation.English) {
            if (statMatchesCondition(stat, english.condition[index], true)) {
                const data: TranslationData = {
                    format: english.format[index],
                    indexHandlers: english.index_handlers[index],
                    replacementIndex: index,
                    string: english.string
                }
                return data
            }
        }
        // If no condition matches both values, the first condition that matches at least one value is taken.
        for (const english of translation.English) {
            if (statMatchesCondition(stat, english.condition[index], false)) {
                const data: TranslationData = {
                    format: english.format[index],
                    indexHandlers: english.index_handlers[index],
                    replacementIndex: index,
                    string: english.string
                }
                return data
            }
        }
    }
    return undefined
}

function translate(stat: Stat, translationData: TranslationData): string {
    if (translationData.format == Format.Ignore) {
        return translationData.string
    }
    const quantifiers = translationData.indexHandlers.map(valueQuantifier)
    let minVal = stat.min.toString()
    let maxVal = stat.max.toString()
    for (const q of quantifiers) {
        minVal = q.handler(Number(minVal))
        maxVal = q.handler(Number(maxVal))
    }
    const statHasRange = stat.min != stat.max
    let insert = minVal
    if (statHasRange) {
        const nMinVal = Number(minVal)
        const nMaxVal = Number(maxVal)
        if (nMinVal < 0 && nMaxVal < 0) {
            insert = `-(${Math.abs(nMinVal)}-${Math.abs(nMaxVal)})`
        } else {
            insert = `(${minVal}-${maxVal})`
        }
    }
    if (translationData.format == Format.InsertPlus) {
        insert = "+" + insert
    }
    return translationData.string.replace(`{${translationData.replacementIndex}}`, insert)
}

export function affixTranslation(affix: Affix): string {
    const strings: string[] = []
    for (const stat of affix.stats) {
        const transl = statTranlation(stat)
        if (transl === undefined) {
            strings.push('undefined stat')
            continue
        }
        const translData = translationData(stat, transl)
        if (translData === undefined) {
            strings.push('undefined stat')
            continue
        }
        const string = translate(stat, translData)
        if (string === undefined) {
            strings.push('undefined stat')
            continue
        }
        strings.push(string)
    }
    return strings.join('\n').trim()
}