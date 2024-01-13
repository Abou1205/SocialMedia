import './post.css'
import {MoreVert} from '@mui/icons-material'
import {Users} from '../../dummyData'
import { useState } from 'react'

const Post = ({post}) => {
    
    // post destruction
    const{date,photo,like,comment,desc,userId} = post
    
    // username filter
    const user = Users.filter((user) => user.id === userId)

    // profile photo filter
    const profilePhoto = Users.filter((user) => user.id === userId)

    // likeHandler states
    const [liked,setLiked] = useState(like)
    const [isLiked,setIsLiked] = useState(false)
    
    const likeHandler = () => {
        setLiked(isLiked ? liked - 1 : liked + 1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={profilePhoto[0].profilePicture} className='postTopImg' />
                    <span className='postUserName'>{user[0].username}</span>
                    <span className='postDate'>{date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className='postText'>{desc}</span>
                <img src={photo} className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" onClick={likeHandler}/>
                    <img className='likeIcon' src="assets/heart.png" onClick={likeHandler} />
                    <span className="postLikeCounter">{liked} people liked</span>
                </div>
                <div className="postBottomRight">
                    <span className='postCommentText'>{comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post