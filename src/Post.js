import './Post.css'
import Avatar from '@material-ui/core/Avatar'
import image1 from './static/avatar/1.jpeg'



function Post() {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar 
            className="post__avatar"
            alt="mcb"
            src={image1}
            />
           
            <h3>Jack Nickeson</h3>
            </div>
           
            {/* header -> avatar + username */}
            <img class="post__image" src="https://images.unsplash.com/photo-1512873897628-eea05c840147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt=""/>

            <h4 className="post__text"><strong>muratcanberber</strong> Great photo</h4>         
        </div>
    )
}

export default Post
