new require('http').Server().on('request', function(req, res){
  require('fs').createReadStream(__dirname+'/airhorn.mp3').pipe(new require('lame').Decoder()).pipe(new require('speaker')());
  require('fs').createReadStream(__dirname+'/index.html').pipe(res);
}).listen( process.env.PORT || 5000);
