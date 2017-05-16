import React from 'react';
import {connect} from 'react-redux';
import {FlatButton, TextField, Divider} from 'material-ui';

import '../../public/stylesheets/youtube.scss';

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
     let videoId = e.target.getAttribute('data-videoid');
     //set Requested song here
  }


  render() {    
    return (
        <div className="youtube-section col-xs-3 no-pad" style={{textAlign:'center',color:'#fff',backgroundColor:'#303030'}}>
           
           <h2 className="header">
                YouTube Music
          </h2>
          <form action="#" id='youtube-form' onSubmit={this.triggerSearch}>
               <TextField  type="input" hintText="Search Song" id="youtube-search" name="youtubeSearch" autoComplete="off" style={{color:'#000',width:'50%'}} /> 
               <FlatButton type="submit" label="Search" style={{color:'#fff',backgroundColor:'#e52d27',with:'50%'}} primary={true} />
          </form>
          

          <div id='youtube-results'>
             {(this.state.result) ?
                this.state.result.map((item) =>{
                  return(
                    <div key={item.id.videoId}>
                      <h4 >{item.snippet.title}</h4>
                      <div style={{width:'100%:',marginBottom:'10'}}>
                        <img style={{textAlign:'center'}}src={item.snippet.thumbnails.default.url}/>
                      </div>
                      <FlatButton type="submit" label=" Request song" data-videoid={item.id.videoId} onClick={this.sendRequest} style={{color:'#fff',backgroundColor:'#e52d27',with:'50%',marginBottom:'10'}} primary={true} />
                      <Divider />
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
