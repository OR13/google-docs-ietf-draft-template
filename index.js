
const { google } = require('googleapis');

const { authorize } = require('./src')


const DOCUMENT_ID = '1OYGNt3nlzM0-P949PkOt-DnIUWnjHtGzKtjEXKfpBFQ'


/**
 * Prints the title of a sample doc:
 * https://docs.google.com/document/d/195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 */
async function printDocTitle(auth) {
  const docs = google.docs({version: 'v1', auth});
  const res = await docs.documents.get({
    documentId: DOCUMENT_ID,
  });
  console.log(`The title of the document is: ${res.data.title}`);
}

authorize().then(printDocTitle).catch(console.error);