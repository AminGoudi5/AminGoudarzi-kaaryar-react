import "./style.css"

function Message({ id, body, isPeer }) {
    if (isPeer === true) {
        return (
            <div key={id} className="hisMessage text">
                <p className="text-p">{body}</p>
            </div>
        )
    }else{
        return(
            <div key={id} className="myMessage text">
                <p className="text-p">{body}</p>
            </div>
        )
    }
}


export default Message