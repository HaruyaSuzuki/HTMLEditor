// Next.js
import Head from "next/head";
//		Interface
import { NextPage } from "next";

// React
import { ReactNode } from "react";

// Original
import Header from '../components/_header';
import Footer from '../components/_footer';

interface PageInfo {
	children: ReactNode;
	type: string;
	robots: string;
	title: string;
	description: string;
	image_url: string;
	url: string;
}

const Layout: NextPage<PageInfo> = ({ children, type, robots, title, description, image_url, url }) => {
	return (
		<>
			<Head>
				<title>{`HTML Editor | ${ title }`}</title>
				<meta charSet="UTF-8" />
				<meta name="description" content={ description } />
				<meta name="author" content="Haruya Suzuki" />
				<link rel="canonical" href={ url } />
				<link rel="alternate" href={ url } />
				{/* If you want to many article pages */}
				<link rel="next" href="次のページのURL" />
				{/* Make URL */}
				<meta name="format-detection" content="email=no,telephone=no,address=no" />
				{/* Crawler */}
				<meta name="robots" content={ robots } />
				{/* OGP & Twitter Card */}
				<meta property="og:url" content={ url } />
				<meta property="og:title" content={ title } />
				<meta property="og:type" content={ type } />
				<meta property="og:description" content={ description } />
				<meta property="og:image" content={ image_url } />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@DigiSquare_" />
				<meta property="og:site_name" content="HTML Editor" />
				<meta property="og:locale" content="ja_JP" />
				<meta property="fb:app_id" content="1861428207359326" />
				{/* Icon */}
				{/*		Site icon */}
				<link rel="icon" href="/site/site-icon.jpg" sizes="250x250" type="image/jpg" />
				{/*		Mobile icon */}
				<link rel="apple-touch-icon-precomposed" href="/site/site-icon.jpg" />
				{/* IE */}
				<meta httpEquiv="X-UA-Compatible" content="IE-edge" />
				{/* IE8~10 icon */}
				<link rel="shortcut icon" href="/site/site-icon.jpg" type="image/x-icon" />
				{/*	Chrome, Firefox OS and Opera */}
				{/*		Theme Color */}
				<meta name="theme-color" content="#000000" />
				{/* iOS Safari */}
				{/*		iOS Safari Stand Alone mode */}
				<meta name="apple-mobile-web-app-capable" content="yes" />
				{/*		iOS Safari Theme Color */}
				<meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
				{/*	Windows */}
				{/*		Windows tile image */}
				<meta name="msapplication-TileImage" content="/site/site-icon.jpg" />
				{/*		Windows tile color */}
				<meta name="msapplication-TileColor" content="#f3f3f3"/>
				{/* 	Windows Phone Theme Color */}
				<meta name="msapplication-navbutton-color" content="#000000" />
				{/* Google Fonts */}
				
				{/* Font Awesome CDN */}
				<script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossOrigin="anonymous" />
			</Head>

			<Header />
			{ children }
			<Footer />
		</>
	);
}

export default Layout;