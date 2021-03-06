module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          actionCable: './src/actionCable',
          actions: './src/actions',
          api: './src/api',
          assets: './src/assets',
          services: './src/services',
          components: './src/components',
          constants: './src/constants',
          screens: './src/screens',
          hooks: './src/hooks',
          locale: './src/locale',
          reducers: './src/reducers',
          selectors: './src/selectors',
          store: './src/store',
          utils: './src/utils',
          navigators: './src/navigators',
          validations: './src/validations',
        },
      },
    ],
  ],
};
