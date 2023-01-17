module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'zmh-program',
          name: 'Zh-Website',
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
}