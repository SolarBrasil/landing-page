function Question({question, answer}) {
    return (
        <div className="flex flex-col gap-6 py-12">
            <header>
                <h6>{question}</h6>
            </header>
            <div className="max-w-4xl">
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default function FAQ() {
    const faq = [{
        "question": "Em quanto tempo vou recuperar o dinheiro investido?",
        "answer": "O retorno do investimento depende de diversos fatores, como o custo do sistema, a tarifa de energia elétrica, a localização geográfica e os incentivos fiscais disponíveis."
    }, {
        "question": "Qual a vida útil dos paíneis solares e dos outros componentes do sistema?",
        "answer": "Geralmente de 25 a 30 anos, e os outros componentes elétricos também são projetados para durar muitos anos. Para garantir a geração adequada, a Solar Brasil oferece planos de limpeza, inspeção e manutenção, a primeira inspeção e limpeza são grátis."
    }, {
        "question": "O sistema de energia solar vai funcionar em dias nublados ou chuvosos?",
        "answer": "Embora a produção de energia seja menor em dias nublados ou chuvosos, os painéis solares ainda geram eletricidade. A Solar Brasil oferece relatórios de geração para todos os clientes e sempre garantimos a geração adequada contratada."
    }];

    return (
        <section className="flex flex-col gap-24 px-4 lg:px-0">
            <header>
                <h3>Perguntas Frequentes</h3>
            </header>
            <div className="border-y border-slate-500 divide-y divide-slate-500">
                {faq.map((question, index) => <Question key={index} {...question}/>)}
            </div>
        </section>
    );
}