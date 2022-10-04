import { BaseCommand } from '@yarnpkg/cli';

export class RefreshCommand extends BaseCommand {
  static paths = [['refresh']];

  async execute(): Promise<void> {
    console.log('refresh command!');
  }
}
