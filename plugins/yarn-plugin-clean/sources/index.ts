import { Plugin } from '@yarnpkg/core';
import { CleanCommand } from './CleanCommand';

const plugin: Plugin = {
  commands: [CleanCommand],
};

export default plugin;
