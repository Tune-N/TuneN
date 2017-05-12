const express = require("express");
const path = require('path');
const app = new express();
const stream = require('youtube-audio-stream');
const url = 'https://www.youtube.com/watch?v=FHkMT1Vxi5I'

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));

app.use('/client', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/client_view.html'));
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