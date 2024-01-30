module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
};
