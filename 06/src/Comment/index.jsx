import './style.css';


function Comment({ text, id, comments }) {
    const newComment = comments.filter((item) => item.parentId === id);
    return (
        <div className ='comment'>
            <div className='comment-body'>
                <div className='comment-header'>
                    <span>پاسخ</span>
                </div>
                <div className='comment-text'>
                    {text}
                </div>
            </div>
            {
                newComment.map((item) => {
                    return (
                        <Comment key={item.id} id={item.id} text={item.text} comments={comments} />
                    )
                })
            }
        </div>
    )
}
export default Comment