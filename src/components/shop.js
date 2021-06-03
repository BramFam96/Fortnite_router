import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  
  const [items, setItems] = useState([
  ]);

  const fetchItems= async () => {
      const data = await fetch('https://fortnite-public-api.theapinetwork.com/upcoming/get');
      const items = await data.json();
      console.log(items.data);
      setItems(items.data); 
    };
    return (
      
   <div className='shop'>
        {items.map(item => (
          <Link className='link' to={`/shop/${item.itemId}`}>
            <h1 
             key={item.itemId} 
             className='allItems'>
               {item.item.name}
             <img src={item.item.images.background} alt=""/>
             
            </h1>  
          </Link>   
             
      ))}
    </div>
  
    )
}  
export default Shop;