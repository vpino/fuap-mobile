module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-paper/babel.js',
    '@babel/plugin-transform-private-methods',
    '@babel/plugin-proposal-class-properties',
    'react-native-reanimated/plugin',
  ],
};
