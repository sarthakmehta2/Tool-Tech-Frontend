import inventory from "../assets/inventory.png"
import * as XLSX from 'xlsx';

export function Inventory({stock, filteredInventory, totalval}){

    let i =0;

    const exportToExcel = () => {
        const worksheetData = filteredInventory.map((item, index) => ({
            "Sr No": index + 1,
            "Item Name": item.product,
            "Avg Purchase Price": item.avgprice,
            "Qty in Store": item.qty
        }));

        const worksheet = XLSX.utils.json_to_sheet(worksheetData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");

        XLSX.writeFile(workbook, "Inventory.xlsx");
    };

    return(
        <div>
            <div id="inventoryimg">

            </div>
                <h2>Total Inventory Valus Excl GST: {totalval}</h2>       

                  <button className="excelbtn" onClick={exportToExcel}>Export to Excel</button> {/* Button to trigger export */}  
            <table>
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