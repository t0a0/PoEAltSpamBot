export interface AffixTranslation {
    english: English[];
    ids:     string[];
    hidden?: boolean;
}

export interface English {
    condition:     Condition[];
    format:        Format[];
    indexHandlers: Array<IndexHandler[]>;
    string:        string;
}

export interface Condition {
    min?:     number;
    max?:     number;
    negated?: boolean;
}

export enum Format {
    Empty = "#",
    Format = "+#",
    Ignore = "ignore",
}

export enum IndexHandler {
    CanonicalStat = "canonical_stat",
    DecisecondsToSeconds = "deciseconds_to_seconds",
    DivideByFifteen0DP = "divide_by_fifteen_0dp",
    DivideByFive = "divide_by_five",
    DivideByOneHundred = "divide_by_one_hundred",
    DivideByOneHundred2DP = "divide_by_one_hundred_2dp",
    DivideByOneHundredAndNegate = "divide_by_one_hundred_and_negate",
    DivideBySix = "divide_by_six",
    DivideByTen0DP = "divide_by_ten_0dp",
    DivideByThree = "divide_by_three",
    DivideByTwelve = "divide_by_twelve",
    DivideByTwentyThenDouble0DP = "divide_by_twenty_then_double_0dp",
    DivideByTwo0DP = "divide_by_two_0dp",
    MillisecondsToSeconds = "milliseconds_to_seconds",
    MillisecondsToSeconds0DP = "milliseconds_to_seconds_0dp",
    MillisecondsToSeconds1DP = "milliseconds_to_seconds_1dp",
    MillisecondsToSeconds2DP = "milliseconds_to_seconds_2dp",
    ModValueToItemClass = "mod_value_to_item_class",
    MultiplyByFour = "multiply_by_four",
    Negate = "negate",
    OldLeechPercent = "old_leech_percent",
    OldLeechPermyriad = "old_leech_permyriad",
    PerMinuteToPerSecond = "per_minute_to_per_second",
    PerMinuteToPerSecond0DP = "per_minute_to_per_second_0dp",
    PerMinuteToPerSecond1DP = "per_minute_to_per_second_1dp",
    PerMinuteToPerSecond2DP = "per_minute_to_per_second_2dp",
    PerMinuteToPerSecond2DPIfRequired = "per_minute_to_per_second_2dp_if_required",
    The30_OfValue = "30%_of_value",
    The60_OfValue = "60%_of_value",
    TimesTwenty = "times_twenty",
}
