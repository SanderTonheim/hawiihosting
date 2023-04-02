import Header from '@/components/header'
import LeftParagaph from '@/components/leftParagaph'
import tjenester from '@/assets/tjenester'
export default function Konsulenttjenester() {
	return (
		<div className='CONTAINER flex flex-col gap-5'>
			<Header
				image={tjenester.analyseHeader}
				text={'Konsulenttjenester'}
			/>

			<LeftParagaph
				image={tjenester.konsulentSection1}
				heading={'Hva Vi Tilbyr?'}
				text1={
					'Vi tilbyr konsulenttjenester for spesialoppdrag knyttet til eksempelvis oppkjøp og børslistinger, konfidensielle verdivurderinger, prosjektering av større utviklingsprosjekter, bistand til reguleringsplaner m.m.'
				}
			/>
		</div>
	)
}
