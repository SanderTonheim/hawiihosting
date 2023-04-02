import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import background from '../../../assets/industries/index'
import headerImage from '../../../assets/industries/Arkitekt og Ingeniørselskap.jpg'
import section1 from '../../../assets/industries/arkitektSection1.jpg'

import LeftParagaph from '@/components/leftParagaph'
import RightParagaph from '@/components/rightParagraph'
import Header from '@/components/header'

export default function Arkitekt() {
	return (
		<div className='CONTAINER flex flex-col gap-5'>
			<Header
				image={headerImage}
				text={'Arkitekt-ingeniørselkskap'}
			/>

			<LeftParagaph
				image={section1}
				heading={'Hva Vi Tilbyr?'}
				list={[
					' Vi tilbyr skreddersydde markedsanalyser og statistikk til arkitekt- og ingeniørselskap for bl.a. å gi en bedre oversikt over kommersielle muligheter i prosjektene. Samt gi mer treffsikre estimater på fremtidig marked og inntjening.',
				]}
			/>
		</div>
	)
}
