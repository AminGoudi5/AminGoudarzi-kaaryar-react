import Message from "../Message/index"
import "./style.css"

function MessageList({messages}){
    return(
        <div className="message-List">
            {messages.map((item)=>
                <Message key={item.id} id={item.id} body={item.body} isPeer={item.isPeer}  />  
            )}
              
           
        </div>
    )
}
export default MessageList