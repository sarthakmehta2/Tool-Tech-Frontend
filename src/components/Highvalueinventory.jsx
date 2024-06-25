export function Highvalueinventory({highvalueinventory}){
    let i =0;
    return(
        <div>
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
                    {highvalueinventory.map(function(highvalueinventory){
                        i = i+1;
                        return(
                            <tr>
                                <td>{i}</td>
                                <td>{highvalueinventory.product}</td>
                                <td>{highvalueinventory.avgprice}</td>
                                <td>{highvalueinventory.qty}</td>                    
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}