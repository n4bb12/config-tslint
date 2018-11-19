const fs = require("fs")

const config = require("./tslint.preset.json")
config.jsRules = config.rules
const js = `module.exports = ${JSON.stringify(config, null, 2)}`

fs.writeFileSync("index.js", js, "utf8")
