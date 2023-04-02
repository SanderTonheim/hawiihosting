import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import images from '../../../assets/industries/index'
import LeftParagaph from '@/components/leftParagaph'
import RightParagaph from '@/components/rightParagraph'
import Header from '@/components/header'

export default function Kapitalmarked() {
	return (
		<div className='CONTAINER flex flex-col gap-5'>
			<Header
				image={images.kapitalBackground}
				text={'kapitalmarked investeringsselskap'}
			/>

			<LeftParagaph
				image={images.kapitalSection1}
				heading={'Hva Vi Tilbyr?'}
				list={[
					'Et bredt spekter av skreddersydde markedsanalyser og statistikk til investeringsselskap og tilretteleggere til eksempelvis investeringer i utviklingsprosjekter, M&A av porteføljer og børslistinger.',
					'Vi støtter i due diligencefase av tomter/eiendommer og ved identifisering av nye områder, gjør verdivurderinger av prosjekter, porteføljer og områder til potensielle investeringer, nye byggelån, M&A av porteføljer og børslistinger og bistår med statistikk og analyser til kvartalsrapporter.',
				]}
			/>
		</div>
	)
}
