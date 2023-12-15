import './style.css';
import Header from '../Header';
import Items from '../Items';
import toDo from '../todo.json'
import Action from '../Action';
function ListBox() {
    return (
        <div className="container">
            <Header />
            <Items list={toDo} />
            <Action />
        </div>
    )
}

export default ListBox