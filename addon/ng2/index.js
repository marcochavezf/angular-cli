/* jshint node: true */
'use strict';

module.exports = {
  name: 'ng2',
  includedCommands: function () {
    return {
      'new': require('./commands/new'),
      'generate': require('./commands/generate'),
      'init': require('./commands/init'),
      'test': require('./commands/test'),
      'e2e': require('./commands/e2e'),
      'lint': require('./commands/lint'),
      'format': require('./commands/format'),
      'version': require('./commands/version'),
      'completion': require('./commands/completion'),
      'doc': require('./commands/doc'),
      'github-pages-deploy': require('./commands/github-pages-deploy')
    };
  }
};
