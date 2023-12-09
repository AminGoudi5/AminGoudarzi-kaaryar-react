import './style.css';
import Action from '../Action/Index';
import chats from'../Message/messages.json';
import MessageList from '../MessageList/index';


function ChatBox() {
    return (
        <div className="chatBox">
            <MessageList messages={chats}/>
            <Action />
        </div>
    )
}

export default ChatBox