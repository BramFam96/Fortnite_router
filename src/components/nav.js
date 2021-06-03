import { Link } from 'react-router-dom';
const Nav = () => {
	return (
		<nav>
			<Link to='/' className='navStyle'>
				<h3>Home</h3>
			</Link>
			<ul className='navLinks'>
				<Link to='/shop' className='navStyle'>
					<li>Shop</li>
				</Link>
				<Link to='/about' className='navStyle'>
					<li>About</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
