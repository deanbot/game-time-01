const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';
const config = {
  development: {
    root: rootPath,
    port: process.env.PORT || 3000,
    bodyLimit: '100kb',
    corsHeaders: [
      'Link'
    ]
  },
  test: {
    root: rootPath,
    port: process.env.PORT || 3000,
    bodyLimit: '100kb',
    corsHeaders: [
      'Link'
    ]
  },
  production: {
    root: rootPath,
    port: process.env.PORT || 3000,
    bodyLimit: '100kb',
    corsHeaders: [
      'Link'
    ]
  }
};

export default config[env];