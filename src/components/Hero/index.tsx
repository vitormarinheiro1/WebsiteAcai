import heroImage from '../../assets/acai.jpg'

export function Hero() {
    return (
        <div className="relative w-full h-[500px]">
            <img className="absolute w-full h-full object-cover" src={heroImage} alt="Imagem do Hero" />
            <div className='relative py-44 px-[360px] text-white'>
                <p className='font-semibold text-xs'>SABOR ÚNICO</p>
                <h1 className='font-bold text-7xl'>Açai Delicioso</h1>
                <p className='font-semibold text-lg py-4'>O melhor açai da Cohab, experimente <br />agora!</p>
                <button className='font-bold py-3 px-12 bg-white text-black rounded-full'>Comprar</button>
                <button className='ml-4 font-bold py-3 px-16 rounded-full border border-white'>Ver</button>
            </div>
        </div>
    )
}
