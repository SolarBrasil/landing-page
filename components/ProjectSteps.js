import {ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, BanknotesIcon} from "@heroicons/react/24/outline";

function Step({Icon, title, description}) {
    return (
        <div className="flex flex-col gap-6">
            <figure className="size-16 text-blue-400">
                {<Icon/>}
            </figure>
            <header className="border-slate-500 border-t pt-6">
                <p className="text-slate-900 dark:text-slate-50 font-semibold text-3xl">{title}</p>
            </header>
            <p>{description}</p>
        </div>
    )
}

export default function ProjectSteps() {
    const steps = [
        {
            "Icon": ChatBubbleLeftRightIcon,
            "title": "Contato",
            "description": "Quando você entra em contato com a Solar Brasil, nós esclarecemos suas dúvidas e fornecemos orçamentos detalhados."
        },
        {
            "Icon": WrenchScrewdriverIcon,
            "title": "Instalação",
            "description": "Contamos com equipes qualificadas de instalação, utilizando os projetos personalizados e supervisão de nossos engenheiros. A Solar Brasil garante a qualidade dos equipamentos e monitoramos o sistema após instalado."
        },
        {
            "Icon": BanknotesIcon,
            "title": "Homologação",
            "description": "Depois da distribuidora de energia realizar e aprovar  a vistoria obrigatória do projeto, o medior é trocado e você começa a gerar sua própria energia e economizar."
        }
    ];

    return (
        <section className="flex flex-col gap-12 px-4 lg:px-0">
            <header>
                <p className="text-slate-900 dark:text-slate-50 text-[40px] font-semibold leading-tight">Seu projeto, realizado</p>
            </header>
            <div className="grid grid-cold-1 lg:grid-cols-3 gap-7">
                {steps.map((step, index) => <Step key={index} {...step} />)}
            </div>
        </section>
    );
}