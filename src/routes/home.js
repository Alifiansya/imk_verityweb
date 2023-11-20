import NavBar from "../components/navbar";
import PlayerCard from "../components/playerCard";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const playerData = {
        'player1': {
            'hrate': '115',
            'health': '84',
            'playtime': '1'
        },
        'player2': {
            'hrate': '140',
            'health': '83',
            'playtime': '1'
        },
        'player3': {
            'hrate': '113',
            'health': '91',
            'playtime': '1'
        },
        'player4': {
            'hrate': '116',
            'health': '94',
            'playtime': '1'
        },
        'player5': {
            'hrate': '117',
            'health': '76',
            'playtime': '1'
        },
        'player6': {
            'hrate': '115',
            'health': '85',
            'playtime': '1'
        },
        'player7': {
            'hrate': '93',
            'health': '83',
            'playtime': '1'
        },
        'player8': {
            'hrate': '92',
            'health': '81',
            'playtime': '1'
        }
    }
    const [filterDrop, setFilterDrop] = useState(false);
    return (
    <div className="my-40">
        <NavBar/>
        <div id="body" className="my-0 mx-auto w-[85%]">
            <div>
                <button type="button" onClick={() => {setFilterDrop(!filterDrop)}} className="px-[1.2rem] py-[1rem] my-8 border-b-[0.0625rem] border-b-weak-grey flex justify-center items-center gap-16">
                    <span className="text-[0.9375rem] opacity-50">Filter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                    <path d="M8.69069 10.8661C9.44223 11.517 10.5578 11.517 11.3093 10.8661L18.9352 4.26186C20.335 3.04959 19.4777 0.75 17.6259 0.75H2.37407C0.522298 0.75 -0.335044 3.04959 1.06476 4.26186L8.69069 10.8661Z" fill="black" fill-opacity="0.5"/>
                </svg>
                </button>
                <div id="dropdown-filter">
                    <div id="dropdown" className={`${filterDrop ? "visible" : "invisible"} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700 absolute -mt-6`}>
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Player</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Substitute</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="playerContainer" className="flex flex-wrap gap-8">
                <PlayerCard name="Lionnel Messi" gender="Male" age= "36" playerId={1} health='93' playtime={1} visibility="true"/>
                <PlayerCard name="Lionnel Messi" gender="Male" age= "36" PlayerId={2} health='86' playtime={2} visibility="true"/>
                <PlayerCard name="Lionnel Messi" gender="Male" age= "36" playerId={3} health='97' playtime={1} visibility="true"/>
                <PlayerCard name="Lionnel Messi" gender="Male" age= "36" playerId={4} health='85' playtime={3} visibility="true"/>
            </div>
        </div>
    </div>
    );
}

export default Home;