const fs = require("fs")

const rules = require("./tslint.json")
const js = `module.exports = ${JSON.stringify(rules, null, 2)}`

fs.writeFileSync("index.js", js, "utf8")
