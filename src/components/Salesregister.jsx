import arrow from '../assets/arrow.png'
import * as XLSX from 'xlsx';

export function Salesregister({sales}){
    let i =0;
    const url = process.env.NODE_ENV === 'production' ? "https://tool-tech-backend.onrender.com" : "http://localhost:3001";
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

    const exportToExcel = () => {
        const worksheetData = sales.map((item, index) => ({
            "Sr No": index + 1,
            "Date": item.date,
            "Item Name": item.product,
            "Qty Sold": item.qty,
            "Sales Price": item.sales,
            "Purchase Price": item.purchase,
            "Profit": item.profit

        }));

        const worksheet = XLSX.utils.json_to_sheet(worksheetData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sales Register");

        XLSX.writeFile(workbook, "Sales_Register.xlsx");
    };

    return(
        <div id="abc"> 
         <button className="excelbtn" onClick={exportToExcel}>Export to Excel</button> {/* Button to trigger export */}  
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