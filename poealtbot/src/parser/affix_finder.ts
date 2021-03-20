import { BaseItem, Domain } from '../model/BaseItem'
import { Influence, ItemInfluenceTagData } from '../model/Influence'
import { Affix, GenerationType, NWeight } from '../model/Affix'

import BaseItemsJson from '../assets/data/base_items.min.json'
import ItemInfluenceTagDataJson from '../assets/data/item_classes.min.json'
import ModsJson from '../assets/data/mods.min.json'

export function rollableAffixes(domain: Domain, tags: string[]): Affix[] {
    const filtered = Object.fromEntries(Object.entries(ModsJson).filter(([k,v]) => {
        const genType: GenerationType = v['generation_type']
        const isPrefixOrSuffix = genType == GenerationType.Prefix || genType == GenerationType.Suffix
        if (v['domain'] != domain || !isPrefixOrSuffix ) {
            return false
        }
        const allWeightsSpawns: NWeight[] = v['spawn_weights']
        for (const w of allWeightsSpawns) {
            if (w.weight > 0 && tags.includes(w.tag)) {
                return true
            }
        }
        return false
    }))
    return Object.entries(filtered).map(([k,v]) => {
        const affix: Affix = v
        affix.id = k
        return affix
    })
}

// export function rollableAffixesAccountingForAddsTagExistingMods() {}

export function baseItem(baseName: string): BaseItem | undefined {
    const json: { [key: string]: any } = BaseItemsJson
    for (const key in json) {
        const objData = json[key]
        if (objData.name === baseName) {
            const baseItem: BaseItem = objData
            baseItem.id = key
            return baseItem
        }
    }
    return undefined
}

export function itemInfluenceTagData(baseItem: BaseItem): ItemInfluenceTagData | undefined {
    const json: { [key: string]: any } = ItemInfluenceTagDataJson
    for (const key in json) {
        const objData = json[key]
        if (key === baseItem.item_class) {
            const tagData: ItemInfluenceTagData = objData
            tagData.id = key
            return tagData
        }
    }
    return undefined
}

export function influenceTags(influences: Influence[], tagData: ItemInfluenceTagData): string[] {
    const tags: string[] = []
    for (const inf of influences) {
        switch (inf) {
            case Influence.Crusader:
                if (tagData.crusader_tag != null) { tags.push(tagData.crusader_tag) } break
            case Influence.Elder:
                if (tagData.elder_tag != null) { tags.push(tagData.elder_tag) } break
            case Influence.Hunter:
                if (tagData.hunter_tag != null) { tags.push(tagData.hunter_tag) } break
            case Influence.Redeemer:
                if (tagData.redeemer_tag != null) { tags.push(tagData.redeemer_tag) } break
            case Influence.Shaper:
                if (tagData.shaper_tag != null) { tags.push(tagData.shaper_tag) } break
            case Influence.Warlord:
                if (tagData.warlord_tag != null) { tags.push(tagData.warlord_tag) } break
        }
    }
    return tags
}