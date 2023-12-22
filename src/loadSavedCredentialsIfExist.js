
const fs = require('fs').promises;
const { google } = require('googleapis');

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist(TOKEN_PATH) {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    // console.error(err);
    return null;
  }
}

module.exports = { loadSavedCredentialsIfExist };