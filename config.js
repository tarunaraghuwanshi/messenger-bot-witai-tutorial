'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'OSJI5AOEQRWN7YK56362HQBXHVMQEHCM'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAACaTM4n1JsBAPKF9tZBr0FPgPk59uKXaPnfJZC0gpGFdnnYGx6SZCip1vmoyMfMHmWwoatY3jIUYhgRp37ZBZAyngw3I9DL5jP4pMYiVnjcGXD7hPkuzllZCPwwtM61v7ZA09BBzh11As8Wq2fbinvrz7HN5BtgSuGJkrSfSZBKu4k72BvV9rhG';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}