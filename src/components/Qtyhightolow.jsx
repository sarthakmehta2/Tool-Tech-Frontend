export function Qtyhightolow({qtyhightolow}){
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
                    {qtyhightolow.map(function(qtyhightolow){
                        i = i+1;
                        return(
                            <tr>
                                <td>{i}</td>
                                <td>{qtyhightolow.product}</td>
                                <td>{qtyhightolow.avgprice}</td>
                                <td>{qtyhightolow.qty}</td>
                      
                            </tr>
                        )
                    })}

                </tbody>

            </table>
        </div>
    )
}