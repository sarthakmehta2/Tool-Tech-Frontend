export function Nonzerostock({nonzerostock}){
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
                    {nonzerostock.map(function(nonzerostock){
                        i = i+1;
                        return(
                            <tr>
                                <td>{i}</td>
                                <td>{nonzerostock.product}</td>
                                <td>{nonzerostock.avgprice}</td>
                                <td>{nonzerostock.qty}</td>
                      
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>
    )
    
}