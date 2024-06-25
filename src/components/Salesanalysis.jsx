import { useState } from "react";
import { Sidebarsales } from "./Sidebarsales";
import { Salehightolow } from "./Salehightolow";
import { Aggregatedsales } from "./Aggregatedsales";


export function Salesanalysis({salehightolow, aggregatedSalesArray}){

    const [selectedComponent, setSelectedComponent] = useState("");


    const handlesalehightolow = () => {
        setSelectedComponent('salehightolow');
        console.log(salehightolow);
    }

    const handleaggregatedsales = () =>{
        setSelectedComponent('aggregatedSalesArray');
        console.log(aggregatedSalesArray);
    }

   

    const renderComponent = () => {
        switch(selectedComponent){
            case 'salehightolow':
                return <Salehightolow salehightolow={salehightolow}/>
            case 'aggregatedSalesArray':
                return <Aggregatedsales aggregatedSalesArray={aggregatedSalesArray}/>
                
        }
    }


    return(
        <div>
            <Sidebarsales 
                onSalehightolow = {handlesalehightolow}
                onAgrregatedsales = {handleaggregatedsales}
                />

                {renderComponent()}

        </div>
    )
}