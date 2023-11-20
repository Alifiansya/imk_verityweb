import NavBar from "../components/navbar";
import PlayerBg from "../assets/images/playerbg.png"
import Messi from "../assets/images/PlayerImg/NoBG/messi.png"

function Player(){
    let firstName = 'L';
    let lastName = "Messi";
    let position = "Striker";
    let gender = "Male";
    let age = "36";
    return (
        <div className="flex flex-col">
            <NavBar />
            <div id="top-sec" className="w-full h-[45rem] flex justify-center">
                <img src={PlayerBg} className="absolute -z-10 w-full h-[45rem]"/>
                <div id="l-sec" className="w-full h-full">
                    <div id="topl-sec" className="ml-24 mt-44 mb-20">
                        <h1 className="font-normal text-weak-grey text-[5rem] h-20 flex items-center">{`${firstName}.`}</h1>
                        <h1 className="font-bold text-[8.875rem] text-[#FCFFEE] h-40 flex items-center">{`${lastName}.`}</h1>
                        <h2 className="font-normal text-[2rem] text-weak-grey">{`Position: ${position}`}</h2>
                    </div>
                    <div id="botl-sec" className="ml-24 mt-20 flex">
                        <div className="flex flex-col w-40">
                            <span className="font-normal text-[2.275rem] text-weak-grey">Gender</span>
                            <span className="font-bold text-[2.275rem] text-[#FCFFEE]">{`${gender}`}</span>
                        </div>
                        <div className="flex flex-col w-40">
                            <span className="font-normal text-[2.275rem] text-weak-grey">Age</span>
                            <span className="font-bold text-[2.275rem] text-[#FCFFEE]">{`${age}`}</span>
                        </div>
                    </div>
                </div>
                <div id="r-sec" className="w-full h-full flex justify-center items-end">
                    <img src={Messi} className="object-cover object-top w-[35rem] h-[35rem]"/>
                </div>
            </div>
            <div className="rounded-xl bg-[#424242] flex p-2 px-10 text-2xl text-[#FCFFEE] font-semibold justify-center mx-auto -mt-8">
                Play Time Average
            </div>
            <div id="data-sec">
                <div>
                    Day
                </div>
            </div>
        </div>
    )
}

export default Player;