import { Link } from 'react-router-dom';
import {nav_link_container, homebutton} from './nav.module.css';
const Nav = () => {
	return (
		<nav>
			<Link to='/' className={homebutton}>
				<h3>Home</h3>
			</Link>
			<ul className={nav_link_container}>
			<li><Link to='/shop' >
					Shop
				</Link></li>
				<li><Link to='/about' >
					About
				</Link></li>
			</ul>
		</nav>
	);
};

export default Nav;
