import { useState } from "react";
import purchase from "../assets/purchase.png"

export function Purchase({filteredInventory}){
    let i =0;
    
    const [product, setProduct] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");

    const url = process.env.NODE_ENV === 'production' ? "https://tool-tech-backend.onrender.com" : "http://localhost:3001";

    const handlePurchseBtn = function(){
        fetch(url+"/create",{
            method: "POST",
            body: JSON.stringify({
                product: product,
                qty: qty,
                avgprice: price
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(async function(res){
            const json = res.json();
            alert("Purchased");
        })
        .catch(error => {
            console.error('Error purchasing product:', error);
            alert("Failed to purchase product");
          });
        
    }

    return(
        <div>
        <div id="purchasecontainer"></div>
        <div id="purchaseinputs">
            <input type="text" placeholder="Product Name" onChange={(e)=>{
                const value = e.target.value;
                setProduct(value);
            }}></input>
            <input type="text" placeholder="Qty" onChange={(e)=>{
                const value = parseInt(e.target.value);
                setQty(value);
            }}></input>
            <input type="text" placeholder="Purchase Price" onChange={(e)=>{
                const value = parseInt(e.target.value);
                setPrice(value);
            }}></input>
            <button id="purchasebtn" onClick={handlePurchseBtn}>Purchase</button>


            <table id="inventorytable">

<thead>
        <tr>
            <th>Sr No</th>
            <th>Item Name</th>
            <th>Avg Purchase Price</th>
            <th>Qty in Store</th>
    
        </tr>
    </thead>
    <tbody>
        {filteredInventory.map(function(filteredInventory){
            i = i+1;
            return(
                <tr>
                    <td>{i}</td>
                    <td>{filteredInventory.product}</td>
                    <td>{filteredInventory.avgprice}</td>
                    <td>{filteredInventory.qty}</td>
          
                </tr>
            )
        })}

    </tbody>

</table>
        </div>
        </div>
    )

}