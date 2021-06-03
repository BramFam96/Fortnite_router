import { Link } from 'react-router-dom';
const Nav = () => {
	return (
		<nav>
			<Link to='/' className='navStyle'>
				<h3>Home</h3>
			</Link>
			<ul className='navLinks'>
			<li><Link to='/shop' className='navStyle'>
					Shop
				</Link></li>
				<li><Link to='/about' className='navStyle'>
					About
				</Link></li>
			</ul>
		</nav>
	);
};

export default Nav;
