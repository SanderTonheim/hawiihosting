import Image from 'next/image'

export default function Header({ image, text }) {
	return (
		<div class=' HEADER max-w-full relative '>
			<Image
				className='HEADER h-[343px] max-w-full relative object-center object-cover brightness-50 '
				src={image}
			/>
			<h2 className='absolute top-0 left-0 flex  justify-center items-center h-full w-full text-[38px] text-white font-bold'>{text}</h2>
		</div>
	)
}
