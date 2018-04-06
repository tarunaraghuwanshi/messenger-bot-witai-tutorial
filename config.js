'use strict';

const WIT_TOKEN ='OSJI5AOEQRWN7YK56362HQBXHVMQEHCM';
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.');
}


var FB_PAGE_TOKEN ='EAACaTM4n1JsBABr3eQodedQg2xTiWyfNhXHgesufdqAe1HeBhHQ23h9K6ADH27N9JYjXwEkJImOlNoyoNQvmJs8ORwKazu9ZCQbZAsAZCHrmh9RCwWjwNE4ncVdSkZA1fUbEEDN4yKBCDfP9WG2B9VjHjAUv4O0CVpdk2XFggCbXMOMreYtk';

if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.');
}

var FB_VERIFY_TOKEN = 'my_voice_is_my_password_verify_me';

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}