import LogoType from "@components/logos/solarbrasil/LogoType";

export default function Footer() {
    return (
        <footer>
            <section
                className="flex flex-col md:flex-row justify-between gap-y-4 md:px-0 text-slate-500 py-8 border-t border-slate-500 items-center">
                <LogoType className="h-5"/>
                <div className="flex flex-col gap-y-4">
                    <div className="text-center md:text-right flex flex-col md:flex-row md:justify-end md:gap-8">
                        <div className="font-mono">
                            <p>W MOREIRA LIMA LTDA - 34.671.957/0001-81</p>
                        </div>
                        <div className="font-mono">
                            <p>(94) 99218-2203</p>
                        </div>
                    </div>
                    <div className="text-center md:text-right flex flex-col md:flex-row md:justify-end md:gap-8">
                        <div className="font-mono">
                            <p>W F COMÉRCIO E SERVIÇOS LTDA - 12.126.140/0001-90</p>
                        </div>
                        <div className="font-mono">
                            <p>(94) 99218-2203</p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
