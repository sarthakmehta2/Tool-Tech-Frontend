import { useEffect, useState } from "react";
import sell from "../assets/sell.png"

export function Sell({filteredInventory}){
    let i =0;

    const [product, setProduct] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");

    const url = "https://tool-tech-backend.onrender.com";


    const handleSellBtn = function(){
        fetch(url+"/sales",{
            method: "POST",
            body: JSON.stringify({
                product: product,
                qty: qty,
                sales: price
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(async function(res){
            const json = res.json();
            alert("Sold");
        })
        .catch(error => {
            console.error('Error selling product:', error);
            alert("Failed to sell product");
          });
        
    }

    return(
        <div>
            <div id="sellcontainer"></div>
        <div id="selldiv">
        
            <div id="sellinputs">
            <input type="text" placeholder="Product Name" onChange={(e)=>{
                const value = e.target.value;
                setProduct(value);
            }}></input>
            <br></br>
            <input type="text" placeholder="Qty" onChange={(e)=>{
                const value = parseInt(e.target.value);
                setQty(value);
            }}></input>
            <br>
            </br>
            <input type="text" placeholder="Sales Price" onChange={(e)=>{
                const value = parseInt(e.target.value);
                setPrice(value);
            }}></input>
            <br></br>
            <button id="sellbtn" onClick={handleSellBtn}>Sell</button>

            </div>
            </div>
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
    )
}