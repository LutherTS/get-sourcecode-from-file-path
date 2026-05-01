import { Linter } from "eslint";
/**
 * $COMMENT#JSDOC#DEFINITIONS#GETSOURCECODEFROMFILEPATH
 * @param absolutePath - $COMMENT#JSDOC#PARAMS#ABSOLUTEPATH
 * @param options - $COMMENT#JSDOC#PARAMS#OPTIONS
 * @param options.linter - $COMMENT#JSDOC#PARAMS#LINTEROPTION
 * @param options.languageOptions - $COMMENT#JSDOC#PARAMS#LANGUAGEOPTIONSOPTION
 * @returns $COMMENT#JSDOC#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export declare const getSourceCodeFromFilePath: (absolutePath: string, { languageOptions, linter, }?: {
    languageOptions?: Linter.LanguageOptions | undefined;
    linter?: Linter | undefined;
}) => import("eslint").SourceCode | null;
