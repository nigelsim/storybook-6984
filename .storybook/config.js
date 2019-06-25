import { configure, addParameters } from '@storybook/angular';

import '../src/stylesheets/styles.scss';

addParameters({
    options: {
      hierarchyRootSeparator: /\|/,
    },
  });

function loadStories() {
    // require('../stories/index.ts');
    const req = require.context('../src', true, /\.stories\.ts$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
