import './style.css';
import OrderItem from '../OrderItem';

function List({ orders }) {
   let prevTotal = 0;

   const sellOrders = orders.filter((order) => order.type === "sell").sort((a, b) => a.price - b.price)
      .map((order) => {
         let newOrder = {
            ...order,
            total: prevTotal + order.quantity
         }
         prevTotal = newOrder.total
         return newOrder
      });

   let prevTotal2 = 0
   const buyOrders = orders.filter((order) => order.type === "buy").sort((a, b) => b.price - a.price)
      .map((order) => {
         let newOrder = {
            ...order,
            total: prevTotal2 + order.quantity
         }
         prevTotal2 = newOrder.total
         return newOrder
      });
   let SellmaximumTotal = Math.max(sellOrders[sellOrders.length - 1].total);
   let BuymaximumTotal = Math.max(buyOrders[buyOrders.length - 1].total);
   const newSellOrdes = sellOrders.map((item, index) => <OrderItem key={index} amount={item.quantity} price={item.price} type={item.type} total={item.total} maximumTotal={SellmaximumTotal} />)
   const newBuyOrders = buyOrders.map((item, index) => <OrderItem key={index} amount={item.quantity} price={item.price} type={item.type} total={item.total} maximumTotal={BuymaximumTotal} />)
   return (
      <table className='list'>
        
            <td  className='list-sell'>{newSellOrdes}</td>
            <td  className='list_buy'>{newBuyOrders}</td>
         
      </table>
   )
}

export default List;