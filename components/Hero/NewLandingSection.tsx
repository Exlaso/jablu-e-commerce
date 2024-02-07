import {FunctionComponent} from "react";

interface typesforNewLandingSection {

}

const NewLandingSection: FunctionComponent<typesforNewLandingSection> = (props) => {
    return <div className={"min-h-screen pt-24 px-24 flex flex-col justify-between bg-[#304D30aF] w-full"}>
        hlo
        <div className={"flex justify-around gap-10 relative z-[21] w-full  pt-16"}>
            <Card className={"top-12"} />
            <Card className={"-top-12"} />
            <Card className={"top-12"} />
        </div>


    </div>
}

const Card = (props:{className: string}) => {
    return <div className={"border h-[50vh] shrink-0 relative w-[20vw]  flex "+props.className}>a</div>
}
export default NewLandingSection