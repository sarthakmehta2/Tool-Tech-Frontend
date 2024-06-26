import arrow from '../assets/arrow.png'

export function Salesregister({sales}){
    let i =0;
    const url = "https://tool-tech-backend.onrender.com";
    const handleundo = function(product,qty, purchase, id){
        fetch(url+"/create",{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                product: product,
                qty: qty,
                avgprice: purchase
            })
        }).then(async function(res){
            const json = res.json();
            alert("Sales undo done")
        }).catch(error=>{
            console.error('Error undo', error);
            alert("Failed to undo");  
        })

        fetch(url+"/deletesales",{
            method: "PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({
                _id: id
            })
        })
            .then(async function(res){
                const json = res.json();
                alert("sales entery deleted")
            })
            .catch(error=>{
                console.error('Error deleting', error);
                alert("failed to delete")
            })
        
    }

    return(
        <div id="abc"> 
            <table id="def">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Date</th>
                        <th>Item Name</th>
                        <th>Qty Sold</th>
                        <th>Sales Price</th>
                        <th>Purchase Price</th>
                        <th>Profit</th>  
                        <th>Undo Sales?</th>              
                    </tr>
                </thead>
                <tbody>
                    {sales.map(function(sales){
                        i = i+1;
                        return(
                            <tr>
                                <td>{i}</td>
                                <td>{sales.date}</td>
                                <td>{sales.product}</td>
                                <td>{sales.qty}</td>
                                <td>{sales.sales}</td>
                                <td>{sales.purchase}</td>
                                <td>{sales.profit}</td>
                                <td><button onClick={()=>handleundo(sales.product, sales.qty, sales.purchase, sales._id)}><img src={arrow}/></button></td>
                      
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}