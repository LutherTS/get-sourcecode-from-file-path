Another utility that I am bound to reuse between open-source projects. (I'll consider making a package combining my shared utilities in due time.) Here is the code with JSDoc comments:

```js
/**
 * $COMMENT#JSDOC#DEFINITIONS#GETSOURCECODEFROMFILEPATH
 * @param {string} absolutePath $COMMENT#JSDOC#PARAMS#ABSOLUTEPATH
 * @param {Object} [options] $COMMENT#JSDOC#PARAMS#OPTIONS
 * @param {import('eslint').Linter} [options.linter] $COMMENT#JSDOC#PARAMS#LINTEROPTION
 * @param {import('eslint').Linter.LanguageOptions} [options.languageOptions] $COMMENT#JSDOC#PARAMS#LANGUAGEOPTIONSOPTION
 * @returns $COMMENT#JSDOC#RETURNS#GETSOURCECODEFROMFILEPATH
 */
export const getSourceCodeFromFilePath = (
  absolutePath,
  { languageOptions = typeScriptAndJSXCompatible, linter = new Linter() } = {}
) => {
  // the raw code of the file at the end of the absolute path
  const text = fs.readFileSync(absolutePath, "utf8");
  // utilizes linter.verify ...
  linter.verify(text, { languageOptions });
  // ... to retrieve the raw code as a SourceCode object
  const sourceCode = linter.getSourceCode();

  return sourceCode;
};
```
