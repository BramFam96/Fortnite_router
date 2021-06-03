
import {Link} from 'react-router-dom';



const Home = () => {
    return (
        <div className = 'home'>
        
              <h1 className='welcome_Banner'>
               Welcome, and thank you for visiting! <span>Please check out the shop for upcoming Fortnite items!
               </span>
              </h1> 
              
         
           
        
           <Link to = '/shop'>
             <button className='to_Link'>Shop</button>
             </Link>

           
            
            <h2 className='about_Msg'>For more info please visit below</h2>
            <Link to = '/about'>
             <button className='to_Link'>About</button>
             </Link>
        </div>
    )
}
export default Home;