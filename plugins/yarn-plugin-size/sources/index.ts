import { Plugin } from '@yarnpkg/core';
import { SizeCommand } from './SizeCommand';

const plugin: Plugin = {
  commands: [SizeCommand],
};

export default plugin;
