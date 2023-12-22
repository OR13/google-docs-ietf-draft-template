
const path = require('path');
const process = require('process');
const { make } = require('./src');


const TOKEN_PATH = path.join(process.cwd(), 'security', 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'security', 'credentials.json');

const DOCUMENT_ID = '1OYGNt3nlzM0-P949PkOt-DnIUWnjHtGzKtjEXKfpBFQ';
const DRAFT_PATH = path.join(process.cwd(), 'drafts', '1OYGNt3nlzM0-P949PkOt-DnIUWnjHtGzKtjEXKfpBFQ.xml');

(async () => {
  await make(DOCUMENT_ID, DRAFT_PATH, {
    TOKEN_PATH,
    CREDENTIALS_PATH
  })
})()