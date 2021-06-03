import { useState, useEffect } from 'react';

const ItemDetail = ({ match }) => {
	useEffect(() => {
		fetchItem();
		// eslint-disable-next-line
	}, []);

	const [item, setItem] = useState({
		item: {},
		images: {},
	});

	const fetchItem = async () => {
		const details = await fetch(
			`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
		);
		const item = await details.json();
		setItem(item.data.item);
		console.log(item.data.item);
	};
	return (
		<div className='item_Container'>
			<div className='details'>
				<h1>
					{item.name}:<p>{item.description}</p>
				</h1>

				<img className='image' src={item.images.background} alt='' />
				<h2 className='item_Type'>
					{item.rarity} {item.type}
				</h2>
			</div>
		</div>
	);
};
export default ItemDetail;
