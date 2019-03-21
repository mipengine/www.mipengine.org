/**
 * @file https://github.com/michael-ciniawsky/postcss-load-config
 * @author tanglei (tanglei02@baidu.com)
 */

module.exports = {
    plugins: {
        // to edit target browsers: use "browserlist" field in package.json
        autoprefixer: {
            browserslist: [
                '> 1%',
                'last 2 versions',
                'ie 9-10',
                'iOS > 7'
            ]
        }
    }
};
