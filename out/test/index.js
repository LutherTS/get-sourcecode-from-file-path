import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { describe, it } from "node:test";
import assert from "node:assert";
import { getSourceCodeFromFilePath } from "../../out/dist/index.js";
const currentDirectoryPath = dirname(fileURLToPath(import.meta.url));
const toSourceFilePath = "../../root/src/index.ts";
const sourceFilePath = join(currentDirectoryPath, toSourceFilePath);
const toDistributionFilePath = "../../out/dist/index.js";
const distributionFilePath = join(currentDirectoryPath, toDistributionFilePath);
const languages = [
    { language: "TypeScript", filePath: sourceFilePath },
    { language: "JavaScript", filePath: distributionFilePath },
];
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
    it("should return `null` for a nonexistent file", () => {
        const results = getSourceCodeFromFilePath("/path/to/nonexistent/file.js");
        assert.strictEqual(results, null);
    });
    for (const l of languages) {
        it(`should return a \`SourceCode\` object when given a valid ${l.language} file`, () => assertFilePath(l.filePath));
    }
});
