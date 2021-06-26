import {home_Container, home_Link, home_Msg} from './home.module.css';
import  {Link}  from 'react-router-dom';
import WelcomeBanner  from './WelcomeBanner.jsx';


const Home = () => {
	return (
		<div className={home_Container}>
			
			<WelcomeBanner />
			
			<Link to = '/shop'>
             <button className={home_Link}>Shop</button>
             </Link>   
            
            <h2 className={home_Msg}>For more info please visit below</h2>
            
			<Link to = '/about'>
             <button className={home_Link}>About</button>
            </Link>
		</div>
	)
};
export default Home;
