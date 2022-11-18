// .mocharc.js

module.exports = {
  recursive: true,
  reporter: 'spec',
  timeout: 5000,
  require: [
    'chai/register-assert.js', // Using Assert style
    'chai/register-expect.js', // Using Expect style
    'chai/register-should.js', // Using Should style
    'ts-node/register',
  ],
};
