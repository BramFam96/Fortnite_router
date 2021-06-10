function Resource({ name, path, icon }) {
	return (
		<>
			{name}
			<a href={path} className='icon' rel='noreferrer' target='_blank'>
				{icon}{' '}
			</a>
		</>
	);
}

export default Resource;
