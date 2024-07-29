export function Header() {
    return (
        <>
            <div className="bg-violet-900 py-2 flex justify-center">
                <p className="text-white text-xs font-bold">DESCONTOS IMPERDÍVEIS EM NOSSOS AÇAÍS!</p>
            </div>
            <div className="flex justify-around items-center">
                <h1 className="font-bold text-2xl">Açai do Balão</h1>
                <ul className="flex gap-10 py-8">
                    <li>
                        Home
                    </li>
                    <li>
                        Loja
                    </li>
                    <li>
                        Cardápio
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </div>
        </>
    )
}