import {
	SiLinkedin,
	SiHtml5,
	SiCss3,
	SiReact,
	SiJavascript,
	SiReactrouter,
} from 'react-icons/si';

const About = () => {
	return (
		<div className='about'>
			<h1>
				My name is Matthew
				<p>
					I've spent the last year learning the fundamentals of front-end engineering
					with the goal of developing React Applications.
				</p>
				<p>
					This project is my first attempt at using React-Router to develop a
					multipage application.
				</p>
				<p>
					If you spot areas of improvement please do not hesitate to contact me.
				</p>
				<a href='https://www.linkedin.com/in/mtbramlett/' rel='noreferrer' target='_blank'>
					{' '}
					<SiLinkedin className='icon' />
				</a>
			</h1>
			<h1>
				Application Tech
				<ul className='icon_Container'>
					<li>
						HTML5
						<a
							href='https://www.w3schools.com/html/'
							rel='noreferrer'
							target='_blank'
						>
							<SiHtml5 className='icon' />
						</a>
					</li>
					<li>
						CSS3
						<a href='https://www.w3schools.com/css/' rel='noreferrer' target='_blank'>
							<SiCss3 className='icon' />
						</a>
					</li>
					<li>
						JavaScript
						<a href='https://javascript.info/' rel='noreferrer' target='_blank'>
							<SiJavascript className='icon' />
						</a>
					</li>
					<li>
						React
						<a href='https://reactjs.org/' rel='noreferrer' target='_blank'>
							<SiReact className='icon' />
						</a>
					</li>
					<li>
						React-router
						<a href='https://reactrouter.com/' rel='noreferrer' target='_blank'>
							<SiReactrouter className='icon' />
						</a>
					</li>
				</ul>
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
