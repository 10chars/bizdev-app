import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from 'domain/store';
import { getLogger } from 'domain/utils/logger';
import startRouters from 'domain/middleware/router';
import { App } from './app';
const logger = getLogger('@app');

export function render() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

store.addWatch('renderLoop', render);
startRouters();

declare const module: {
  hot: {
    accept: (path: string, fn: () => void) => void
  }
};

if (module.hot) {
  module.hot.accept('./app', () => {
    logger.time('Hot update applied');
    render();
    logger.timeEnd('Hot update applied');
  });
}
