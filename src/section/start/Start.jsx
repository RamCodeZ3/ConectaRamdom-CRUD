import Title from "./Title";
import UsersRandom from './UsersRandom';

function Start(){
    return(
        <>
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
            <Title/>
            <div>
                <UsersRandom/>
            </div>
        </div>
        </>
    )
}

export default Start;