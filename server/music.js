'use strict'

const router = require('express').Router();
// const stream = require('youtube-audio-stream');
const ytdl = require('ytdl-core');

router.get('/youtube/mp3/:videoId',function (req, res, next) {	
  // stream(`https://www.youtube.com/watch?v=${req.params.videoId}`).pipe(res)
  ytdl(`https://www.youtube.com/watch?v=${req.params.videoId}`).pipe(res)
});


module.exports = router;