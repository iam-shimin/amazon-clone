import React from 'react'
import 'assets/scss/subOptions.scss';
import prime from'assets/images/options/prime.jpg'
import fresh from'assets/images/options/fresh.jpg'
import pantry from'assets/images/options/pantry.jpg'
import mobiles from'assets/images/options/mobile.jpg'
import fashion from'assets/images/options/fashion.jpg'
import home from'assets/images/options/home.jpg'
import appliances from'assets/images/options/appliances.jpg'
import electronics from'assets/images/options/electronics.jpg'
import WidgetOptions from 'components/widgetOptions';

export default function SubOptions() {
	const options=[
		{key:'0', image:prime, label: "Prime"},
		{key:'1', image:fresh, label: "Fresh"},
		{key:'2', image:pantry, label: "Pantry"},
		{key:'3', image:mobiles, label: "Mobiles"},
		{key:'4', image:fashion, label: "Fashion"},
		{key:'5', image:home, label: "Home"},
		{key:'6', image:appliances, label: "Appliances"},
		{key:'7', image:electronics, label: "Electronics"},
	];
    return (
        <section className="selectOptions">
				<div className="options">
					{options.map(({key,image,label}) => <WidgetOptions key={key} image={image} label={label} className = "option" />)}
				</div>	
        </section>
    )
}