import {home_Banner} from './home.module.css';
const WelcomeBanner = () => {
	return (
		<div>
			<h1 className={home_Banner}>
				Welcome, and thank you for visiting!
				<span>Please check out the shop for new and upcoming Fortnite items!</span>
			</h1>
		</div>
	);
};
export default WelcomeBanner;