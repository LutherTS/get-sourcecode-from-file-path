import fs from "fs";

import { Linter } from "eslint";
import { parser } from "typescript-eslint";

const typeScriptAndJSXCompatible = {
  parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
} as const satisfies Linter.LanguageOptions;

/**
 * $COMMENT#JSDOC#CORE#DEFS#GETSOURCECODEFROMFILEPATH
 * @param absolutePath - $COMMENT#JSDOC#CORE#PARAMS#ABSOLUTEPATH
 * @param options - $COMMENT#JSDOC#CORE#PARAMS#OPTIONSPARAM
 * @param options.linter - $COMMENT#JSDOC#CORE#PARAMS#OPTIONS#LINTER
 * @param options.languageOptions - $COMMENT#JSDOC#CORE#PARAMS#OPTIONS#LANGUAGEOPTIONS
 * @returns $COMMENT#JSDOC#CORE#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export const getSourceCodeFromFilePath = (
  absolutePath: string,
  {
    languageOptions = typeScriptAndJSXCompatible as Linter.LanguageOptions,
    linter = new Linter(),
  } = {},
) => {
  const code = fs.readFileSync(absolutePath, "utf8");
  linter.verify(code, { languageOptions });
  const sourceCode = linter.getSourceCode();

  if (!sourceCode) return null;
  else return sourceCode;
};
