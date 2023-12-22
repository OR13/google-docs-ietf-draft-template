const {authenticate} = require('@google-cloud/local-auth');
const { loadSavedCredentialsIfExist } = require('./loadSavedCredentialsIfExist');
const { saveCredentials } = require('./saveCredentials');

const { SCOPES, CREDENTIALS_PATH } = require('./constants');

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

module.exports = { authorize }