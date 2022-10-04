import { Plugin } from '@yarnpkg/core';
import { LintStagedCommand } from './LintStagedCommand';

const plugin: Plugin = {
  commands: [LintStagedCommand],
};

export default plugin;
