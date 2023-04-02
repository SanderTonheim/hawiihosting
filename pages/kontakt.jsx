import Header from '@/components/header'
import image from '@/assets/kontakt'
import LongButton from '@/components/longButton'
export default function Kontakt() {
	return (
		<main>
			<Header
				text={'Kontakt'}
				image={image.kontaktHeader}
			/>
			<div className='S1 flex flex-col items-center my-5 gap-5'>
				<h1 className='text-[#041d45] font-bold'>Kontakt oss</h1>
				<ContactUs />
				<LongButton text={'Send melding'} />
			</div>
		</main>
	)
}

const ContactUs = () => {
	return (
		<div className='bg-[#2f2f36] flex flex-col mx-5 gap-5 p-5'>
			<input
				className='rounded-2xl py-2 px-5'
				type='text'
				placeholder='Ditt navn'
			/>
			<input
				className='rounded-2xl py-2 px-5'
				type='text'
				placeholder='Din e-mail'
			/>
			<input
				className='rounded-2xl px-5 py-2 pb-16'
				type='text'
				placeholder='Din melding'
			/>
		</div>
	)
}
