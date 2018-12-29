
const paths = {
    typescript: 'src/**/*.ts',
    pug: ['src/**/*.pug'],
    metadata: [
        'package.json',
    ],
    includedStyles: [
        'themes/**/*.scss'
    ],
    exportSrv: 'export/',
    styles: ['themes/aire.scss'],
    allStyles: 'themes/**/*.scss',
    output: 'dist',
    createScssInclusions : utils => {
        return [
            `${utils.source('uikit')}/scss`
        ]
    }
};


module.exports = paths;