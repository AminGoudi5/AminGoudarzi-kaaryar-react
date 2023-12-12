import './style.css';


function Header() {
    return (
        <table>
            <tr className='header-tr'>
                <th colSpan={'2'}>Shell</th>
                <th colSpan={'3'}>Buy</th>
            </tr>
            <tr className='tr'>
                <td>Total (SAT)</td>
                <td>Amount (SAT)</td>
                <td>PRICE (RIAL)</td>
                <td>Amount (SAT)</td>
                <td>Total (SAT)</td>
            </tr>
        </table>
    )
}

export default Header;