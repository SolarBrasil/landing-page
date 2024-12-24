import LogoType from "@components/logos/solarbrasil/LogoType";
import WhatsAppLogo from "@components/logos/WhatsAppLogo";

export default function Header() {
    return (
        <section>
            <nav className="flex flex-row justify-between items-center px-4 lg:px-0">
                <LogoType className="h-5 text-slate-900 dark:text-slate-50"/>

                <div className="flex flex-row gap-20">
                    <a href="/contatos/maraba" className="btn hidden">
                        <WhatsAppLogo/>
                        <span>WhatsApp</span>
                    </a>
                    {/*<a href="/login" className="self-center link">Entrar</a>*/}
                </div>
            </nav>
        </section>
    );
}
