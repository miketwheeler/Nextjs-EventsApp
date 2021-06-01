import Link from 'next/link';
import ButtonStyle from './button.module.css';


function Button(props) {
	return (
	<Link href={props.link}>
		<a className={ButtonStyle.btn}>{props.children}</a>
	</Link>
	);
}

export default Button;