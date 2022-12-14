import React, { useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Comment from './Comment'
import Collapsible from 'react-collapsible'
import NewComment from './NewComment'
import ColorMe from './ColorMe'



const Post = (props) => {
  
  useEffect(()=> {
    props.getPosts();
  },[]);
 
  const deletePost = (newVar) => {
    const actuallyDeletePost = async (e) => {
      e.preventDefault()
      const url =`${process.env.REACT_APP_MONGODB_URL}${newVar._id}`
      console.log(url)
      try{
        const deleteThis = await fetch(url,{
          method: 'DELETE'
        })
        const deletedPost = await deleteThis.json()
        props.getPosts()
      }
      catch(err) {
        console.log(err)
      }
    }  

      if(props.session == newVar.user){return (<input
        type="button"
        className='deletePostButton'
        value='Delete'
        onClick= { actuallyDeletePost } 
        />)}
      else{return(<div></div>)}
  }

  return (
    <div className="post-container">
       {props.props.map((post, index)=> {  
          return ( 
          <div key = { index } className="individualPost">
            <div className="postTopBar">
              <div className='userInfo'>
                <div className='profile-pic-container'>
                  <img className="profile-pic" src="https://picsum.photos/200/300" alt="profile-pic"/>           
                </div>                
                <div 
                  className="username"
                  style={ColorMe(post.user)} //colors username text
                  
                >{post.user}:</div>
              </div>
              <div className='postTitle'>{ post.title }</div>
              { deletePost(post) }
            </div>  
              
            <div className='player-wrapper postMiddleBar'>
              
                <ReactAudioPlayer
                  className='react-player'
                  src = {post.file}
                  controls
                  key={index}   
                 />
                <div className='post-description'>{ post.description }</div>
            </div>
              <Collapsible 
                className="new-comment" 
                trigger="Add Comment"
                triggerStyle={{
                  backgroundColor: 'rgba(55, 55, 55, 0.2)', 
                  borderRadius: "10px",
                  fontSize: "16px",
                  border: "10px solid rgba(255, 255, 255, 0)",

                }}
              >
                <NewComment getPosts={props.getPosts} props={post._id} session={props.session}/>
              </Collapsible>
              <Comment props={post.comments} session ={ props.session }/>
          </div>
          )
        })}
    </div>
  )
}

export default Post