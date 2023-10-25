const path = require('path');

module.exports = {
  images: {
    domains: ['i.imgur.com', 'images.unsplash.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'sass')],
  },
};
