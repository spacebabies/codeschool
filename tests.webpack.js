var context = require.context('./test/components', true, /.+\_test\.js?$/);

require('core-js/es5');

context.keys().forEach(context);
module.exports = context;
