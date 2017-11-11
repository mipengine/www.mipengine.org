/**
 * @file 检查node版本工具
 * @author yugasun <yuga.sun.bj@gmail.com>
 */

'use strict';

var currentVersion = process.version.replace('v', '');
// mast >= 4.0.0
var versionRequirement = '4.0.0';

function errorExit() {
    console.log('');
    console.info('To run this project, you must update following to modules:');
    console.log();
    console.error(' ERROR: node: ' + currentVersion + ' should be >=' + versionRequirement);
    console.log();
    process.exit(1);
}

function checkVersion() {
    var currentVersionArr = currentVersion.split('.');
    var versionRequirementArr = versionRequirement.split('.');
    for (var i = 0; i < versionRequirementArr.length; i++) {
        if (currentVersionArr[i] < versionRequirementArr[i]) {
            errorExit();
        }
    }
}

checkVersion();
