const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@data': 'src/data',
        '@form': 'src/components/form',
        '@ui': 'src/components/UI',
        '@store': 'src/store',
        '@layout': 'src/layout',
        '@main': 'src/pages/Main/components',
        '@repair': 'src/pages/Repair/components',
    })(config);

    return config;
}