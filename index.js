
const path = require('path');
const process = require('process');

const { make } = require('./src');


const TOKEN_PATH = path.join(process.cwd(), 'security', 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'security', 'credentials.json');
const DRAFT_YAML_PATH = path.join(process.cwd(), 'draft.yml');

const DOCUMENT_ID = '1OYGNt3nlzM0-P949PkOt-DnIUWnjHtGzKtjEXKfpBFQ';
const DRAFT_PATH = path.join(process.cwd());

(async () => {
  await make(DOCUMENT_ID, DRAFT_PATH, {
    TOKEN_PATH,
    CREDENTIALS_PATH,
    DRAFT_YAML_PATH
  })
})()