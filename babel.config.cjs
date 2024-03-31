// https://stackoverflow.com/a/61948485/12208663 Comment 1: Renaming babel.config.js to babel.config.cjs  
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ]
};