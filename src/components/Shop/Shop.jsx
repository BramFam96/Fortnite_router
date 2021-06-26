import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {shop_Container, shop_Link, shop_Items, shop_Img} from './shop.module.css';

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
      
      <div className={shop_Container}>
        {items.map(item => (
          <div  key={item.itemId} className={shop_Items}>

            <Link className={shop_Link} to={`/shop/${item.itemId}`}>

              {item.item.name}

              <img src={item.item.images.background} alt="" className = {shop_Img}/>

            </Link>

          </div>  
                 
        ))}
      </div>
  
    )
}  
export default Shop;