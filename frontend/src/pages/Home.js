import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CategoryList from "../components/CategoryList";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:8080/items').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data);
      setIsLoading(false);
      setLoadedItems(data);
    });
  },[])

  if (isLoading) {
    return (<div>Laeb...</div>); 
  }

  return (
    <div>
      <Link to="add-item">
        <button>Lisa uus ese</button>
      </Link>
      <Link to="add-category">
        <button>Lisa uus kategooria</button>
      </Link>
      <ItemList items={loadedItems} />
    </div>
  )
}

export default Home;