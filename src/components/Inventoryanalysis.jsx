import { useState } from "react";
import { Nonzerostock } from "./Nonzerostock";
import { Sidebar } from "./Sidebar";
import { Qtyhightolow } from "./Qtyhightolow";
import { Pricehightolow } from "./Pricehightolow";
import { Highvalueinventory } from "./Highvalueinventory";

export function Inventoryanalysis({nonzerostock, qtyhightolow, pricehightolow, highvalueinventory}){
    let i =0;

    const [selectedComponent, setSelectedComponent] = useState("");


    const handlenonzerostock = () => {
        setSelectedComponent('nonzerostock');
    }

    const handleqtyhightolow = () => {
        setSelectedComponent('qtyhightolow');
    }

    const handlepricehightolow = () => {
        setSelectedComponent('pricehightolow');
    }

    const handlehighvalueinventory = () => {
        setSelectedComponent('highvalueinventory');
    }

    const renderComponent = () => {
        switch(selectedComponent){
            case 'nonzerostock':
                return <Nonzerostock nonzerostock={nonzerostock}/>
            case 'qtyhightolow':
                return <Qtyhightolow qtyhightolow={qtyhightolow}/>
            case 'pricehightolow':
                return <Pricehightolow pricehightolow={pricehightolow}/>
            case 'highvalueinventory':
                return <Highvalueinventory highvalueinventory={highvalueinventory}/>
        }
    }


    return(
        <div>
            <Sidebar 
                onNonzerostock = {handlenonzerostock}
                onQtyhightolow = {handleqtyhightolow}
                onPricehightolow = {handlepricehightolow}
                onHighvalueinventory = {handlehighvalueinventory}
                />

                {renderComponent()}

        </div>
    )
}