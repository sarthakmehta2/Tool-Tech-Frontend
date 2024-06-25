import inventory from "../assets/inventory.png"

export function Inventory({stock, filteredInventory, totalval}){

    let i =0;
    return(
        <div>
            <div id="inventoryimg">

            </div>
                <h2>Total Inventory Valus Excl GST: {totalval}</h2>         
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