// Next.js
import Link from 'next/link';

const Header = (): JSX.Element => {
	return (
		<header>
			<div className="header_inner">
				<Link href="/">
					<a className="site-logo">HTML Editor</a>
				</Link>
			</div>
		</header>
	);
}

export default Header;