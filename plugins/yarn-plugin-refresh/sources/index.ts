import { Plugin } from '@yarnpkg/core';
import { RefreshCommand } from './RefreshCommand';

const plugin: Plugin = {
  commands: [RefreshCommand],
};

export default plugin;
