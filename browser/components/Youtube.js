import React from 'react';
import {connect} from 'react-redux'
import '../../public/stylesheets/youtube.scss'

class YoutubeSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      result:'',
    }
    this.triggerSearch = this.triggerSearch.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  componentDidMount() {
    
  }

  triggerSearch(e){
      e.preventDefault();
      let searchText = e.target.youtubeSearch.value;
      gapi.client.setApiKey("AIzaSyAJwrNLjdO3XLFOYGIV1MBTgJWDV-hTVec");
      gapi.client.load("youtube",'v3',(data)=>{
         let request = gapi.client.youtube.search.list({
                          part:"snippet",
                          type:"video",
                          q:searchText.replace(/%20/g,"+"),
                          maxResults:3,
                          order:"viewCount",
                          videoDuration:'medium'
                      })

         request.execute((response)=>{
             let result = response.result.items;
             this.setState({result:result})
         })

      })
  }

  sendRequest(e){
     e.preventDefault();
     let videoId = e.target.getAttribute('data-videoid')
     console.log(videoId)
     //set Requested song here
  }


  render() {    
    return (
        <div className="youtube-section col-xs-4 no-pad">
           <h2 className="header youtube-header">
                YouTube Music
          </h2>
          <form action="#" id='youtube-form' onSubmit={this.triggerSearch}>
                <input type="input" id="youtube-search" name="youtubeSearch" placeholder="Search Song" autoComplete="off"/>
                <input type="submit" value="Search"/>
          </form>

          <div id='youtube-results'>
             {(this.state.result) ?
                this.state.result.map((item) =>{
                  return(
                    <div key={item.id.videoId}>
                      <h4>{item.snippet.title}</h4>
                      <img src={item.snippet.thumbnails.default.url}/>
                      <button data-videoid={item.id.videoId} onClick={this.sendRequest}> Request song </button>
                    </div>
                  )
                })
             : null }
          </div>
        </div>
    );
  }
}

//---------------------------------------------------------

//Actual Connection :

const mapStateToProps = function(state){
  return {
    
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    
  }
}


const Youtube =connect(mapStateToProps, mapDispatchToProps)(YoutubeSearch) 

export default Youtube;
