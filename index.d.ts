// must be manually maintained

import { Linter, SourceCode } from "eslint";

/**
 * $COMMENT#JSDOC#DEFINITIONS#GETSOURCECODEFROMFILEPATH
 * @param {string} absolutePath $COMMENT#JSDOC#PARAMS#ABSOLUTEPATH
 * @param {Object} [options] $COMMENT#JSDOC#PARAMS#OPTIONS
 * @param {import('eslint').Linter} [options.linter] $COMMENT#JSDOC#PARAMS#LINTEROPTION
 * @param {import('eslint').Linter.LanguageOptions} [options.languageOptions] $COMMENT#JSDOC#PARAMS#LANGUAGEOPTIONSOPTION
 * @returns $COMMENT#JSDOC#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export const getSourceCodeFromFilePath: (
  absolutePath: string,
  {
    languageOptions,
    linter,
  }?: {
    linter?: Linter | undefined;
    languageOptions?: Linter.LanguageOptions | undefined;
  }
) => SourceCode | null;
