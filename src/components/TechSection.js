import Resource from './Resource';
import {
	SiHtml5,
	SiCss3,
	SiReact,
	SiJavascript,
	SiReactrouter,
} from 'react-icons/si';

function techSection() {
	const resourceObj = {
		name: ['HTML5', 'CSS3', 'JavaScript', 'React', 'React-router'],
		path: [
			'https://www.w3schools.com/HTML/',
			'https://www.w3schools.com/CSS/',
			'https://javascript.info/',
			'https://reactjs.org/',
			'https://reactrouter.com/',
		],
		icons: [
			<SiHtml5 />,
			<SiCss3 />,
			<SiJavascript />,
			<SiReact />,
			<SiReactrouter />,
		],
	};

	return (
		<>
			<ul className='icon_Container'>
				<li>
					{' '}
					<Resource
						name={resourceObj.name[0]}
						path={resourceObj.path[0]}
						icon={resourceObj.icons[0]}
					/>
				</li>

				<li>
					{' '}
					<Resource
						name={resourceObj.name[1]}
						path={resourceObj.path[1]}
						icon={resourceObj.icons[1]}
					/>
				</li>

				<li>
					<Resource
						name={resourceObj.name[2]}
						path={resourceObj.path[2]}
						icon={resourceObj.icons[2]}
					/>
				</li>
				<li>
					<Resource
						name={resourceObj.name[3]}
						path={resourceObj.path[3]}
						icon={resourceObj.icons[3]}
					/>
				</li>
				<li>
					<Resource
						name={resourceObj.name[4]}
						path={resourceObj.path[4]}
						icon={resourceObj.icons[4]}
					/>
				</li>
			</ul>
		</>
	);
}

export default techSection;
