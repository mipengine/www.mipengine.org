var schedule = require('node-schedule');
var exec = require('child_process').exec;
var cmdStr = 'sh ./build.sh';
var count = 0;

function scheduleCronstyle(){
    var timer = schedule.scheduleJob('* */5 * * * *', function(){
        exec(cmdStr, function(err,stdout,stderr){
            console.log("每5分钟已执行" + count);
            count ++;
            if (err) {
              console.log(err)
            }
            if (stdout) {
              console.log('stdout:' + stdout)
            }
            if (stderr) {
              console.log('stderr:' + stderr)
            }
        })
   });
}

scheduleCronstyle();
