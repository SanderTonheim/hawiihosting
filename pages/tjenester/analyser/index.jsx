import industries from '../../../assets/industries/index'
import tjenester from '@/assets/tjenester'
import Header from '@/components/header'
import LeftParagaph from '@/components/leftParagaph'
import Image from 'next/image'

export default function Analyser() {
	return (
		<div className='CONTAINER flex flex-col gap-5'>
			<Header
				image={tjenester.analyseHeader}
				text={'Analyser'}
			/>

			<LeftParagaph
				image={industries.bolig_og_eiendomsutvikling}
				heading={'Hva Vi Tilbyr?'}
				list={[
					'Akkvisisjonsanalyser for kjøp av tomter eller hele porteføljer. Disse analysene gir bl.a. svar på inntektspotensialet i en tomt, basert på omfattende kartlegging og modellering.',
					'Prosjekteringsanalyser. Disse analysene er relevante under hele designfasen av et prosjekt. Fra planlegging like etter kjøp av tomt og detaljregulering til verifikasjon av sammensetning/priser like før lansering. Prosjekteringsanalyser gir bl.a. svar på optimal boligsammensetning, andre suksessfaktorer og inntektspotensial.',
					'Konkurranseanalyser. Dette gir deg oversikten du trenger når du skal benchmarke prosjekter for salg, er i ferd med å lansere et nytt trinn på et eksisterende prosjekt eller skal ha en enkel oversikt til lansering av et helt nytt prosjekt. Konkurranseanalyser gir et fullstendig bilde på hvilke prosjekter som er for salg og kommende prosjekter – hvor godt de selger og til hvilke priser, kvaliteter og suksesskriterier.',
					'Vi gjør også analyser av spesifikke spørsmål som sammenligning av mulige kjøpsobjekter, identifisering av nye investeringsområder og due diligence. Pluss vurderinger rundt sammensetning av ulike boligtyper samt dokumenterte argumenter til regulering og analyser til kvartalsrapportering.',
				]}
			/>
			<p className='mx-10'>Dette gir deg konkurransefortrinnene du trenger uansett fase og størrelse på prosjekt.</p>
			<Image
				className='max-w-full '
				src={industries.boligSection1}
			/>
		</div>
	)
}
