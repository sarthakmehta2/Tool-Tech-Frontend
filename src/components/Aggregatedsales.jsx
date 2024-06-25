export function Aggregatedsales({aggregatedSalesArray}){
    let i =0;
    <p>hello</p>
    console.log(aggregatedSalesArray);
    return(
        <div>
            <table>
            <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Month Number</th>
                        <th>Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {aggregatedSalesArray.map(function(aggregatedSalesArray){
                        i = i+1;
                        return(                        
                            <tr>
                                <td>{i}</td>
                                <td>{aggregatedSalesArray.month}</td>
                              
                                <td>{aggregatedSalesArray.totalSales}</td>
                            </tr>                          
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}