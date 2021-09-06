function Item(props) {
    return (
        <div>
            <div classname="itemName">{props.name}</div>
            <div classname="itemPrice">{props.price}</div>
            <div classname="itemCategory">{props.category}</div>
        </div>
    )
}

export default Item;