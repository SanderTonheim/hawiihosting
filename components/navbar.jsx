import logo from '../assets/navbar/logo.jpg'
import menuIcon from '../assets/navbar/menu.png'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function NavBar() {
	const [open, setOpen] = useState(false)
	const [tjenesterMenu, setTjenesterMenu] = useState(false)
	const [openIndustri, setOpenIndustri] = useState(false)

	return (
		<>
			<div className='flex items-center justify-between w-full p-4 bg-white NAVBAR h-fit'>
				<Link href={'/'}>
					<Image
						src={logo}
						width={150}
						height={50}
						alt='logo pic'
					/>
				</Link>
				{/* mobile nav */}
				<div className='MENU ICON lg:hidden'>
					<Image
						src={menuIcon}
						width={30}
						height={25}
						onClick={() => setOpen(!open)}
						alt='menu icon'
					/>
				</div>
			</div>

			{open && (
				<ul className='absolute right-0 z-20 flex-col w-full bg-slate-100'>
					<li className='relative z-30'>
						<Link href={'/'}>Hjem</Link>
					</li>
					<li onClick={() => setOpenIndustri(!openIndustri)}>INDUSTRIER</li>
					{openIndustri && (
						<>
							<li>
								<Link href={'/industries/bolig-og-eiendomsutvikling'}>Bolig- og eiendomsutvikling</Link>
							</li>
							<li>
								<Link href={'/industries/kapitalmarked-investeringsselskap'}>Kapitalmarked Investeringsselskap</Link>
							</li>
							<li>
								<Link href={'/industries/arkitekt'}>Arkitekt – Ingeniørselskap</Link>
							</li>
							<li>
								<Link href={'/industries/bransjeorganisasjoner'}>Bransjeorganisasjoner</Link>
							</li>
						</>
					)}

					<li onClick={() => setTjenesterMenu(!tjenesterMenu)}>TJENESTER</li>
					{tjenesterMenu && (
						<>
							<li>
								<Link href={'/tjenester/analyser'}>Analyser</Link>
							</li>
							<li>
								<Link href={'/tjenester/statisktikkutdrag'}>Statisktikkutdrag</Link>
							</li>
							<li>
								<Link href={'/tjenester/abonnement'}>Abonnement</Link>
							</li>
							<li>
								<Link href={'/tjenester/konsulenttjenester'}>Konsulenttjenester</Link>
							</li>
						</>
					)}
					<li>
						<Link href={'/aktuelt'}>AKUTELT</Link>
					</li>
					<li>
						<Link href={'/kontakt'}>KONTAKT</Link>
					</li>
					<li>
						<Link href={'https://www.playestate.no/'}>PLAYSTATE</Link>
					</li>
				</ul>
			)}
			{/* desktop nav */}
			<div className='flex gap-4 max-lg:hidden'>
				<ul>
					<Link href='/'>
						<li>Hjem</li>
					</Link>
					<Link
						href='/industries'
						onMouseEnter={() => setTjenesterMenu(true)}
						onMouseLeave={() => setTjenesterMenu(false)}>
						<li>Industri</li>
					</Link>
					{tjenesterMenu && (
						<>
							<div
								onMouseEnter={() => setTjenesterMenu(true)}
								onMouseLeave={() => setTjenesterMenu(false)}>
								<li>
									<Link href={'/industries/bolig-og-eiendomsutvikling'}>Bolig- og eiendomsutvikling</Link>
								</li>
								<li>
									<Link href={'/industries/kapitalmarked-investeringsselskap'}>Kapitalmarked Investeringsselskap</Link>
								</li>
								<li>
									<Link href={'/industries/arkitekt'}>Arkitekt – Ingeniørselskap</Link>
								</li>
								<li>
									<Link href={'/industries/bransjeorganisasjoner'}>Bransjeorganisasjoner</Link>
								</li>
							</div>
						</>
					)}
				</ul>
			</div>
		</>
	)
}
