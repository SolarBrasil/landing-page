import {ArrowLongDownIcon} from "@heroicons/react/24/outline";

function BillLabel({title, value, condition}) {
    const conditions = {
        "neutral": {bg: "bg-yellow-300", border: "border-yellow-300"},
        "good": {bg: "bg-green-500", border: "border-green-500"},
        "bad": {bg: "bg-red-400", border: "border-red-400"}
    }

    return (
        <div className={`text-center border ${conditions[condition].border}`}>
            <header className={`px-4 ${conditions[condition].bg}`}>
                <span className="font-medium text-base">{title}</span>
            </header>
            <span className="font-mono font-bold text-base">{value}</span>
        </div>
    );
}

function Bill({billInfo, date, value, isGood}) {
    return (
        <div className="flex flex-col bg-slate-100 text-slate-900 px-4 py-5 rounded gap-2">
            <header>
                <span className="font-mono font-bold text-base">{billInfo.name}</span>
            </header>

            <p className="font-mono text-slate-900 font-bold text-sm">
                {billInfo.address.line1}<br/>
                {billInfo.address.line2}<br/>
                {billInfo.address.line3}
            </p>

            <div className="flex flex-row justify-between">
                <BillLabel title="Conta mês" value={date} condition={"neutral"}/>
                <BillLabel title="Total a pagar" value={value} condition={isGood ? "good" : "bad"}/>
            </div>
        </div>
    );
}

export default function ValueProposition() {
    const billInfo = {
        "name": "MARIA FERNANDES DA SILVA",
        "address": {
            "line1": "RUA ESPÍRITO SANTO",
            "line2": "BELO HORIZONTE CEP: 68503-360 MARABÁ-PA",
            "line3": "CPF: ***.998.93*-**"
        }
    };

    return (
        <section className="flex flex-col-reverse lg:flex-col-reverse xl:flex-row-reverse gap-20 xl:gap-44 justify-center items-center px-4 xl:px-0">
            <div className="flex flex-col gap-8 justify-center lg:max-w-lg">
                <header>
                    <h3>Diminua sua conta</h3>
                </header>

                <p>
                    Gere sua própria energia e reduza a conta de luz. Economia garantida: Um investimento que se
                    paga com o tempo, proporcionando economia a longo prazo. Diga adeus às surpresas na conta de luz
                    e tenha mais autonomia sobre sua energia.
                </p>
            </div>

            <figure className="drop-shadow-2xl w-fit aspect-[9:16] md:aspect-[378/565] rounded-lg">
                <div className="inline-flex flex-col border rounded-lg gap-5 p-5 paper-shadow bg-white">
                    <Bill billInfo={billInfo} date="01/2023" value="R$ 7.401,40" isGood={false}/>

                    <div className="size-28 self-center">
                        <ArrowLongDownIcon/>
                    </div>

                    <Bill billInfo={billInfo} date="02/2024" value="R$ 280,94" isGood={true}/>
                </div>
            </figure>
        </section>
    );
}