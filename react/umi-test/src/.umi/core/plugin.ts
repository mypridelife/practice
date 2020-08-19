// @ts-nocheck
import { Plugin } from 'D:/workspace/github/practice/react/umi-test/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','getInitialState','request',],
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});

export { plugin };
