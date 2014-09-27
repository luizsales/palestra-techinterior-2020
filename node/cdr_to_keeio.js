var Keen = require("keen.io");
var keen = Keen.configure({
    projectId: "",
    writeKey: ""
});


var config = {
  "collections": ["cdr"],
  "fifo": "/var/log/asterisk/cdr-custom/cdr_fifo.csv",
  "cdr_csv": [
    "clid","src","dst","dcontext","channel",
    "dstchannel","lastapp","lastdata","start",
    "answer","end","duration","billsec",
    "disposition","amaflags","accountcode",
    "uniqueid","userfield","sequence"
  ]
}


var fs = require('fs')
var fifo;

function openFifo() {
  fifo = fs.createReadStream(config.fifo)
  fifo.on('end', openFifo)
  fifo.on('data', function(data) {
    var fields = data.toString().trim().split('","')
    var doc = {}
    for (var i in fields) {
      doc[config.cdr_csv[i]] = fields[i].replace(/(^"|"$)/, '')
    }

keen.addEvent("exemplonode", doc, function(err, res) {
    if (err) {
        console.log("Oh no, an error!");
    } else {
        console.log("Hooray, it worked!");
    }
});

  })
}

if (typeof(fifo) == 'undefined') {
  var exec = require('child_process').exec;
  exec("/bin/rm " + config.fifo + ";/usr/bin/mkfifo -m 777 " + config.fifo, function (err, stdout, stderr) {
    if (err) {
      console.error("ERROR: Can't open fifo file\n%s", err)
      process.exit()
    } else {
      openFifo()
    }
  })
}

function politeExit() {
  console.log("\nBye bye!\n")
  process.exit()
}
process.on('SIGINT', politeExit)

console.log("Waiting writes on " + config.fifo)

