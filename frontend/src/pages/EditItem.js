import { useEffect, useState } from "react";
import Item from "../components/Item";

function EditItem() {
    const [item, setItem] = useState(null);

    const itemId = window.location.href.split("/item/")[1];

    useEffect(()=>{fetch("http://localhost:8080/viev-item/" + itemId).then(response => {
        return response.json();
    }).then(data => {
        setItem(data);
    })},[])
    
    if(!item){
        return "Loading..";
    }

    return (<div> <Item
            id={item.id}
            name={item.name} 
            price={item.price}
            category={item.category}
            isAddToCartButton={true} 
            //isSingleItemView={true}
        />
        </div>)
}

export default EditItem;