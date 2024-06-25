export function Salehightolow({salehightolow}){
    let i =0;
    console.log(salehightolow);
    return(
        <div>
            <table id="salelowtohightable">
            <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Item Name</th>
                        <th>Total Qty Sold</th>
                        <th>Avg Sales Price</th>
                        <th>Avg Purchase Price</th>
                        <th>Total Profit</th>
                
                    </tr>
                </thead>
                <tbody>
                    {salehightolow.map(function(salehightolow){
                        i = i+1;
                        return(
                            <tr>
                                <td>{i}</td>
                                <td>{salehightolow.product}</td>
                                <td>{salehightolow.totalQty}</td>
                                <td>{salehightolow.avgSales}</td>
                                <td>{salehightolow.purchase}</td>
                                <td>{salehightolow.avgProfit}</td>
                      
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>
    )

}