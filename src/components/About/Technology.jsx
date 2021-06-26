import {about_icon_style} from './about.module.css';
const Technology = ({ name, path, icon}) => {
	return (
		<li >
			{name}

			<a href={path} className={about_icon_style} rel='noreferrer' target='_blank' >
			
			{icon}

			</a>
		</li>
	)
}

export default Technology;
