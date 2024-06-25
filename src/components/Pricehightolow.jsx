export function Pricehightolow({pricehightolow}){
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
                    {pricehightolow.map(function(pricehightolow){
                        i = i+1;
                        return(
                            <tr>
                                <td>{i}</td>
                                <td>{pricehightolow.product}</td>
                                <td>{pricehightolow.avgprice}</td>
                                <td>{pricehightolow.qty}</td>
                      
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>
    )
}