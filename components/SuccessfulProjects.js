import Image from "next/image";
import {BuildingStorefrontIcon, ShoppingCartIcon, HomeModernIcon} from "@heroicons/react/24/outline";

function Project({Icon, src, name, power, caption}) {
    return (
        <a href="#" className="link-figure">
            <figure className="flex flex-col gap-3 lg:gap-6 relative">
                <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    src={src}
                    alt={caption}
                />

                <blockquote className="w-full absolute top-0 left-0 text-sm">
                    <h5 className="text-slate-50 bg-gradient-to-r from-slate-900 to-transparent pt-2 pl-2 rounded-t-lg">
                        {name}
                    </h5>
                    <h6 className="text-slate-50 bg-gradient-to-r from-slate-900 to-transparent pb-2 pl-2">
                        {power}
                    </h6>
                </blockquote>

                <figcaption>
                    <div>
                        <Icon className="size-8"/>
                    </div>
                    {caption}
                </figcaption>
            </figure>
        </a>
    );
}

export default function SuccessfulProjects() {
    const projects = [
        {
            "Icon": HomeModernIcon,
            "src": "/images/project_artes.png",
            "name": "Artes em Pré-Moldados",
            "power": "10.000 kWh/Mês",
            "caption": "Fabricação de estruturas pré-moldadas de concreto armado em Marabá, PA."
        },
        {
            "Icon": HomeModernIcon,
            "src": "/images/project_concreta.png",
            "name": "Concreta Engenharia",
            "power": "6.000 kWh/Mês",
            "caption": "Construçao de edifícos em Marabá, PA."
        },
        {
            "Icon": ShoppingCartIcon,
            "src": "/images/project_diaadia.png",
            "name": "Supermercado Dia a Dia",
            "power": "5.000 kWh/Mês",
            "caption": "Supermercado em Marabá, MA."
        },
        {
            "Icon": BuildingStorefrontIcon,
            "src": "/images/project_domconcept.png",
            "name": "Dom Concept",
            "power": "10.500 kWh/Mês",
            "caption": "Cabelereiros em São Luís, MA."
        },
        {
            "Icon": HomeModernIcon,
            "src": "/images/project_fkceramica.png",
            "name": "FK Cerâmica",
            "power": "12.000 kWh/Mês",
            "caption": "Indústria cerâmica em Nova Ipixuna, PA."
        },
        {
            "Icon": HomeModernIcon,
            "src": "/images/project_hidraulicafederal.png",
            "name": "Hidraúlica Federal",
            "power": "5.700 kWh/Mês",
            "caption": "Manutenção e reparação de equipamentos hidráulicos e pneumáticos em Marabá, PA."
        },
        {
            "Icon": HomeModernIcon,
            "src": "/images/project_natuclara.png",
            "name": "Água Natuclara",
            "power": "13.000 kWh/Mês",
            "caption": "Fabricação de águas envasadas em Curionópolis, PA."
        },
        {
            "Icon": HomeModernIcon,
            "src": "/images/project_nortesul.png",
            "name": "Norte Sul Serviços",
            "power": "14.000 kWh/Mês",
            "caption": "Fabricação de estruturas metálicas em Parauapebas, PA."
        },
        {
            "Icon": BuildingStorefrontIcon,
            "src": "/images/project_postowr.png",
            "name": "Autoposto WR",
            "power": "8.000 kWh/Mês",
            "caption": "Posto de combustíveis em São Pedro da Água Branca, MA."
        },
        {
            "Icon": HomeModernIcon,
            "src": "/images/project_queijoleite.png",
            "name": "Laticínios Queijoleite",
            "power": "13.000 kWh/Mês",
            "caption": "Fabricação de laticínios em Água Azul no Norte, PA."
        },
        {
            "Icon": ShoppingCartIcon,
            "src": "/images/project_wrsupermercado.png",
            "name": "W. R. Supermercado",
            "power": "6.000 kWh/Mês",
            "caption": "Supermercado em São Pedro da Água Branca, MA."
        },
        {
            "Icon": HomeModernIcon,
            "src": "/images/project_eugenio.png",
            "name": "Cerâmica Pai e Filho",
            "power": "9.000 kWh/Mês",
            "caption": "Indústria cerâmica em Nova Ipixuna, PA."
        },
    ];

    return (
        <section className="flex flex-col gap-8 px-4 lg:px-0">
            <header>
                <h3>Quem confia na Solar Brasil</h3>
            </header>

            <p>
                Alguns de nossos clientes com projetos de sucesso.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 justify-center">
                {
                    projects.map((project, index) =>
                        <Project key={index} {...project}/>
                    )
                }
            </div>
        </section>
    );
}