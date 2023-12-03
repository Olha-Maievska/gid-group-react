const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@data': 'src/data',
        '@form': 'src/components/form',
        '@ui': 'src/components/UI',
        '@store': 'src/store',
        '@utils': 'src/utils',
        '@layout': 'src/layout',
        '@main': 'src/pages/Main/components',
        '@repair': 'src/pages/Repair/components',
        '@design': 'src/pages/Design/components',
        '@services': 'src/pages/Services/components',
        '@calc': 'src/pages/Calculator/',
    })(config);

    return config;
}