import React from 'react';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import EventItemStyle from './event-item.module.css';

function EventItem(props) {
	const {title, image, date, location, id} = props;

	const humanReadableDate = new Date(date).toLocaleString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.replace(', ', '\n');
	const exploreLink = `/events/${id}`;
	return (
		<li className={EventItemStyle.item}>
			<img src={'/' + image} alt={title} />
			<div className={EventItemStyle.content}>
				<div className={EventItemStyle.summary}>
					<h2>{title}</h2>
					<div className={EventItemStyle.date}>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className={EventItemStyle.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={EventItemStyle.actions}>
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className={EventItemStyle.icon}><ArrowRightIcon /></span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;
