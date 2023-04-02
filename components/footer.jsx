export default function Footer() {
	return (
		<div className='bg-zinc-800 w-full flex flex-col p-6 '>
			<div className='MEDIA-LINKS'></div>
			<div className='INFO text-white flex flex-col gap-5'>
				<div className='ABOUT flex flex-col gap-2'>
					<h2>Om oss</h2>
					<p>Hawii Analyse AS er et uavhengig analyseselskap som lager markedsanalyser og statistikk til eiendomsbransjen.</p>
				</div>
				<div className='EMAIL flex flex-col gap-2'>
					<h2>Hawii Analyse AS</h2>
					<p>ravn@hawiianalyse.no</p>
				</div>
				<div className='PHONE flex flex-col gap-2'>
					<h2>Telefon</h2>
					<p>+47 46904505</p>
				</div>
			</div>
		</div>
	)
}
