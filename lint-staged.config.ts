import type { Configuration } from 'lint-staged';

const config: Configuration = {
  '*.ts': ['oxlint --fix', 'oxfmt'],
};

export default config;
