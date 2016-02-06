new require('http').Server().on('request', function(req, res){
  require('fs').createReadStream('airhorn.mp3').pipe(new require('lame').Decoder()).pipe(new require('speaker')());
  res.end("OK");
}).listen( process.env.PORT || 3000);
