import {about_icon_container} from './about.module.css';
import {
	SiHtml5,
	SiCss3,
	SiReact,
	SiJavascript,
	SiReactrouter,
} from 'react-icons/si';
import Technology from './Technology';

const AppTech = () => {
	const technologies =[
		{name:'HTML5', path:'https://www.w3schools.com/HTML/', icon:<SiHtml5 />, id:'5eea9e7a-f90c-46aa-943e-a51542e199be' },
		{name:'CSS3', path: 'https://www.w3schools.com/CSS/', icon: <SiCss3 />, id:'7d7a0c70-7563-45f8-a0e1-d2afd4ceb018'},
		{name:'JavaScript', path: 'https://javascript.info/', icon: <SiJavascript />, id:'eff9b57a-dd19-4072-9b03-1776704d3e34'},
		{name:'React', path:'https://reactjs.org/', icon: <SiReact />,id:'c4760e55-4ae7-45fb-94d5-21189fd879af'},
		{name:'Router', path:'https://reactrouter.com/', icon: <SiReactrouter />, id:'28cfd9e5-ce14-424e-9fdd-02d8041f4e8d'}
	];
	

	return (
		
		<ul className={about_icon_container}>
			{technologies.map(item => { 
				return(
			 
					<Technology
						name = {item.name}
						path = {item.path}
						icon = {item.icon}
						key = {item.id}
					/>
				)
			} 
			)
			}
		</ul>
		
	)
}

export default AppTech;
