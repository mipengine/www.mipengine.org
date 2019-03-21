/**
 * @file index.js
 * @author clark-t (clarktanglei@163.com)
 */

const compiler = require('./compiler')
// const fs = require('fs');

// compiler.on(compiler.STAGES.DONE, () => {
//     compiler.getEntryPaths().then(result => {
//         console.log(result)
//     })
//     // console.log(Object.keys(compiler.module.store.storage.map))
// });

compiler.exec()

// compiler.exec().then(() => {
//     compiler.getEntryPaths().then(result => {
//         console.log(result)
//     })
// });
