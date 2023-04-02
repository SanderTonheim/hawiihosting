import Header from '@/components/header'
import LeftParagaph from '@/components/leftParagaph'
import tjenester from '@/assets/tjenester'

export default function Statisktikkutdrag() {
	return (
		<div className='CONTAINER flex flex-col gap-5'>
			<Header
				image={tjenester.analyseHeader}
				text={'Statistikkutdrag'}
			/>

			<LeftParagaph
				image={tjenester.statistikSection1}
				heading={'Vi Tilbyr Skreddersydde Statistikkutdrag Etter Behov:'}
				list={[
					'På postnummer-, bydels-, by- og regionsnivå. Med markedets beste detaljeringsnivå og presisjon.',
					'Pluss for alle deler av eiendomsmarkedet med prosjekt- og bruktmarked, tomter, næringseiendom, fritid – sjø og fjell.',
				]}
			/>
		</div>
	)
}
