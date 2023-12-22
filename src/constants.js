const path = require('path');
const process = require('process');

const TOKEN_PATH = path.join(process.cwd(), 'security', 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'security', 'credentials.json');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/documents.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.


module.exports = { TOKEN_PATH, CREDENTIALS_PATH, SCOPES };