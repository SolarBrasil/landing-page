import Header from "@components/Header";
import Footer from "@components/Footer";
import FAQ from "@components/FAQ";
import LastCTA from "@components/LastCTA";
import Locations from "@components/Locations";
import SuccessfulProjects from "@components/SuccessfulProjects";
import ProjectSteps from "@components/ProjectSteps";
import ValueProposition from "@components/ValueProposition";
import MainCTA from "@components/MainCTA";

export const metadata = {
    title: 'Solar Brasil',
}

export default function Page() {
    return (
        <div className="container mx-auto px-0 lg:px-32">
            <main className="flex flex-col gap-24 lg:gap-28 mt-8">
                <Header/>

                <MainCTA/>

                <ValueProposition/>

                <ProjectSteps/>

                <SuccessfulProjects/>

                <Locations/>

                <FAQ/>

                <LastCTA/>

                <Footer/>
            </main>
        </div>
    )
}