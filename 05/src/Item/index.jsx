import './style.css';


function Item({ work }) {
    return (
        <div className='item'>
            <p className='p-item'>
                {work}
            </p>
            <button className='close-button'>X</button>
        </div>
    )
}
export default Item;