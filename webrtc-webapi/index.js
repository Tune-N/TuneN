const express = require("express");
const path = require('path');
const app = new express();
const stream = require('youtube-audio-stream');
const bodyParser = require('body-parser');

const url = 'https://www.youtube.com/watch?v=BZmL5xGizms'

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/client', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/client_view.html'));
});

app.get('/mp3/:videoId', function(req, res) {
	console.log(req.params.videoId)
    stream(`https://www.youtube.com/watch?v=${req.params.videoId}`).pipe(res)
    
    // res.send(req.body)
    // stream(`https://www.youtube.com/watch?v=ShOQQOy5pf8`).pipe(res)
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    // stream(url).pipe(res)

    // console.log()

    // stream(url).pipe(res.sendFile(path.join(__dirname + 'public/index.html')))
});

app.listen(port, function(){
	console.log(`Server listening on Port: ${port}`)
});