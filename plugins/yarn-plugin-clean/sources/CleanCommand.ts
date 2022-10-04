import { BaseCommand } from '@yarnpkg/cli';

export class CleanCommand extends BaseCommand {
  static paths = [['clean']];

  async execute(): Promise<void> {
    console.log('clean command!');
  }
}
