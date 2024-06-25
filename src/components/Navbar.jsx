import React from 'react';

export function Navbar({ onSell, onPurchase, onInventory, onSalesRegister, onInventoryAnalysis, onSalesanalysis }) {
  return (
    <nav>
        <ul>
      <li className='abcd'><button onClick={onSell}>Sell</button></li>
      <li><button onClick={onPurchase}>Purchase</button></li>
      <li><button onClick={onInventory}>Inventory</button></li>
      <li><button onClick={onSalesRegister}>Sales Register</button></li>
      <li><button onClick={onInventoryAnalysis}>Inventory Analysis</button></li>
      <li><button onClick={onSalesanalysis}>Sales Analysis</button></li>
      </ul>
    </nav>
  );
}

// const styles = {
//   navbar: {
//     width: '50%',
//     marginleft: '50%',
//     display: 'flex',
//     justifyContent: 'space-around',
//     padding: '1rem',
//     backgroundColor: 'white',
//   },
//   button: {
//     color: 'white',
//     backgroundColor: '#6F0909',
//     border: 'none',
//     padding: '0.5rem 1rem',
//     fontSize: '1rem',
//     cursor: 'pointer',
//   }
// };


