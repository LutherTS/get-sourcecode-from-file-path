const data = {
  jsDoc: Object.freeze({
    definitions: Object.freeze({
      getSourceCodeFromFilePath:
        "Gets the ESLint-generated SourceCode object of a file from its absolute path.",
    }), // $COMMENT#JSDOC#DEFINITIONS#GETSOURCECODEFROMFILEPATH
    params: Object.freeze({
      absolutePath: "The absolute path of the file.", // $COMMENT#JSDOC#PARAMS#ABSOLUTEPATH
      options: "The additional options as follows:", // $COMMENT#JSDOC#PARAMS#OPTIONS
      linterOption:
        "The Linter instance used to retrieve the SourceCode object, defaulting to a `new Linter()` per operation, ensuring each instance of the function is based on its own linter (just in case somehow some linters were to run concurrently).", // $COMMENT#JSDOC#PARAMS#LINTEROPTION
      languageOptionsOption:
        "The languageOptions object used by `linter.verify()`, defaulting to a version that is TypeScript- and JSX-compatible.", // $COMMENT#JSDOC#PARAMS#LANGUAGEOPTIONSOPTION
    }),
    returns: Object.freeze({
      getSourceCodeFromFilePath:
        "The ESLint-generated SourceCode object of the file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted.", // $COMMENT#JSDOC#RETURNS#GETSOURCECODEFROMFILEPATH
    }),
  }),
};

const ignores = [];

const config = {
  data,
  ignores,
};

export default config;
