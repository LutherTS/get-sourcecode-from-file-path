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
};
/**
 * $COMMENT#JSDOC#DEFS#GETSOURCECODEFROMFILEPATH
 * @param absolutePath - $COMMENT#JSDOC#PARAMS#ABSOLUTEPATH
 * @param options - $COMMENT#JSDOC#PARAMS#OPTIONSPARAM
 * @param options.linter - $COMMENT#JSDOC#PARAMS#OPTIONS#LINTER
 * @param options.languageOptions - $COMMENT#JSDOC#PARAMS#OPTIONS#LANGUAGEOPTIONS
 * @returns $COMMENT#JSDOC#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export const getSourceCodeFromFilePath = (absolutePath, { languageOptions = typeScriptAndJSXCompatible, linter = new Linter(), } = {}) => {
    const code = fs.readFileSync(absolutePath, "utf8");
    linter.verify(code, { languageOptions });
    const sourceCode = linter.getSourceCode();
    if (!sourceCode)
        return null;
    else
        return sourceCode;
};
