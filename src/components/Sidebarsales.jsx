export function Sidebarsales({onSalehightolow, onAgrregatedsales}){
    return(
        <div id="sidebarsales">
            <button className="sidebtn" onClick={onSalehightolow}>Sort Sales from High to Low</button>
            <button className="sidebtn" onClick={onAgrregatedsales}>Total Sales by Month</button>

        </div>
    )

}