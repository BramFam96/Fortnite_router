import {about_resource_container} from './about.module.css';
import Resource from './Resource';

function ResourceSec () {
    const resources = [        
    {path: 'https://fortnite-api.com/', resource:'Fortnite-API', description:'A free, and incredibly accessible API provided by Epic Games.', id:'9f8d6789-dbf3-4a9a-8324-60815a17df42'},
    {path: 'https://www.freecodecamp.org/', resource:'FCC', description:'An invaluable, free resource for teaching programing fundamentals', id:'d45a519e-0af6-4c51-9ed2-58ef0896caf2'},
    {path: 'https://www.w3schools.com/', resource:'W3Schools', description:'The best reference for front-end technical docs.', id:'76ed7209-a33e-4b23-9076-463c81fccf7f'}
    ];
       
    return (
     
        <ul className={about_resource_container}>
            {resources.map(item => { 
				return(
					<Resource
                        key = {item.id}
					    path = {item.path}
					    resource = {item.resource}
					    description = {item.description}
					/>
				)} 
			)}
        </ul>
    
    )
}

export default ResourceSec

