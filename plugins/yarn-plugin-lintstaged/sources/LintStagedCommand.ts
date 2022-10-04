import { BaseCommand } from '@yarnpkg/cli';
import { spawnSync } from 'child_process';

export class LintStagedCommand extends BaseCommand {
  static paths = [['lintstaged']];

  async execute(): Promise<void> {
    spawnSync('yarn', ['lint-staged'], { stdio: 'inherit' });
  }
}
