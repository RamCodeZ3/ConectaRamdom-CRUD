import CreateUser from "./component/CreateUser";
import TitleForm from "./component/TitleForm";

function SectionAdd(){
    return(
        <>
        <div className="flex flex-col gap-4 h-full w-full mb-4">
            <TitleForm/>
            <CreateUser/>
        </div>
        </>
    )
}

export default SectionAdd;