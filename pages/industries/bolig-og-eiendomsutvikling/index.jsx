import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import headerImage from '../../../assets/industries/index'

import LeftParagaph from '@/components/leftParagaph'
import RightParagaph from '@/components/rightParagraph'
import Header from '@/components/header'
import background from '../../../assets/industries/index'

export default function Bolig() {
	return (
		<div className='CONTAINER flex flex-col gap-5'>
			<Header
				image={headerImage.bolig_og_eiendomsutvikling}
				text={'Bolig og eiendomsutvikling'}
			/>

			<LeftParagaph
				image={headerImage.boligSection1}
				heading={'Hva Vi Tilbyr?'}
				list={[
					'Et bredt spekter av skreddersydde markedsanalyser og statistikk til bolig- og eiendomsutviklere. Dette er relevant enten du besitter store eller små prosjekter.',
					'Og for alle faser fra akkvisisjon med identifisering av nye områder og due diligencefase, til prosjektering og regulering, benchmarking av prosjekter for salg, verdivurdering av eksisterende porteføljer og input til kvartalsrapporter.',
				]}
			/>
		</div>
	)
}
