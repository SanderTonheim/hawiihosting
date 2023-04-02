import Header from '@/components/header'
import LeftParagaph from '@/components/leftParagaph'
import tjenester from '@/assets/tjenester'
export default function Abonnement() {
	return (
		<div className='CONTAINER flex flex-col gap-5'>
			<Header
				image={tjenester.analyseHeader}
				text={'Abonnement'}
			/>

			<LeftParagaph
				image={tjenester.abonnementSection1}
				heading={'Vi Tilbyr Skreddersydde Abonnementsløsninger På Statistikk Etter Behov:'}
				list={[
					'Med ønskede områder og detaljeringsgrad. Inkluderer mulighet for å gjøre bestilling på alle områder i Norge på postnummer, bydels og by/kommunenivå. Pluss med markedets beste detaljeringsgrad og presisjon.',
					'Og for alle deler av eiendomsmarkedet. Prosjekt- og bruktmarked, tomter, næringseiendom, fritid med sjø og fjell.',
				]}
			/>
		</div>
	)
}
