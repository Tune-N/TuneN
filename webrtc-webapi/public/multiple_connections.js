        var connection = new RTCMultiConnection();
            connection.channel = 'full-stack'
        
        connection.session = {
            'video':false,
            audio: true,
            oneway: true
        };


        var streamsContainer = document.getElementById('streams-container');
        connection.onstream = function(e) {
            streamsContainer.appendChild(e.mediaElement);
        };


        // connect to signaling gateway
        connection.connect();

        // open new session
        document.getElementById('openNewSessionButton').onclick = function() {
            connection.open('fullstack-academy')
            // connection.open('fullstack-Academy-01', function(something) {
            //     alert('Room has been created.');


            //  console.log(connection.getAllParticipants())
            // });

            console.log(connection)

            
        };




        window.AudioContext = window.AudioContext || window.webkitAudioContext;


        var context = new AudioContext();

        var gainNode = context.createGain();

        gainNode.connect(context.destination);

        // don't play for self
        gainNode.gain.value = 0;

        var destination = context.createMediaStreamDestination();

        connection.attachStreams.push(destination.stream);

        connection.dontCaptureUserMedia = true;

        let soundSource = null;
        
        document.querySelector('input[type=file]').onchange = function() {
            
            //This can be done from an ajax request spotify
            
            var reader = new FileReader();
            reader.onload = (function(e) {
                // Import callback function that provides PCM audio data decoded as an audio buffer
                    context.decodeAudioData(e.target.result, function(buffer) {
                    // Create the sound source -- Multiple songs runnig at once
                    // if(soundSource){
                    //     soundSource.disconnect();
                    // }
                    soundSource = context.createBufferSource();
                    soundSource.buffer = buffer;
                    soundSource.start(0, 0 / 1000);
                    // soundSource.connect(gainNode);
                    soundSource.connect(destination);
                    console.log(destination.stream)
                    
                    // document.getElementById('openNewSessionButton').disabled = false;
                });
            });


            reader.readAsArrayBuffer(this.files[0]);
            console.log(this.files)
            // console.log(this.files[0])
        };