import './style.css';


function OrderItem({ amount, price, type, total, maximumTotal }) {
  const sellStyle = {
    backgroundColor: "#FDE4E4",
    color: "rgb(255, 21, 0)",
    width: `${total / maximumTotal * 100}%`


  };

  const buyStyle = {
    backgroundColor: "#DFFFE7",
    width: `${total / maximumTotal * 100}%`,
    color: "rgb(0, 255, 38)"
  };
  if (type === "sell") {
    return (

      <tr className='sellItem'>
        <td>{total}</td>
        <td>{amount}</td>
        <tr className='d-flex'><td style={sellStyle}>{price}</td></tr>
      </tr>

    )
  } else {
    return (

      <tr className='buyItem'>
        <tr className='d-flex'><td style={buyStyle}>{price}</td></tr>
        <td>{amount}</td>
        <td>{total}</td>
      </tr>

    )
  }
}

export default OrderItem;