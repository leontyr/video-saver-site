const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const required = ['index.html', 'privacy.html', 'terms.html', 'styles.css', 'assets/icon.png', 'assets/video-saver-screenshot.png'];
const errors = [];

for (const relative of required) {
  if (!fs.existsSync(path.join(root, relative))) errors.push(`Missing ${relative}`);
}

for (const relative of ['index.html', 'privacy.html', 'terms.html']) {
  const source = fs.readFileSync(path.join(root, relative), 'utf8');
  if (/\{\{(?:LEGAL_NAME|SUPPORT_EMAIL)\}\}/.test(source)) errors.push(`${relative} contains an unresolved identity placeholder`);
  if (/download any video|\b(?:can|will|helps?|lets? you)\s+bypass (?:DRM|restrictions|access controls)/i.test(source)) {
    errors.push(`${relative} contains prohibited product positioning`);
  }
}

if (errors.length) {
  console.error('Site is not ready to publish:\n- ' + errors.join('\n- '));
  process.exit(1);
}

console.log('Video Saver site is ready to publish.');
