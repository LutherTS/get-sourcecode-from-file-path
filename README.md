A utility I reuse between open-source projects. Here is the main code with JSDoc comments:

```js
/**
 * $COMMENT#JSDOC#CORE#DEFS#GETSOURCECODEFROMFILEPATH
 * @param {string} absolutePath $COMMENT#JSDOC#CORE#PARAMS#ABSOLUTEPATH
 * @param {Object} [options] $COMMENT#JSDOC#CORE#PARAMS#OPTIONSPARAM
 * @param {import('eslint').Linter} [options.linter] $COMMENT#JSDOC#CORE#PARAMS#OPTIONS#LINTER
 * @param {import('eslint').Linter.LanguageOptions} [options.languageOptions] $COMMENT#JSDOC#CORE#PARAMS#OPTIONS#LANGUAGEOPTIONS
 * @returns $COMMENT#JSDOC#CORE#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export const getSourceCodeFromFilePath = (
  absolutePath,
  { languageOptions = typeScriptAndJSXCompatible, linter = new Linter() } = {},
) => {
  // the raw code of the file at the end of the absolute path
  const text = fs.readFileSync(absolutePath, "utf8");
  // utilizes linter.verify ...
  linter.verify(text, { languageOptions });
  // ... to retrieve the raw code as a SourceCode object
  const sourceCode = linter.getSourceCode();

  if (!sourceCode) return null;
  else return sourceCode;
};
```

(This is the original JavaScript code of the package. In its v2, the package is now maintained in TypeScript for automated declaration files.)
