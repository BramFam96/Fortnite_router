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
				<section className='icon_Container'>
					<p>
						HTML5
						<a
							href='https://www.w3schools.com/html/'
							rel='noreferrer'
							target='_blank'
						>
							<SiHtml5 className='icon' />
						</a>
					</p>
					<p>
						CSS3
						<a href='https://www.w3schools.com/css/' rel='noreferrer' target='_blank'>
							<SiCss3 className='icon' />
						</a>
					</p>
					<p>
						JavaScript
						<a href='https://javascript.info/' rel='noreferrer' target='_blank'>
							<SiJavascript className='icon' />
						</a>
					</p>
					<p>
						React
						<a href='https://reactjs.org/' rel='noreferrer' target='_blank'>
							<SiReact className='icon' />
						</a>
					</p>
					<p>
						React-router
						<a href='https://reactrouter.com/' rel='noreferrer' target='_blank'>
							<SiReactrouter className='icon' />
						</a>
					</p>
				</section>
			</h1>
			<h1>
				Application Resources
				<section className='resources'></section>
				<p>
					<a
						className='inlineLink'
						href='https://www.freecodecamp.org/'
						rel='noreferrer'
						target='_blank'
					>
						FCC
					</a>{' '}
					- An invaluable, free resource for teaching programing fundamentals.
				</p>
				<p>
					<a
						className='inlineLink'
						href='https://www.w3schools.com/'
						rel='noreferrer'
						target='_blank'
					>
						W3Schools
					</a>{' '}
					- By far the best reference for the technical documenation of every
					front-end language.
				</p>
				<p>
					<a
						className='inlineLink'
						href='https://fortnite-api.com/'
						rel='noreferrer'
						target='_blank'
					>
						Fortnite-API
					</a>{' '}
					- A free, and incredibly accessible API provided by Epic Games.
				</p>
			</h1>
		</div>
	);
};

export default About;
