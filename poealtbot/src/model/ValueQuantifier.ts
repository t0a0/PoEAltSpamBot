import { IndexHandler } from "./StatTranslation";

export interface ValueQuantifier {
    indexHandler: IndexHandler;
    handler: (v: number) => string;
    reverseHandler: (s: string) => number;
}