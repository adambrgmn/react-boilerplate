import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/Button/stories');
}

configure(loadStories, module);
