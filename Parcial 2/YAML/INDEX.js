const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const archivo = fs.readFileSync(path.join(__dirname,"/objeto.yml"),'utf-8');
const objYaml = YAML.parse(archivo)

console.log(typeof objYaml)
console.table(objYaml)