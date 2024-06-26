import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inventory } from './components/Inventory'
import { Sell } from './components/Sell'
import { Navbar } from './components/Navbar'
import { Salesregister } from './components/Salesregister'
import { Purchase } from './components/Purchase'
import { Inventoryanalysis } from './components/Inventoryanalysis'
import { Salesanalysis } from './components/Salesanalysis'


function App() {

  // const url = "http://localhost:3001";
  const url = "https://tool-tech-backend.onrender.com";
  // const url = process.env.NODE_ENV === 'production' ? "https://tool-tech-backend.onrender.com" : "http://localhost:3001";


  const [inventory, setInventory] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [salesregister, setSalesregister] = useState([]);
  const [filteredInventory, setFilteredInventory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalInventoryValue, setTotalInventoryValue] = useState();
  const [nonzerostock, setNonzerostock] = useState([]);
  const [qtyhightolow, setQtyhightolow] = useState([]);
  const [pricehightolow, setPricehightolow] = useState([]);
  const [highvalueinventory, setHighvalueinventory] = useState([]);
  const [salehightolow, setSalehightolow] = useState([]);
  const [aggregatedSalesArray, setAggregatedSalesArray] = useState([]);

  useEffect(()=>{
    fetch(url+"/inventory")
    .then(async function(res){
      const json = await res.json();
      setInventory(json.list);
      setFilteredInventory(json.list);
      setTotalInventoryValue(json.totalInventoryValue);
      setNonzerostock(json.nonzerostock)
      setQtyhightolow(json.qtyhightolow);
      setPricehightolow(json.pricehightolow);
      setHighvalueinventory(json.highvalueinventory);
    })
  },[]);

  useEffect(()=>{
    fetch(url+"/salesregister")
    .then(async function(res){
      const json = await res.json();
      setSalehightolow(json.salehightolow);
      setAggregatedSalesArray(json.aggregatedSalesArray);
    })
  },[]);

  const handleSearchChange = function(e){
    setSearchQuery(e.target.value);
    const filtered = inventory.filter(item=>
        item.product.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredInventory(filtered);
    
}

  useEffect(()=>{
    fetch(url+"/salesregister")
    .then(async function(res){
      const json = await res.json();
      setSalesregister(json.list);
    })
  },[]);


  const handleInventoryClick = () => {
    setSelectedComponent('inventory');
  };

  const handleSellClick = () => {
    setSelectedComponent('sell');
  };

  const handlePurchaseClick = () => {
    setSelectedComponent('purchase');
  };

  const handleSalesRegisterClick = () => {
    setSelectedComponent('salesRegister');
  };

  const handleInventoryAnalysis = () => {
    setSelectedComponent('inventoryAnalysis')
  };

  const handleSalesanalysis = () => {
    setSelectedComponent('salesanalysis')
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'inventory':
        return <Inventory stock={inventory} filteredInventory={filteredInventory} totalval={totalInventoryValue}/>;
      case 'sell':
        return <Sell filteredInventory={filteredInventory} />;
      case 'purchase':
        return <Purchase filteredInventory={filteredInventory}/>;
      case 'salesRegister':
        return <Salesregister sales = {salesregister}/>;
      case 'inventoryAnalysis':
        return <Inventoryanalysis nonzerostock={nonzerostock} qtyhightolow={qtyhightolow} pricehightolow={pricehightolow} highvalueinventory={highvalueinventory}/>
      case 'salesanalysis':
        return <Salesanalysis salehightolow={salehightolow} aggregatedSalesArray = {aggregatedSalesArray}/>
      default:
        return null;
    }
  };

 
  return (
  <div>

<Navbar 
        onSell={handleSellClick}
        onPurchase={handlePurchaseClick}
        onInventory={handleInventoryClick}
        onSalesRegister={handleSalesRegisterClick}
        onInventoryAnalysis = {handleInventoryAnalysis}
        onSalesanalysis = {handleSalesanalysis}
      />
      <div style={{ padding: '1rem' }}>
        {(selectedComponent === 'sell' || selectedComponent ==='inventory' || selectedComponent==='purchase') && (
          <input
          id='searchbar'
          type='text'
          placeholder='Search inventory...'
          value={searchQuery}
          onChange={handleSearchChange}>
          </input>
        )}
        {renderComponent()}
        </div>
</div>
  )
}


export default App
