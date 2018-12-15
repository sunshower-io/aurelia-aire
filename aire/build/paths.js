
const paths = {
    typescript: 'src/**/*.ts',
    pug: ['src/**/*.pug'],
    metadata: ['package.json'],
    styles: ['themes/aire.scss'],
    allStyles: 'themes/**/*.scss',
    output: 'dist',
    components: ['src/**/components.json', 'src/**/*.md'],
    createScssInclusions : utils => {
        return [
            `${utils.source('uikit')}/scss`
        ]
    }
};


module.exports = paths;