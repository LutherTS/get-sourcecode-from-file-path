const config = {
  jsDoc: {
    getSourceCodeFromFilePath: `Gets the ESLint-generated SourceCode object of a file from its absolute path.
 * @param {string} absolutePath The absolute path of the file.
 * @param {LanguageOptions} languageOptions The languageOptions object used by \`linter.verify()\`, defaulting to a version that is TypeScript- and JSX-compatible.
 * @param {import('eslint').Linter} linter The Linter instance used to retrieve the SourceCode object, defaulting to a new Linter per operation,  ensuring each instance of the function is based on its own linter (just in case somehow some linters were to run concurrently)
 * @returns The ESLint-generated SourceCode object of the file.`,
  },
};

export default config;
