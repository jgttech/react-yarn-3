#!/usr/bin/env node
const { resolve, join } = require('path');
const { ensureDirSync, readdirSync, copyFileSync, rmSync } = require('fs-extra');
const bundles = resolve('bundles/@yarnpkg');
const plugins = resolve(__dirname, '../../../.plugins/@yarnpkg');
const files = readdirSync(bundles);

// Ensure this directory exists.
ensureDirSync(plugins);

files.forEach(file => {
  const src = join(bundles, file);
  const dest = join(plugins, file);

  copyFileSync(src, dest);
});

// Remove the bundles directory.
rmSync(join(bundles, '..'), { recursive: true });
