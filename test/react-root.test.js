const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const webpack = require('webpack');
const config = require('../examples/react-root/webpack.config');

it('Adds a static partial containing a div with id of root to the body and compiles a react app', (done) => {

  webpack(config, (error, result) => {

    expect(error).to.equal(null);

    const html = result.compilation.assets['index.html'].source();
    const fixture = fs.readFileSync(path.resolve(__dirname, 'fixtures/react-root.html')).toString();

    expect(html).to.equal(fixture);

    done();

  });

});