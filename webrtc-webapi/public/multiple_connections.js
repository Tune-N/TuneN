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
        // gainNode.gain.value = 0;

        var destination = context.createMediaStreamDestination();

        connection.attachStreams.push(destination.stream);

        connection.dontCaptureUserMedia = true;

        let soundSource = null;
         // var source = context.createBufferSource()
    
       /* 
        document.querySelector('input[type=file]').onchange = function() {
            
            //This can be done from an ajax request spotify
            
            
            var reader = new FileReader();
            
            reader.readAsArrayBuffer(this.files[0]);

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
                    // console.log(destination.stream)
                    
                    // document.getElementById('openNewSessionButton').disabled = false;
                });
            });
            
        };
        
    */

     document.getElementById('get-song').onclick = function(e) {
            
            e.preventDefault()

            let request = new XMLHttpRequest();
            // console.log(request)

            // onprogress
            // Uncaught (in promise) TypeError: Failed to execute 'decodeAudioData' on 'BaseAudioContext': parameter 1 is not of type 'ArrayBuffer'.
            // at XMLHttpRequest.request.onprogress (multiple_connections.js:104)

            
            request.open('POST', 'http://localhost:3000/mp3', true);
            request.responseType = 'arraybuffer';
            request.onload = function(){
                context.decodeAudioData(request.response, function(buffer) {
                    source.buffer = buffer
                },null)
            }
            request.send();
            source.connect(gainNode)
            source.connect(destination)
            
            source.start(0)

     };



      // gapi.client.setApiKey("AIzaSyAJwrNLjdO3XLFOYGIV1MBTgJWDV-hTVec");
      //   gapi.client.load("youtube",'v3',function(data){
      //       //youtube is ready
      //       console.log(data)
      //   })

     // function youtubeInit(){
     //    console.dir(gapi)
     //    console.log('hello Motot')

     //    gapi.client.setApiKey("AIzaSyAJwrNLjdO3XLFOYGIV1MBTgJWDV-hTVec");
     //    gapi.client.load("youtube",'v3',function(data){
     //        //youtube is ready
     //        console.log(data)
     //    })
     // }



     document.getElementById('youtube-form').onsubmit = function(e) {
        e.preventDefault();

        let searchText = e.target.youtubeSearch.value

        gapi.client.setApiKey("AIzaSyAJwrNLjdO3XLFOYGIV1MBTgJWDV-hTVec");
        gapi.client.load("youtube",'v3',function(data){
            
        document.getElementById('youtube-results').innerHTML = "";

            // preparing to request
            // encodeURIComponent(searchText.replace(/%20/g,"+"))
            var request = gapi.client.youtube.search.list({
                part:"snippet",
                type:"video",
                q:searchText.replace(/%20/g,"+"),
                maxResults:3,
                order:"viewCount",
                videoDuration:'medium'
            })

            request.execute(function(response){
                let results = response.result;
                console.log(results)


                var resultsContainer = document.getElementById('youtube-results');
                

                results.items.forEach((item)=>{


                    console.log(item);

                    let div =  document.createElement('div');     

                    let img = document.createElement('img');
                    img.src =  item.snippet.thumbnails.default.url

                    let button = document.createElement('button');
                        button.innerHTML= "Request Song"
                        button.setAttribute('class', 'btn-request-song');
                        button.setAttribute('data-songid',item.id.videoId);
                    
                    div.appendChild(img);
                    div.appendChild(document.createTextNode(item.snippet.title));
                    div.appendChild(button);
                    resultsContainer.appendChild(div);
                    resultsContainer.appendChild(document.createElement('br'));

                })



                //Request Button Logic
                var songOptions = document.getElementsByClassName("btn-request-song");
                var videoIdInput = document.getElementById('video-id')
                console.log(videoIdInput)
                for (var i = 0; i < songOptions.length; i++) {
                    songOptions[i].addEventListener('click', function(){
                        videoIdInput.value = this.getAttribute("data-songid");
                    }
                    , false);
                } 
            })
            
        }) 



     }


     document.getElementById('select-form').onsubmit = function(e) {
        e.preventDefault();
        let videoId = e.target.videoId.value;


        let request = new XMLHttpRequest();
     
        
        request.open('GET', `/mp3/${videoId}`, true);
        request.responseType = 'arraybuffer';
        request.onload = function(){
            context.decodeAudioData(request.response, function(buffer) {
                
                if(soundSource){
                    soundSource.disconnect();
                }
                soundSource = context.createBufferSource();
                soundSource.buffer = buffer
                soundSource.connect(gainNode)
                soundSource.connect(destination)
                soundSource.start(0)

            },null)
        }
        request.send();
      

     }



     



