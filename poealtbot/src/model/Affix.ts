export interface Affix {
    id:                 string
    adds_tags:          AddsTag[];
    domain:             Domain;
    generation_type:    GenerationType;
    generation_weights: NWeight[];
    grants_buff:        GrantsBuff;
    grants_effects:     GrantsEffect[];
    group:              string;
    is_essence_only:    boolean;
    name:               string;
    required_level:     number;
    spawn_weights:      NWeight[];
    stats:              Stat[];
    type:               string;
}

export enum AddsTag {
    Axe = "axe",
    Bow = "bow",
    CannotBeTwinned = "cannot_be_twinned",
    Claw = "claw",
    Dagger = "dagger",
    DualWieldingMod = "dual_wielding_mod",
    Grants2HSupport = "grants_2h_support",
    GrantsCritChanceSupport = "grants_crit_chance_support",
    HasAfflictionNotable = "has_affliction_notable",
    HasAttackMod = "has_attack_mod",
    HasCasterMod = "has_caster_mod",
    HasDamageTakenAsMod = "has_damage_taken_as_mod",
    HasManaCostMod = "has_mana_cost_mod",
    HasPercentManaMod = "has_percent_mana_mod",
    HasPhysicalConversionMod = "has_physical_conversion_mod",
    InfectedMap = "infected_map",
    LocalItemQuality = "local_item_quality",
    Mace = "mace",
    MeleeMod = "melee_mod",
    OneHandedMod = "one_handed_mod",
    ShieldMod = "shield_mod",
    SpecificWeapon = "specific_weapon",
    SpellDodgeMod = "spell_dodge_mod",
    Staff = "staff",
    Sword = "sword",
    TwoHandedMod = "two_handed_mod",
    Wand = "wand",
    WeaponCanRollMinionModifiers = "weapon_can_roll_minion_modifiers",
}

export enum Domain {
    AbyssJewel = "abyss_jewel",
    AfflictionJewel = "affliction_jewel",
    Area = "area",
    Atlas = "atlas",
    Crafted = "crafted",
    Delve = "delve",
    Flask = "flask",
    Item = "item",
    Misc = "misc",
}

export enum GenerationType {
    BlightTower = "blight_tower",
    Corrupted = "corrupted",
    Enchantment = "enchantment",
    Prefix = "prefix",
    Suffix = "suffix",
    Tempest = "tempest",
    Unique = "unique",
}

export interface NWeight {
    tag:    string;
    weight: number;
}

export interface GrantsBuff {
    id?:    string;
    range?: number;
}

export interface GrantsEffect {
    granted_effect_id: string;
    level:             number;
}

export interface Stat {
    id:  string;
    max: number;
    min: number;
}
