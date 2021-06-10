import AboutMe from './AboutMe';
import TechSection from './TechSection';

const About = () => {
	return (
		<div className='about'>
			<AboutMe/>
			<h1>
				Application Tech
				
					<TechSection/>
					
			</h1>
			<h1>
				Application Resources
				<ul className='resources'>
					<li>
						<a
							className='inlineLink'
							href='https://fortnite-api.com/'
							rel='noreferrer'
							target='_blank'
						>
							Fortnite-API
						</a>{' '}
						- A free, and incredibly accessible API provided by Epic Games.
					</li>
					<li>
						<a
							className='inlineLink'
							href='https://www.freecodecamp.org/'
							rel='noreferrer'
							target='_blank'
						>
							FCC
						</a>{' '}
						- An invaluable, free resource for teaching programing fundamentals.
					</li>
					<li>
						<a
							className='inlineLink'
							href='https://www.w3schools.com/'
							rel='noreferrer'
							target='_blank'
						>
							W3Schools
						</a>{' '}
						- The best reference for front-end technical docs.
					</li>
				</ul>
			</h1>
		</div>
	);
};

export default About;
