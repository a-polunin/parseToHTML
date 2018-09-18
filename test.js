const data = require("./home-work").data;
const parser = require("./home-work").parser;
const fs = require("fs");
const assert = require("assert");

const htmlFileText = fs.readFileSync("./home-work/index.html", "utf-8").replace(/\s/g, "");;
const parserString = parser(data).replace(/\s/g, "");

describe("zaparseno", function() {
  it("parser function is correct", function() {
    assert.equal(htmlFileText, parserString);
  });
});