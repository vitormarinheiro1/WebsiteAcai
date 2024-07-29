import exploreImage from '../../assets/explore.jpg'

export function Explore() {
    return (
        <div className="bg-yellow-400 py-20 flex justify-center">
            <div>
                <img
                    className='w-[610px] h-[400px] object-cover'
                    src={exploreImage}
                    alt="Imagem de açai"
                />
            </div>
            <div className='bg-white w-[610px] h-[400px] px-20'>
                <h1 className='font-bold text-2xl pt-40'>Sorvetes e açai</h1>
                <p className='py-4 pb-6 text-gray-600'>Descubra nossos deliciosos sorvetes e açaí,
                    preparados com ingredientes frescos e de alta
                    qualidade.
                </p>
                <button className='font-bold py-4 px-12 rounded-full bg-violet-700 text-white'>Explorar</button>
            </div>
        </div>
    )
}