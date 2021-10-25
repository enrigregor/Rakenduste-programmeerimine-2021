import Item from '../components/Item';

function ItemList(props) {
  function deleteItem(itemId) {
    props.deleteItem(itemId);
  }

  return(<div>
    {props.items.map(item=> (
     <Item 
      key={item.id} 
      id={item.id}
      name={item.name} 
      price={item.price}
      category={item.category}
      isAddToCartButton={props.isAddToCart} 
      deleteItem={deleteItem}
      />
    ))}
  </div>);
}

export default ItemList;