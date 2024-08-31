export default {
  branches: [
    'main',
    'master',
    {
      name: 'alpha',
      prerelease: true,
    },
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'next',
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {
            scope: 'no-release',
            release: false,
          },
          {
            type: 'refactor',
            release: 'patch',
          },
          {
            type: 'chore',
            scope: 'deps',
            release: 'patch',
          },
          {
            type: 'docs',
            release: 'patch',
          },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            {
              type: 'feat',
              section: '✨ Features',
              hidden: false,
            },
            {
              type: 'fix',
              section: '🐛 Bug Fixes',
              hidden: false,
            },
            {
              type: 'chore',
              scope: 'deps',
              section: '📚 Some changes',
              hidden: false,
            },
            {
              type: 'refactor',
              section: '📚 Some changes',
              hidden: false,
            },
            {
              type: 'docs',
              section: '📚 Some changes',
              hidden: false,
            },
            {
              type: 'style',
              hidden: true,
            },
            {
              type: 'perf',
              hidden: true,
            },
            {
              type: 'test',
              hidden: true,
            },
          ],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/github',
    '@semantic-release/git',
  ],
};
