const {authenticate} = require('@google-cloud/local-auth');
const { loadSavedCredentialsIfExist } = require('./loadSavedCredentialsIfExist');
const { saveCredentials } = require('./saveCredentials');

const { SCOPES } = require('./constants');

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize({ TOKEN_PATH, CREDENTIALS_PATH }) {
  let client = await loadSavedCredentialsIfExist(TOKEN_PATH);
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client, { TOKEN_PATH, CREDENTIALS_PATH });
  }
  return client;
}

module.exports = { authorize }