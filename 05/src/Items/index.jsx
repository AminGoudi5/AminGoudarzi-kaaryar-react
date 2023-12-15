import './style.css';
import Item from '../Item';

function Items({ list }) {
    const toDoList = list.map((work) => <Item key={work.id} work={work.body} />)
    return (
        <div className="items">
            {toDoList}
        </div>
    )
}

export default Items