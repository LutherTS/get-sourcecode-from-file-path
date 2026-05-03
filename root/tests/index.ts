import url from "url";
import path from "path";

import { describe, it } from "node:test";
import assert from "node:assert";

import { getSourceCodeFromFilePath } from "../../out/dist/index.js";

const TYPESCRIPT = "TypeScript";
const JAVASCRIPT = "JavaScript";

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const toSourceFilePath = "../../root/src/index.ts";
const toDistributionFilePath = "../../out/dist/index.js";
const toFatalJsFilePath = "../../root/tests/fatal/javascript.js";
const toFatalTsFilePath = "../../root/tests/fatal/typescript.ts";

const languages = [
  {
    language: TYPESCRIPT,
    filePath: path.join(currentDirectoryPath, toSourceFilePath),
    fatalPath: path.join(currentDirectoryPath, toFatalJsFilePath),
  },
  {
    language: JAVASCRIPT,
    filePath: path.join(currentDirectoryPath, toDistributionFilePath),
    fatalPath: path.join(currentDirectoryPath, toFatalTsFilePath),
  },
] as const satisfies {
  language: typeof TYPESCRIPT | typeof JAVASCRIPT;
  filePath: string;
  fatalPath: string;
}[];

/**
 * Asserts that the file path passed to `getSourceCodeFromFilePath` correctly returns `null` when the file is nonexistent or when encountering fatal syntax. (The assertion process happens within this utility.)
 * @param filePath The file path at hand.
 */
const assertNullPath = (filePath: string) => {
  const results = getSourceCodeFromFilePath(filePath);
  assert.strictEqual(results, null);
};

/**
 * Asserts that the file path passed to `getSourceCodeFromFilePath` correctly returns a `SourceCode` object when the file exists and is valid. (The assertion process happens within this utility.)
 * @param filePath The file path at hand.
 */
const assertFilePath = (filePath: string) => {
  const results = getSourceCodeFromFilePath(filePath);
  assert.notStrictEqual(results, null);

  // Checks that the AST does exists.
  assert.ok(results?.ast);
  // Checks that the comments are retrievable.
  assert.strictEqual(typeof results?.getAllComments, "function");
};

describe("getSourceCodeFromFilePath", () => {
  it("should return `null` for a nonexistent file", () =>
    assertNullPath("/path/to/nonexistent/file.js"));

  for (const l of languages) {
    it(`should return \`null\` when given an invalid ${l.language} file`, () =>
      assertNullPath(l.fatalPath));

    it(`should return a \`SourceCode\` object when given a valid ${l.language} file`, () =>
      assertFilePath(l.filePath));
  }
});
