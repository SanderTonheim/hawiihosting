import Head from 'next/head'
import NavBar from './navbar'
import Footer from './footer'
export default function Layout({ children }) {
	return (
		<>
			<NavBar />
			<div className='flex flex-1 flex-col max-w-full'>{children}</div>
			<Footer />
		</>
	)
}
