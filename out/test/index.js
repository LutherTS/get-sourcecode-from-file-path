import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { describe, it } from "node:test";
import assert from "node:assert";
import { getSourceCodeFromFilePath } from "../../out/dist/index.js";
const TYPESCRIPT = "TypeScript";
const JAVASCRIPT = "JavaScript";
const currentDirectoryPath = dirname(fileURLToPath(import.meta.url));
const toSourceFilePath = "../../root/src/index.ts";
const sourceFilePath = join(currentDirectoryPath, toSourceFilePath);
const toDistributionFilePath = "../../out/dist/index.js";
const distributionFilePath = join(currentDirectoryPath, toDistributionFilePath);
const toFatalJsFilePath = "../../root/tests/fatal/javascript.js";
const fatalJsFilePath = join(currentDirectoryPath, toFatalJsFilePath);
const toFatalTsFilePath = "../../root/tests/fatal/typescript.ts";
const fatalTsFilePath = join(currentDirectoryPath, toFatalTsFilePath);
const languages = [
    {
        language: TYPESCRIPT,
        filePath: sourceFilePath,
        fatalPath: fatalJsFilePath,
    },
    {
        language: JAVASCRIPT,
        filePath: distributionFilePath,
        fatalPath: fatalTsFilePath,
    },
];
/**
 * $COMMENT#JSDOC#TESTS#DEFS#ASSERTNULLPATH
 * @param filePath $COMMENT#JSDOC#TESTS#PARAMS#FILEPATH
 */
const assertNullPath = (filePath) => {
    const results = getSourceCodeFromFilePath(filePath);
    assert.strictEqual(results, null);
};
/**
 * $COMMENT#JSDOC#TESTS#DEFS#ASSERTFILEPATH
 * @param filePath $COMMENT#JSDOC#TESTS#PARAMS#FILEPATH
 */
const assertFilePath = (filePath) => {
    const results = getSourceCodeFromFilePath(filePath);
    assert.notStrictEqual(results, null);
    // Checks that the AST does exists.
    assert.ok(results === null || results === void 0 ? void 0 : results.ast);
    // Checks that the comments are retrievable.
    assert.strictEqual(typeof (results === null || results === void 0 ? void 0 : results.getAllComments), "function");
};
describe("getSourceCodeFromFilePath", () => {
    it("should return `null` for a nonexistent file", () => assertNullPath("/path/to/nonexistent/file.js"));
    for (const l of languages) {
        it(`should return a \`null\` when given an invalid ${l.language} file`, () => assertNullPath(l.fatalPath));
        it(`should return a \`SourceCode\` object when given a valid ${l.language} file`, () => assertFilePath(l.filePath));
    }
});
