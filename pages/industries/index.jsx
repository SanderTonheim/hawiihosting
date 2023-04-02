import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import images from '../../assets/industries/index'

import LeftParagaph from '@/components/leftParagaph'
import RightParagaph from '@/components/rightParagraph'
import Header from '@/components/header'
export default function Industries() {
	return (

			<div className='CONTAINER flex flex-col gap-5'>
			<Header image={images.industriesBG} text={'Industrier'} />
			<LeftParagaph
				image={images.industriesSection1}
				heading={'Hva Vi Tilbyr?'}
				text1={'Vi tilbyr et bredt spekter av skreddersydde markedsanalyser og statistikk til ulike aktører innen eiendomsmarkedet.'}
				text2={
					'Fra bolig/eiendomsutviklere med store og små prosjekter, investeringsselskap med direkte og indirekte investeringer i eiendom, til arkitekt- og ingeniørselskap, bransjeorganisasjoner og andre aktører innen eiendom.'
				}
			/>
			<RightParagaph
				image={images.industriesSection2}
				heading={'Og Er Relevant I Alle Faser:'}
				list={[
					'Enten du vurderer å gå inn i et nytt område, skal kjøpe ny tomt eller portefølje',
					'Skal prosjektere – enten store eller små prosjekter, trenger argumenter til regulering eller vurderinger av optimal sammensetning mellom boligtyper og enheter',
					'Trenger en totaloversikt på prosjekter for salg og kommende prosjekter i et område',
					'Ønsker å benchmarke prosjekter for salg eller vurderer å omprosjektere et prosjekt som selger dårlig',
					'Eller trenger presentasjoner i forbindelse med finansiering eller kvartalsrapportering',
				]}
			/>
				</div>

	)
}
