import { Link } from "react-router-dom";

function Item(props) {
  function handleDelete(ItemId){
    props.deleteItem(ItemId);
  }

    return (
      <div>
        <Link to={`item/${props.id}`}>
        <div className="itemName">{props.name}</div>
        <div className="itemPrice">{props.price}</div>
        <div className="itemCategory">{props.category}</div>
        </Link>
        { props.isAddToCartButton ? <button>Lisa ostukorvi</button> : 
            <div>
              <button onClick={()=>handleDelete(props.id)}>X</button>
              <Link to={`edit-item`}>
              <button>Muuda toodet</button>
              </Link>
            </div> }
        <div>{ props.isAddToCartButton.toString() }</div>
      </div>
    )
  }
  
  export default Item;