export interface BaseItem {
    id: string
    domain: Domain;
    implicits: string[];
    item_class: ItemClass;
    name: string;
    properties: Properties;
    tags: string[];
    visual_identity: VisualIdentity;
}

export enum Domain {
    AbyssJewel = "abyss_jewel",
    AfflictionJewel = "affliction_jewel",
    Area = "area",
    Flask = "flask",
    Item = "item",
    MapDevice = "map_device",
    Misc = "misc",
    Undefined = "undefined",
    Unknown4 = "unknown4",
}

export enum ItemClass {
    AbyssJewel = "AbyssJewel",
    ActiveSkillGem = "Active Skill Gem",
    Amulet = "Amulet",
    AtlasRegionUpgradeItem = "AtlasRegionUpgradeItem",
    Belt = "Belt",
    BodyArmour = "Body Armour",
    Boots = "Boots",
    Bow = "Bow",
    Claw = "Claw",
    Currency = "Currency",
    Dagger = "Dagger",
    DivinationCard = "DivinationCard",
    FishingRod = "FishingRod",
    Gloves = "Gloves",
    Helmet = "Helmet",
    HybridFlask = "HybridFlask",
    Jewel = "Jewel",
    LifeFlask = "LifeFlask",
    ManaFlask = "ManaFlask",
    Map = "Map",
    MapFragment = "MapFragment",
    OneHandAxe = "One Hand Axe",
    OneHandMace = "One Hand Mace",
    OneHandSword = "One Hand Sword",
    Quiver = "Quiver",
    Ring = "Ring",
    RuneDagger = "Rune Dagger",
    Sceptre = "Sceptre",
    Shield = "Shield",
    StackableCurrency = "StackableCurrency",
    Staff = "Staff",
    SupportSkillGem = "Support Skill Gem",
    ThrustingOneHandSword = "Thrusting One Hand Sword",
    TwoHandAxe = "Two Hand Axe",
    TwoHandMace = "Two Hand Mace",
    TwoHandSword = "Two Hand Sword",
    UtilityFlask = "UtilityFlask",
    UtilityFlaskCritical = "UtilityFlaskCritical",
    Wand = "Wand",
    Warstaff = "Warstaff",
}

export interface Properties {
    armour?: number;
    energy_shield?: number;
    evasion?: number;
    movement_speed?: number;
    block?: number;
    description?: string;
    directions?: string;
    stack_size?: number;
    stack_size_currency_tab?: number;
    full_stack_turns_into?: string;
    charges_max?: number;
    charges_per_use?: number;
    duration?: number;
    life_per_use?: number;
    mana_per_use?: number;
    attack_time?: number;
    critical_strike_chance?: number;
    physical_damage_max?: number;
    physical_damage_min?: number;
    range?: number;
}

export interface VisualIdentity {
    dds_file: string;
    id: string;
}
