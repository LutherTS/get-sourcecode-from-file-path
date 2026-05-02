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
          "The ESLint-generated `SourceCode` object of the file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted. `null` when encountering fatal syntax." /* $COMMENT#JSDOC#CORE#RETURNS#GETSOURCECODEFROMFILEPATH */,
      }),
    }),
  }),
};

const ignores = [];

const config = {
  data,
  ignores,
};

export default config;
