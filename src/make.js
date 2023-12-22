
const fs = require('fs')

const path = require('path')

const moment = require('moment')
const { google } = require('googleapis');
const { authorize } = require('./authorize')

const YAML = require('yaml')

const docs2xml2rfc = require('./docs2xml2rfc')

const mockedResponse = require('./mocks/response.json')

const USE_MOCK = true;

async function make(documentId, draftPath, { TOKEN_PATH, CREDENTIALS_PATH, DRAFT_YAML_PATH }) {
  let response = mockedResponse;
  if (!USE_MOCK){
    const auth = await authorize({ TOKEN_PATH, CREDENTIALS_PATH });
    const docs = google.docs({ version: 'v1', auth });
    const response = await docs.documents.get({
      documentId: documentId,
    });
    // beware this can leak your token...
    // which will give everyone access to all your documents in google.
    response.config.headers['Authorization'] = "Bearer ya29.a0AfB...0n3VUQ0171"
    fs.writeFileSync(`src/mocks/response.json`, JSON.stringify({ MOCKED: moment().format('LLLL'), ...response }, null, 2))
  }

  const draftYaml = fs.readFileSync(DRAFT_YAML_PATH).toString();
  const meta = JSON.parse(JSON.stringify(YAML.parse(draftYaml)))

  const draftFileName = path.join(draftPath, `${response.data.title}.xml`)
  const draftXml = await docs2xml2rfc(response, meta);
  fs.writeFileSync(draftFileName, draftXml);

  console.log(`OUTPUT: ${draftFileName}`);
}

module.exports = { make }