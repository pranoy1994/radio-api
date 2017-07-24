var lame = require('lame');
var icecast = require('icecast');
var express = require('express');
var router = express.Router();



router.get("/2g", (req, res)=>{
    var url = req.param('url');
    res.writeHead(200, {'content-type':'audio/mpeg'});
    var encoder = lame.Encoder({
      channels: 2,
      bitDepth: 16,
      sampleRate: 44100,


      bitRate: 32,
      outSampleRate: 22050,
      mode: lame.STEREO
      });
    var decoder = lame.Decoder();
    decoder.on('format', function(format) {
      decoder.pipe(encoder);
    });
    
    icecast.get('http://'+url, function(res) {
      res.on('data', function(data) {
        decoder.write(data);
      });
    });

    encoder.on("data", function(data) {
      res.write(data);
      //console.log(data);
    });

});


router.get("/3g", (req, res)=>{
    var url = req.param('url');
    res.writeHead(200, {'content-type':'audio/mpeg'});
    var encoder = lame.Encoder({
      channels: 2,
      bitDepth: 16,
      sampleRate: 44100,


      bitRate: 128,
      outSampleRate: 44100,
      mode: lame.STEREO
      });
    var decoder = lame.Decoder();
    decoder.on('format', function(format) {
      decoder.pipe(encoder);
    });
    

    icecast.get('http://'+url, function(res) {
      res.on('data', function(data) {
        decoder.write(data);
      });
    });

    encoder.on("data", function(data) {
      res.write(data);
      //console.log(data);
    });

});

module.exports = router;