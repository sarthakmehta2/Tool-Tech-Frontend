export function Sidebar({onNonzerostock, onQtyhightolow, onPricehightolow, onHighvalueinventory}){
    return(
        <div id="sidebar">
            <button className="sidebtn" onClick={onNonzerostock}>Non Zero Stock</button>
            <button className="sidebtn" onClick={onQtyhightolow}>Stock Qty High to Low</button>
            <button className="sidebtn" onClick={onPricehightolow}>Stock Price High to Low</button>
            <button className="sidebtn" onClick={onHighvalueinventory}>Stock Value higher that 50K</button>
        </div>
    )
}