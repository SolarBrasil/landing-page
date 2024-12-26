import Image from 'next/image';

import LogoMark from "@components/logos/solarbrasil/LogoMark";

function Location({size, src, name, url}) {
    return (
        <a className="flex flex-col items-center gap-6" href={url}>
            <div className="rounded-full border-4 border-slate-50 dark:border-slate-900 hover:border-slate-900 dark:hover:border-slate-50">
                <Image src={src} width={size} height={size} className="rounded-full" alt={""}/>
            </div>
            <p className="font-medium text-slate-900 dark:text-slate-50 hover:underline">{name}</p>
        </a>
    );
}

export default function Locations() {
    const locations = [
        {
            "src": "/images/location_maraba.png",
            "name": "Marabá, PA",
            "url": "https://maps.app.goo.gl/hfu2w3WkWZpBgVmE8"
        },
        {
            "src": "/images/location_saoluis.png",
            "name": "São Luís, MA",
            "url": "https://maps.app.goo.gl/LyYkGFa83uFWsgPMA"
        }
    ];

    return (
        <section className="flex flex-col items-center gap-9 rounded-lg bg-indigo-50 dark:bg-sky-950 m-4 p-4 pt-8 lg:mx-0 lg:py-12 lg:px-56">
            <LogoMark/>
            <p className="text-slate-900 dark:text-slate-50 text-[40px] font-semibold leading-tight text-center">
                Sua Energia no Norte do Brasil
            </p>
            <p className="text-center">
                Com clientes satisfeitos no Pará, Maranhão e Tocantins, a Solar Brasil está pronta para levar energia
                limpa e economia para você também. Visite nossas lojas no Pará e Maranhão e descubra como a energia
                solar pode transformar sua vida.
            </p>
            <div className="flex flex-col lg:flex-row gap-20 lg:gap-28 py-6">
                {locations.map((location, index) => <Location key={index} size={320} {...location}/>)}
            </div>
        </section>
    )
}