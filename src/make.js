const { google } = require('googleapis');

const { authorize } = require('./authorize')

/**
 * Prints the title of a sample doc:
 * https://docs.google.com/document/d/195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
 */
async function make(documentId, draftPath, { TOKEN_PATH, CREDENTIALS_PATH }) {
  const auth = await authorize({ TOKEN_PATH, CREDENTIALS_PATH });
  const docs = google.docs({version: 'v1', auth});
  const res = await docs.documents.get({
    documentId: documentId,
  });
  console.log(`The title of the document is: ${res.data.title}`);

  console.log(`OUTPUT: ${draftPath}`);
}

module.exports = {  make }