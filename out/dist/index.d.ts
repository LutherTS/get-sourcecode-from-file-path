import { Linter } from "eslint";
/**
 * $COMMENT#JSDOC#DEFS#GETSOURCECODEFROMFILEPATH
 * @param absolutePath - $COMMENT#JSDOC#PARAMS#ABSOLUTEPATH
 * @param options - $COMMENT#JSDOC#PARAMS#OPTIONSPARAM
 * @param options.linter - $COMMENT#JSDOC#PARAMS#OPTIONS#LINTER
 * @param options.languageOptions - $COMMENT#JSDOC#PARAMS#OPTIONS#LANGUAGEOPTIONS
 * @returns $COMMENT#JSDOC#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export declare const getSourceCodeFromFilePath: (absolutePath: string, { languageOptions, linter, }?: {
    languageOptions?: Linter.LanguageOptions | undefined;
    linter?: Linter | undefined;
}) => import("eslint").SourceCode | null;
