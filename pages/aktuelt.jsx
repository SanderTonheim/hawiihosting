import Header from '@/components/header'
import image from '@/assets/akutelt'
import Image from 'next/image'
import Link from 'next/link'

export default function Aktuelt() {
	return (
		<main>
			<Header
				text={'Aktuelt'}
				image={image.aktueltHeader}
			/>
			<div className='CARD-CONATINER flex flex-col items-center gap-10 p-8 '>
				<Card
					cardImage={image.cardOne}
					text={'TRONDHEIM FORBI OSLO I SALG AV NYE BOLIGER'}
				/>
				<Card
					cardImage={image.cardTwo}
					text={'BOLIGSALGET KOKER ETTER FULL STANS'}
				/>
				<Card
					cardImage={image.cardThree}
					text={'BRUKTBOLIGMARKEDET SMITTER OVER PÅ NYBOLIG, FINANSAVISEN 11.06.2020'}
				/>
				<Card
					cardImage={image.cardFour}
					text={'«ALLE» SMÅLEILIGHETER RIVES VEKK'}
				/>
				<Card
					cardImage={image.cardfive}
					text={'BOLIGPRODUSENTENE REDUSERER ANSLAG FRA 10.000 TIL 4.000 FÆRRE SOLGTE BOLIGER, FINANSAVISEN 12.08.2020'}
				/>
				<Card
					cardImage={image.cardSix}
					text={'MILLIARDENE RENNER INN I OBOS-KASSEN. MEN MER ENN 80 PROSENT KOMMER IKKE FRA BOLIGBYGGING.'}
				/>
				<Card
					cardImage={image.cardSeven}
					text={'FRA FULL STOPP TIL FULL FYR I NYBOLIGMARKEDET I OSLO, FINANSAVISEN 09.08.2020'}
				/>
			</div>
		</main>
	)
}

export const Card = ({ cardImage, text }) => {
	return (
		<div className=' max-h-96 w-80 font-bold'>
			<Image src={cardImage} />
			<div className='TEXT min-h-[185px] bg-[#041d45] p-6 flex flex-col justify-between'>
				<h2 className=' text-white '>{text}</h2>
				<div className=' bg-white w-full h-1'></div>
				<div>
					<Link
						href={'/'}
						className='text-white'>
						Les mer
					</Link>
				</div>
			</div>
		</div>
	)
}
