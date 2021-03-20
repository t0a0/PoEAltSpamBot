import { Format, IndexHandler } from "./StatTranslation";

export interface TranslationData {
    format: Format;
    indexHandlers: IndexHandler[];
    replacementIndex: Number
    string: string;
}