export interface ItemInfluenceTagData {
    id: string;
    crusader_tag: null | string;
    elder_tag:    null | string;
    hunter_tag:   null | string;
    name:        string;
    redeemer_tag: null | string;
    shaper_tag:   null | string;
    warlord_tag:  null | string;
}

export enum Influence {
    Crusader = 'Crusader Item',
    Elder = 'Elder Item',
    Hunter = 'Hunter Item',
    Redeemer = 'Redeemer Item',
    Shaper = 'Shaper Item',
    Warlord = 'Warlord Item'
}