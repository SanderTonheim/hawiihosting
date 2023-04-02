import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Spiral from '../public/images/landingPage/city-spiral.jpg'
import HeaderSlideOne from '../public/images/landingPage/business-slide.jpg'
import Ecology from '../public/images/landingPage/ecology.jpg'
import Chess from '../public/images/landingPage/chess.jpg'
import { GiChessRook } from 'react-icons/gi'
import { MdAdsClick } from 'react-icons/md'
import { TbChartHistogram } from 'react-icons/tb'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Button from '@/components/shortButton'
import ShortButton from '@/components/shortButton'
import LongButton from '@/components/longButton'
//

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<header className='HEADER bg-sliderOne h-[337px] bg-cover bg-center text-[#fff] font-bold text-center flex flex-col justify-center gap-5 px-4'>
				{/* <Image
        src={HeaderSlideOne}
        /> */}
				<h1 className='text-3xl '>Analyser & statisitkk</h1>
				<p className=' text-2xl'>Ledene markerdsanalyser og statisitkk til eiendomsbransjen</p>
			</header>
			<main className=' MAIN text-[#666] text-lg text-center px-4 my-4 flex flex-col gap-10'>
				<section className='S1 flex flex-col gap-4 '>
					<h2 className=' text-[#041D45] text-4xl font-bold text-center'>Industier</h2>
					<p>
						Vi tilbyr et bredt spekter av skreddersydde markedsanalyser og statistikk til ulike aktører innen eiendomsmarkedet. Fra bolig/eiendomsutviklere med store og små prosjekter,
						investeringsselskap med direkte og indirekte investeringer i eiendom, til arkitekt- og ingeniørselskap, bransjeorganisasjoner og andre aktører innen eiendom.
					</p>
				</section>

				<section className='S2 flex flex-col self-center gap-4 '>
					<Image
						src={Spiral}
						className='my-4'
					/>
					<ul className='font-medium text-left'>
						<li className='flex items-end justify-between'>
							Bolig- og eindomsutvikling <FaLongArrowAltRight className=' min-w-[21px] min-h-[31px]' />
						</li>
						<li className='flex items-end justify-between'>
							Kapitalmarked, investeringsselskap <FaLongArrowAltRight className=' min-w-[21px] min-h-[31px]' />
						</li>
						<li className='flex items-end justify-between'>
							Arkitekt, ingeniørselskap <FaLongArrowAltRight className=' min-w-[21px] min-h-[31px]' />
						</li>
						<li className='flex items-end justify-between'>
							Bransjeorganisasjoner <FaLongArrowAltRight className=' min-w-[21px] min-h-[31px]' />
						</li>
					</ul>
					<ShortButton text={'Mer info'} />
				</section>

				<section className='S3 flex flex-col gap-4'>
					<h2 className=' text-[#041D45] text-4xl font-bold text-center'>Våre tjenester</h2>
					<p>
						Vi tilbyr skreddersydde markedsanalyser og statistikk. Akkvisisjonsanalyser, prosjekteringsanalyser, konkurranseanalyser, skreddersydde analyser til regulering, omprosjektering,
						abonnementsløsninger og mye mer. Dette er smarte beslutningsunderlag som hjelper deg å maksimere verdien i dine prosjekter.
					</p>

					<p>
						Våre tjenester gir konkurransefortrinn uansett fase. Om du vurderer et nytt område, skal kjøpe en ny tomt eller portefølje, sammenligner mulige kjøpsobjekt eller skal prosjektere en ny
						tomt. Trenger argumenter til regulering, ønsker å benchmarke prosjekter for salg eller trenger presentasjoner i forbindelse med finansering eller kvartalsrapporter.
					</p>
					<LongButton text={'Mer info'} />
					<Image src={Ecology} />
				</section>

				<section className='S4 flex flex-col items-center gap-4 py-4 bg-fixed bg-no-repeat bg-ecologyCity  '>
					<div className='h-full w-full flex flex-col items-center gap-4 '>
						<div className=' w-3/4 bg-[#fff] flex flex-col items-center py-6 gap-3'>
							<GiChessRook className='w-auto h-24' />

							<h2 className='text-[#000] font-bold '>Analyser</h2>

							<p>Vi lager skreddersydde analyser for eiendomsmarkedet</p>

							<ShortButton text={'Mer info'} />
						</div>

						<div className=' w-3/4 bg-[#fff] flex flex-col items-center py-6 gap-3'>
							<MdAdsClick className='w-24 h-24 ' />
							<h2 className='text-[#000] font-bold '>Statistikkutdrag</h2>
							<p>Vi tilbyr skreddersydde statistikkutdrag etter behov</p>
							<ShortButton text={'Mer info'} />
						</div>

						<div className=' w-3/4 bg-[#fff] flex flex-col items-center py-6 gap-3'>
							<TbChartHistogram className='w-24 h-24  ' />
							<h2 className='text-[#000] font-bold '>Abonnementløsning</h2>
							<p>Vi tilbyr skreddersydde statistikkutdrag etter behov</p>
							<ShortButton text={'Mer info'} />
						</div>

						<div className=' w-3/4 bg-[#fff] flex flex-col items-center py-6 gap-3'>
							<HiOutlineLightBulb className='w-24 h-24' />
							<h2 className='text-[#000] font-bold '>Konsulenttjenester</h2>
							<p>Vi tilbyr konsulenttjenester for spesialoppdrag knyttet til..</p>
							<ShortButton text={'Mer info'} />
						</div>
						<ShortButton text={'Flere tjenester'} />
					</div>
				</section>

				<section className='S5 flex flex-col gap-4 items-center'>
					<h2 className=' text-[#041D45] text-4xl font-bold text-center'>Markimer Verdien I Dine Prosjekter</h2>
					<p>Våre tjenester gir innsikten du trenger for å øke konkurransefortrinnet i dine prosjekter/områder.</p>
					<Image src={Chess} />
					<p>Dette gir et bedre beslutningsgrunnlag, øker prosjektverdien og omsetningshastigheten, muliggjør nye og bedre kjøp og bedrer risikostyringen.</p>
					<ul className='font-medium flex flex-col gap-2 w-full'>
						<li className='flex  justify-between'>
							Sterkere beslutningsgrunnlag <FaLongArrowAltRight className=' w-[21px] h-[31px]' />
						</li>
						<li className='flex justify-between'>
							Økt lønnsomhet <FaLongArrowAltRight className=' min-w-[21px] min-h-[31px]' />
						</li>
						<li className='flex justify-between'>
							Identifisering av nye muligheter <FaLongArrowAltRight className=' min-w-[21px] min-h-[31px]' />
						</li>
						<li className='flex  justify-between'>
							Bedre Risikostyring <FaLongArrowAltRight className=' min-w-[21px] min-h-[31px]' />
						</li>
					</ul>
					<ShortButton text={'Mer info'} />
				</section>
			</main>

			<section className='S6 bg-[#041D45] text-[#fff] text-center py-4 flex flex-col gap-4 items-center max-w-full'>
				<h2 className='text-4xl font-bold text-center '>Aktuelt</h2>
				<p className=' text-[#ddd]'>Meld deg på vårt nyhetsbrev. Hold deg oppdatert med våre artikler og nyhetsbrev.</p>
				<button className=' text-[#fff] bg-[#041D45] py-3 px-3 w-fit rounded-3xl font-bold border-2 border-[#fff]'>Meld deg på vårt nyhetsbrev</button>
			</section>

			<section className='S7 bg-black bg-opacity-75  text-center py-8 flex flex-col gap-6 items-center max-w-full px-4'>
				<h2 className='text-4xl font-bold text-center text-[#fff] '>Kontakt oss</h2>
				<div className='flex flex-col gap-4 w-full'>
					<input
						className='px-2 py-1'
						type='text'
						placeholder='Ditt navn'
					/>
					<input
						className='px-2 py-1'
						type='text'
						placeholder='Din e-mail'
					/>
					<input
						className='px-2 py-1'
						type='text'
						placeholder='Din melding'
					/>
				</div>
				<LongButton text={'Send melding'} />
			</section>
		</>
	)
}