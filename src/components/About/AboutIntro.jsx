import {about_inline_link, about_heading} from './about.module.css';
const AboutIntro = () => {
	return (
		<h1 className= {about_heading}>
			My name is Matthew
			<p>
				I've spent the last year learning the fundamentals of front-end engineering
				with the goal of developing React Applications.
			</p>
			<p>
				This project was a first attempt at using React-Router to develop multipage
				functionality.
			</p>


			<p>
				If you spot areas of improvement please do not hesitate to
				<a
					href='https://www.linkedin.com/in/mtbramlett'
					rel='noreferrer'
					target='_blank'
					className={about_inline_link}
				>
					contact me
				</a>
				.
			</p>
		</h1>
	);
}

export default AboutIntro;
