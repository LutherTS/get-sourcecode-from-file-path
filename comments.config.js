const data = {
  jsDoc: Object.freeze({
    core: Object.freeze({
      defs: Object.freeze({
        getSourceCodeFromFilePath:
          "Gets the ESLint-generated `SourceCode` object of a file from its absolute path." /* $COMMENT#JSDOC#CORE#DEFS#GETSOURCECODEFROMFILEPATH */,
      }),
      params: Object.freeze({
        absolutePath:
          "The absolute path of the file." /* $COMMENT#JSDOC#CORE#PARAMS#ABSOLUTEPATH */,
        optionsParam:
          "The additional options as follows:" /* $COMMENT#JSDOC#CORE#PARAMS#OPTIONSPARAM */,
        options: Object.freeze({
          linter:
            "The Linter instance used to retrieve the `SourceCode` object, defaulting to a `new Linter()` per operation, ensuring each instance of the function is based on its own linter (just in case somehow some linters were to run concurrently)." /* $COMMENT#JSDOC#CORE#PARAMS#OPTIONS#LINTER */,
          languageOptions:
            "The `languageOptions` object used by `linter.verify()`, defaulting to a version that is TypeScript- and JSX-compatible." /* $COMMENT#JSDOC#CORE#PARAMS#OPTIONS#LANGUAGEOPTIONS */,
        }),
      }),
      returns: Object.freeze({
        getSourceCodeFromFilePath:
          "The ESLint-generated `SourceCode` object of the file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted. `null` when the file is nonexistent or when encountering fatal syntax." /* $COMMENT#JSDOC#CORE#RETURNS#GETSOURCECODEFROMFILEPATH */,
      }),
    }),
    tests: Object.freeze({
      defs: Object.freeze({
        assertNullPath:
          "$COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ASSERTSPATHRETURNS `null` when the file is nonexistent or when encountering fatal syntax. $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ASSERTIONPROCESS" /* $COMMENT#JSDOC#TESTS#DEFS#ASSERTNULLPATH */,
        assertFilePath:
          "$COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ASSERTSPATHRETURNS a `SourceCode` object when the file exists and is valid. $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ASSERTIONPROCESS" /* $COMMENT#JSDOC#TESTS#DEFS#ASSERTFILEPATH */,
      }),
      params: Object.freeze({
        filePath:
          "The file path at hand." /* $COMMENT#JSDOC#TESTS#PARAMS#FILEPATH */,
      }),
    }),
  }),
  composedVariablesExclusives: Object.freeze({
    assertsPathReturns:
      "Asserts that the file path passed to `getSourceCodeFromFilePath` correctly returns" /* $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ASSERTSPATHRETURNS */,
    assertionProcess:
      "(The assertion process happens within this utility.)" /* $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ASSERTIONPROCESS */,
  }),
};

const ignores = [];

const composedVariablesExclusives = [
  "COMPOSEDVARIABLESEXCLUSIVES#ASSERTSPATHRETURNS",
  "COMPOSEDVARIABLESEXCLUSIVES#ASSERTIONPROCESS",
];

const config = {
  data,
  ignores,
  composedVariablesExclusives,
};

export default config;
