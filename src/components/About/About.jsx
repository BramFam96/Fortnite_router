import {about_container} from './about.module.css';
import AboutIntro from './AboutIntro.jsx';
import AppTech from './AppTech.jsx';
import AppResources from './AppResources.jsx';

const About = () => {
	return (
		<div className={about_container}>
			<AboutIntro/>
			
			<h1>
				Application Tech
				<AppTech/>
			</h1>
			
			 <h1>
				Application Resources
				<AppResources/>
			</h1> 
		</div>
	);
};

export default About;
