import './style.css';
import Header from '../Header';
import Comments from '../CommentsList';
import Data from '../comments.json'
function CommentsBox() {
    return (
        <div className="container">
            <Header />
            <Comments orderComments={Data} />
           
        </div>
    )
}

export default CommentsBox