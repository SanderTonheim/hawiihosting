import Image from 'next/image'
import { Icon } from '@/assets/icons/icon'

export default function LeftParagaph({ image, heading, text1, text2, list }) {
	const ListEl = list?.map((item) => (
		<li className='flex gap-4 items-center'>
			<Image
				className='w-4 h-4'
				src={Icon.checkmark}
			/>
			{item}
		</li>
	))
	return (
		<div className='flex flex-col items-center max-w-full md:flex-row '>
			<div className='CONTENT max-w-3/4 mx-10 my-5 md:flex md:gap-10 '>
				<Image
					src={image}
					className='max-w-[20rem] m-auto'
				/>
				<div className='TEXT my-6 w-full'>
					<h2 className='HEADING mb-4 text-[26px] underline underline-offset-[.5rem] font-semibold text-[#313131] decoration-[#3055E8] '>{heading}</h2>
					<p>{text1}</p>
					<p className='mt-3'>{text2}</p>
					<ul className='flex flex-col gap-5'>{ListEl}</ul>
				</div>
			</div>
		</div>
	)
}
