import {about_inline_link} from './about.module.css';
    const Resource = ({ path, resource, description }) => {
        return (

            <li>
                <a
                    className={about_inline_link}
                    href={path}
                    rel='noreferrer'
                    target='_blank'
                >
                    {resource}
                </a>
                    {' '}{description}
            </li>
         )
    }

export default Resource
