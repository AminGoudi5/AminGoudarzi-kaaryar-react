import "./style.css";
import Header from "../Header";
import List from "../LIst";
import order from '../orders.json'
function OrderShell() {
    return (
        <div className="wrapper">
            <div className="header"><Header /></div>
            <div className="main"><List orders={order}/></div>
        </div>
    )
}

export default OrderShell;