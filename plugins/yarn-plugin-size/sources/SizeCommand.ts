import { BaseCommand } from '@yarnpkg/cli';

export class SizeCommand extends BaseCommand {
  static paths = [['size']];

  async execute(): Promise<void> {
    console.log('size command!');
  }
}
