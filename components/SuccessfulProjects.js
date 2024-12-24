import Image from "next/image";
import {Projects} from "@components/ProjectsList"

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
                    placeholder="blur"
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
                    Projects.map((project, index) =>
                        <Project key={index} {...project}/>
                    )
                }
            </div>
        </section>
    );
}