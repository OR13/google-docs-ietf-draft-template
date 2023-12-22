
const fs = require('fs')
const path = require('path')
const YAML = require('yaml')

const createTemplate = require('../src/docs2xml2rfc/createTemplate')

const RESPONSE_JSON_PATH = path.join(process.cwd(), 'src', 'mocks', 'response.json');
const DRAFT_YAML_PATH = path.join(process.cwd(), 'draft.yml');

const draftYaml = fs.readFileSync(DRAFT_YAML_PATH).toString();
const meta = JSON.parse(JSON.stringify(YAML.parse(draftYaml)))

const documentResponse = fs.readFileSync(RESPONSE_JSON_PATH).toString()
const document = JSON.parse(documentResponse)

it('should convert a json network response and yaml config file to a json template', ()=>{
  const template = createTemplate(document, meta);
  // console.log(JSON.stringify(template, null, 2))
})