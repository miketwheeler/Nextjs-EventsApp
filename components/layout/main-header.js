import Link from 'next/link';
import MainHeaderStyle from './main-header.module.css';


function MainHeader() {
	return (
		<header className={MainHeaderStyle.header}>
			<div className={MainHeaderStyle.logo}>
				<Link href='/'>Next Events</Link>
			</div>
			<nav className={MainHeaderStyle.navigation}>
				<ul>
					<li><Link href='/events'>Browse All Events</Link></li>
				</ul>
			</nav>
		</header>
	);
}
export default MainHeader;