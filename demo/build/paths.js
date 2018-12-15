
const paths = {
    assets: ['assets/**/*', 'src/**/*.json'],
    typescript: 'src/**/*.ts',
    pug: ['src/**/*.pug'],
    styles: ['themes/main.scss'],
    dest: 'dist',
    metadata: '',
    createScssInclusions : utils => {
        return [
            `${utils.source('aire', 'local')}`
        ]
    }
};

module.exports = paths;