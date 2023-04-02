import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import images from '../../../assets/industries/index'

import LeftParagaph from '@/components/leftParagaph'
import RightParagaph from '@/components/rightParagraph'
import Header from '@/components/header'

export default function Bransjeorganisasjoner() {
	return (
		<div className='CONTAINER flex flex-col gap-5'>
			<Header
				image={images.bransjeorganisasjoner}
				text={'bransjeorganisasjoner'}
			/>
			<LeftParagaph
				image={images.bransjeSection1}
				heading={'Hva Vi Tilbyr?'}
				list={['Vi tilbyr skreddersydde markedsanalyser og statistikk til bransjeorganisasjoner som brukes bl.a. for å kunne gi verdifull innsikt til medlemsbedrifter.']}
			/>
		</div>
	)
}
