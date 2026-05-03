import { Linter } from "eslint";
/**
 * $COMMENT#JSDOC#CORE#DEFS#GETSOURCECODEFROMFILEPATH
 * @param absolutePath - $COMMENT#JSDOC#CORE#PARAMS#ABSOLUTEPATH
 * @param options - $COMMENT#JSDOC#CORE#PARAMS#OPTIONSPARAM
 * @param options.linter - $COMMENT#JSDOC#CORE#PARAMS#OPTIONS#LINTER
 * @param options.languageOptions - $COMMENT#JSDOC#CORE#PARAMS#OPTIONS#LANGUAGEOPTIONS
 * @returns $COMMENT#JSDOC#CORE#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export declare const getSourceCodeFromFilePath: (absolutePath: string, { languageOptions, linter, }?: {
    languageOptions?: Linter.LanguageOptions | undefined;
    linter?: Linter | undefined;
}) => import("eslint").SourceCode | null;
