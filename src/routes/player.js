import NavBar from "../components/navbar";
import PlayerBg from "../assets/images/playerbg.png"
import {PlayerBpm} from "../assets/data/playerbpm"
import { createData } from "../assets/data/doughnutData";
import React from 'react';
import { useLocation } from "react-router-dom";
import { Chart as ChartJS, ArcElement, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

import Messi from "../assets/images/PlayerImg/NoBG/messi.png"
import Ronaldo from "../assets/images/PlayerImg/NoBG/rona.png"
import Benzema from "../assets/images/PlayerImg/NoBG/karim.png"
import Ozil from "../assets/images/PlayerImg/NoBG/ozil.png"
import Puyol from "../assets/images/PlayerImg/NoBG/puyol.png"
import Ramos from "../assets/images/PlayerImg/NoBG/ramos.png"
import Suarez from "../assets/images/PlayerImg/NoBG/suarez.png"
import Beckham from "../assets/images/PlayerImg/NoBG/beckham.png"

ChartJS.register(
  ArcElement,  
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title 
  );
const average = array => array.reduce((a, b) => a + b) / array.length;

function generateRandom(minLimit = 0, maxLimit = 100){
  let rand = Math.random() * (maxLimit - minLimit) + minLimit;
  console.log(rand); // say 99.81321410836433
  rand = Math.floor(rand); // 99
  return rand;
}

function splitToNChunks(array, n) {
    let [...arr]  = array;
    var res = [];
    while (arr.length) {
        res.push(arr.splice(0, n));
    }
    return res;
}


function Player(){
    const location = useLocation();
    const playerImg = [Messi,Ronaldo,Benzema,Ozil,Suarez,Beckham,Ramos,Puyol];

    let firstName = 'L';
    let lastName = "Messi";
    let name = "Lionnel Messi";
    let position = "Striker";
    let gender = "Male";
    let health = "90"
    let age = "36";
    let id = 1;
    let bpm = PlayerBpm[`player${id}`];
    let xBpm = Array(bpm.length).keys();
    if ( location != null){
        const {state} = location;
        name = state["name"];
        age = state["age"];
        gender = state["gender"];
        position = state["position"];
        health = state["health"];
        id = state["playerId"];
        bpm = PlayerBpm[`player${id}`];
        xBpm = [...Array(bpm.length).keys()];

        firstName = name.split(" ")[0].charAt(0);
        lastName = name.split(" ")[1];
    }

    const healthData = [generateRandom(80, 100), generateRandom(80, 100), generateRandom(70,100)];
    const hoursData = [generateRandom(10, 100), generateRandom(200, 500), generateRandom(200, 1932)];
    const maxHoursWeek = 168;
    const maxHoursMonth = 500;
    const maxHoursYear = 2000;
    const bpmData = splitToNChunks(bpm, 3);
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Heartrate data Monitor',
            },
        },
    };
    const lineChartData = {
        labels:xBpm,
        datasets: [
            {
                label: 'Dataset',
                data: bpm,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    }

    return (
        <div className="flex flex-col">
            <NavBar />
            <div id="top-sec" className="w-full h-[45rem] flex justify-center">
                <img src={PlayerBg} className="absolute -z-10 w-full h-[45rem]"/>
                <div id="l-sec" className="w-full h-full">
                    <div id="topl-sec" className="ml-24 mt-44 mb-20">
                        <h1 className="font-normal text-weak-grey text-[5rem] h-20 flex items-center">{`${firstName}.`}</h1>
                        <h1 className="font-bold text-[8.875rem] text-[#FCFFEE] h-40 flex items-center">{`${lastName}`}</h1>
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
                    <img src={playerImg[id-1]} className="object-cover object-top w-[35rem] h-[35rem]"/>
                </div>
            </div>
            <div className="rounded-xl bg-[#424242] flex p-2 px-10 text-2xl text-[#FCFFEE] font-semibold justify-center mx-auto -mt-8">
                Play Time Average
            </div>
            <div id="data-sec" className="flex flex-col mx-auto my-24">
                <div id="day-data">
                    <div id="" className="rounded-xl bg-[#424242] flex p-0.5 w-72 text-2xl text-[#FCFFEE] font-semibold justify-center mx-auto ">
                        Daily
                    </div>
                    <Line data={lineChartData} options={options} />;
                    <div className="flex gap-12 mx-auto flex-wrap justify-center">
                       
                    </div>
                </div>
                <div id="week-data">
                    <div className="rounded-xl bg-[#424242] flex p-0.5 w-72 text-2xl text-[#FCFFEE] font-semibold justify-center mx-auto ">
                        Week
                    </div>
                    <div className="flex gap-12 mx-auto flex-wrap justify-center my-12">
                        <div className="w-80 h-80 bg-[#D5EE32] rounded-[1.25rem] p-10 flex flex-col justify-center items-center">
                            <Doughnut data={createData(average(bpmData[0])/180 * 100)} className="absolute"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 79" fill="none">
                                <path d="M52.4667 60.896C47.8163 64.3091 43.1599 66.7999 39.5 68.0162C27.9792 64.1877 6.58337 47.7293 6.58337 29.6252C6.58337 19.6266 14.6889 11.521 24.6875 11.521C30.8105 11.521 36.2237 14.5607 39.5 19.2133C42.7764 14.5607 48.1895 11.521 54.3125 11.521C64.3111 11.521 72.4167 19.6266 72.4167 29.6252C72.4167 32.4996 71.8774 35.3324 70.9238 38.08" stroke="#FF6464" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M44.4375 47.7293H51.0208L55.9583 41.146L60.8958 54.3127L65.7716 47.7293H72.4167" stroke="#FF6464" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="text-[#FCFFEE] font-semibold text-2xl mt-2">{`${Math.round(average(bpmData[0]))} BPM`}</span>
                        </div>
                        <div className="w-80 h-80 bg-[#D5EE32] rounded-[1.25rem] p-10 flex flex-col justify-center items-center">
                            <Doughnut data={createData(healthData[0])} className="absolute"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 79" fill="none">
                                <path d="M30.2422 2.46875C29.0145 2.46875 27.8371 2.95644 26.9691 3.82453C26.101 4.69261 25.6133 5.86999 25.6133 7.09766V25.6133H7.09766C5.86999 25.6133 4.69261 26.101 3.82453 26.9691C2.95644 27.8371 2.46875 29.0145 2.46875 30.2422V48.7578C2.46875 49.9855 2.95644 51.1629 3.82453 52.0309C4.69261 52.899 5.86999 53.3867 7.09766 53.3867H25.6133V71.9023C25.6133 73.13 26.101 74.3074 26.9691 75.1755C27.8371 76.0436 29.0145 76.5312 30.2422 76.5312H48.7578C49.9855 76.5312 51.1629 76.0436 52.0309 75.1755C52.899 74.3074 53.3867 73.13 53.3867 71.9023V53.3867H71.9023C73.13 53.3867 74.3074 52.899 75.1755 52.0309C76.0436 51.1629 76.5312 49.9855 76.5312 48.7578V30.2422C76.5312 29.0145 76.0436 27.8371 75.1755 26.9691C74.3074 26.101 73.13 25.6133 71.9023 25.6133H53.3867V7.09766C53.3867 5.86999 52.899 4.69261 52.0309 3.82453C51.1629 2.95644 49.9855 2.46875 48.7578 2.46875H30.2422Z" fill="#FF6464"/>
                            </svg>
                            <span className="text-[#FCFFEE] font-semibold text-2xl mt-2">{`${healthData[0]}%`}</span>
                        </div>
                        <div className="w-80 h-80 bg-[#D5EE32] rounded-[1.25rem] p-10 flex flex-col justify-center items-center">
                            <Doughnut data={createData(Math.floor(hoursData[0]/maxHoursWeek * 100))} className="absolute"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 79" fill="none">
                                <g clip-path="url(#clip0_350_186)">
                                    <path d="M39.5 6.5835C57.6799 6.5835 72.4167 21.3203 72.4167 39.5002C72.4167 57.68 57.6799 72.4168 39.5 72.4168C21.3201 72.4168 6.58333 57.68 6.58333 39.5002C6.58333 21.3203 21.3201 6.5835 39.5 6.5835ZM39.5 19.7502C38.627 19.7502 37.7897 20.097 37.1724 20.7143C36.5551 21.3316 36.2083 22.1688 36.2083 23.0418V39.5002C36.2085 40.3731 36.5554 41.2102 37.1728 41.8274L47.0478 51.7024C47.6686 52.302 48.5001 52.6338 49.3632 52.6263C50.2262 52.6188 51.0518 52.2726 51.6621 51.6623C52.2724 51.052 52.6186 50.2264 52.6261 49.3633C52.6336 48.5003 52.3018 47.6688 51.7022 47.048L42.7917 38.1374V23.0418C42.7917 22.1688 42.4449 21.3316 41.8276 20.7143C41.2103 20.097 40.373 19.7502 39.5 19.7502Z" fill="#FF6464"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_350_186">
                                        <rect width="79" height="79" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="text-[#FCFFEE] font-semibold text-2xl mt-2">{`${hoursData[0]} hours`}</span>
                        </div>
                    </div>
                </div>
                <div id="month-data">
                    <div className="rounded-xl bg-[#424242] flex p-0.5 w-72 text-2xl text-[#FCFFEE] font-semibold justify-center mx-auto ">
                        Month
                    </div>
                    <div className="flex gap-12 mx-auto flex-wrap justify-center my-12">
                        <div className="w-80 h-80 bg-[#D5EE32] rounded-[1.25rem] p-10 flex flex-col justify-center items-center">
                            <Doughnut data={createData(average(bpmData[1])/180 * 100)} className="absolute"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 79" fill="none">
                                <path d="M52.4667 60.896C47.8163 64.3091 43.1599 66.7999 39.5 68.0162C27.9792 64.1877 6.58337 47.7293 6.58337 29.6252C6.58337 19.6266 14.6889 11.521 24.6875 11.521C30.8105 11.521 36.2237 14.5607 39.5 19.2133C42.7764 14.5607 48.1895 11.521 54.3125 11.521C64.3111 11.521 72.4167 19.6266 72.4167 29.6252C72.4167 32.4996 71.8774 35.3324 70.9238 38.08" stroke="#FF6464" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M44.4375 47.7293H51.0208L55.9583 41.146L60.8958 54.3127L65.7716 47.7293H72.4167" stroke="#FF6464" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="text-[#FCFFEE] font-semibold text-2xl mt-2">{`${Math.round(average(bpmData[1]))} BPM`}</span>
                        </div>
                        <div className="w-80 h-80 bg-[#D5EE32] rounded-[1.25rem] p-10 flex flex-col justify-center items-center">
                            <Doughnut data={createData(healthData[1])} className="absolute"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 79" fill="none">
                                <path d="M30.2422 2.46875C29.0145 2.46875 27.8371 2.95644 26.9691 3.82453C26.101 4.69261 25.6133 5.86999 25.6133 7.09766V25.6133H7.09766C5.86999 25.6133 4.69261 26.101 3.82453 26.9691C2.95644 27.8371 2.46875 29.0145 2.46875 30.2422V48.7578C2.46875 49.9855 2.95644 51.1629 3.82453 52.0309C4.69261 52.899 5.86999 53.3867 7.09766 53.3867H25.6133V71.9023C25.6133 73.13 26.101 74.3074 26.9691 75.1755C27.8371 76.0436 29.0145 76.5312 30.2422 76.5312H48.7578C49.9855 76.5312 51.1629 76.0436 52.0309 75.1755C52.899 74.3074 53.3867 73.13 53.3867 71.9023V53.3867H71.9023C73.13 53.3867 74.3074 52.899 75.1755 52.0309C76.0436 51.1629 76.5312 49.9855 76.5312 48.7578V30.2422C76.5312 29.0145 76.0436 27.8371 75.1755 26.9691C74.3074 26.101 73.13 25.6133 71.9023 25.6133H53.3867V7.09766C53.3867 5.86999 52.899 4.69261 52.0309 3.82453C51.1629 2.95644 49.9855 2.46875 48.7578 2.46875H30.2422Z" fill="#FF6464"/>
                            </svg>
                            <span className="text-[#FCFFEE] font-semibold text-2xl mt-2">{`${healthData[1]}%`}</span>
                        </div>
                        <div className="w-80 h-80 bg-[#D5EE32] rounded-[1.25rem] p-10 flex flex-col justify-center items-center">
                            <Doughnut data={createData(Math.floor(hoursData[1]/maxHoursMonth * 100) )} className="absolute"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 79" fill="none">
                                <g clip-path="url(#clip0_350_186)">
                                    <path d="M39.5 6.5835C57.6799 6.5835 72.4167 21.3203 72.4167 39.5002C72.4167 57.68 57.6799 72.4168 39.5 72.4168C21.3201 72.4168 6.58333 57.68 6.58333 39.5002C6.58333 21.3203 21.3201 6.5835 39.5 6.5835ZM39.5 19.7502C38.627 19.7502 37.7897 20.097 37.1724 20.7143C36.5551 21.3316 36.2083 22.1688 36.2083 23.0418V39.5002C36.2085 40.3731 36.5554 41.2102 37.1728 41.8274L47.0478 51.7024C47.6686 52.302 48.5001 52.6338 49.3632 52.6263C50.2262 52.6188 51.0518 52.2726 51.6621 51.6623C52.2724 51.052 52.6186 50.2264 52.6261 49.3633C52.6336 48.5003 52.3018 47.6688 51.7022 47.048L42.7917 38.1374V23.0418C42.7917 22.1688 42.4449 21.3316 41.8276 20.7143C41.2103 20.097 40.373 19.7502 39.5 19.7502Z" fill="#FF6464"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_350_186">
                                        <rect width="79" height="79" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="text-[#FCFFEE] font-semibold text-2xl mt-2">{`${hoursData[1]} hours`}</span>
                        </div>
                    </div>
                </div>
                <div id="year-data">
                    <div className="rounded-xl bg-[#424242] flex p-0.5 w-72 text-2xl text-[#FCFFEE] font-semibold justify-center mx-auto ">
                        Year
                    </div>
                    <div className="flex gap-12 mx-auto flex-wrap justify-center my-12">
                        <div className="w-80 h-80 bg-[#D5EE32] rounded-[1.25rem] p-10 flex flex-col justify-center items-center">
                            <Doughnut data={createData(average(bpmData[2])/180 * 100)} className="absolute"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 79" fill="none">
                                <path d="M52.4667 60.896C47.8163 64.3091 43.1599 66.7999 39.5 68.0162C27.9792 64.1877 6.58337 47.7293 6.58337 29.6252C6.58337 19.6266 14.6889 11.521 24.6875 11.521C30.8105 11.521 36.2237 14.5607 39.5 19.2133C42.7764 14.5607 48.1895 11.521 54.3125 11.521C64.3111 11.521 72.4167 19.6266 72.4167 29.6252C72.4167 32.4996 71.8774 35.3324 70.9238 38.08" stroke="#FF6464" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M44.4375 47.7293H51.0208L55.9583 41.146L60.8958 54.3127L65.7716 47.7293H72.4167" stroke="#FF6464" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="text-[#FCFFEE] font-semibold text-2xl mt-2">{`${Math.round(average(bpmData[2]))} BPM`}</span>
                        </div>
                        <div className="w-80 h-80 bg-[#D5EE32] rounded-[1.25rem] p-10 flex flex-col justify-center items-center">
                            <Doughnut data={createData(healthData[2])} className="absolute"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 79" fill="none">
                                <path d="M30.2422 2.46875C29.0145 2.46875 27.8371 2.95644 26.9691 3.82453C26.101 4.69261 25.6133 5.86999 25.6133 7.09766V25.6133H7.09766C5.86999 25.6133 4.69261 26.101 3.82453 26.9691C2.95644 27.8371 2.46875 29.0145 2.46875 30.2422V48.7578C2.46875 49.9855 2.95644 51.1629 3.82453 52.0309C4.69261 52.899 5.86999 53.3867 7.09766 53.3867H25.6133V71.9023C25.6133 73.13 26.101 74.3074 26.9691 75.1755C27.8371 76.0436 29.0145 76.5312 30.2422 76.5312H48.7578C49.9855 76.5312 51.1629 76.0436 52.0309 75.1755C52.899 74.3074 53.3867 73.13 53.3867 71.9023V53.3867H71.9023C73.13 53.3867 74.3074 52.899 75.1755 52.0309C76.0436 51.1629 76.5312 49.9855 76.5312 48.7578V30.2422C76.5312 29.0145 76.0436 27.8371 75.1755 26.9691C74.3074 26.101 73.13 25.6133 71.9023 25.6133H53.3867V7.09766C53.3867 5.86999 52.899 4.69261 52.0309 3.82453C51.1629 2.95644 49.9855 2.46875 48.7578 2.46875H30.2422Z" fill="#FF6464"/>
                            </svg>
                            <span className="text-[#FCFFEE] font-semibold text-2xl mt-2">{`${healthData[2]}%`}</span>
                        </div>
                        <div className="w-80 h-80 bg-[#D5EE32] rounded-[1.25rem] p-10 flex flex-col justify-center items-center">
                            <Doughnut data={createData(Math.floor(hoursData[2]/maxHoursYear* 100))} className="absolute"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 79 79" fill="none">
                                <g clip-path="url(#clip0_350_186)">
                                    <path d="M39.5 6.5835C57.6799 6.5835 72.4167 21.3203 72.4167 39.5002C72.4167 57.68 57.6799 72.4168 39.5 72.4168C21.3201 72.4168 6.58333 57.68 6.58333 39.5002C6.58333 21.3203 21.3201 6.5835 39.5 6.5835ZM39.5 19.7502C38.627 19.7502 37.7897 20.097 37.1724 20.7143C36.5551 21.3316 36.2083 22.1688 36.2083 23.0418V39.5002C36.2085 40.3731 36.5554 41.2102 37.1728 41.8274L47.0478 51.7024C47.6686 52.302 48.5001 52.6338 49.3632 52.6263C50.2262 52.6188 51.0518 52.2726 51.6621 51.6623C52.2724 51.052 52.6186 50.2264 52.6261 49.3633C52.6336 48.5003 52.3018 47.6688 51.7022 47.048L42.7917 38.1374V23.0418C42.7917 22.1688 42.4449 21.3316 41.8276 20.7143C41.2103 20.097 40.373 19.7502 39.5 19.7502Z" fill="#FF6464"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_350_186">
                                        <rect width="79" height="79" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="text-[#FCFFEE] font-semibold text-2xl mt-2">{`${hoursData[2]} hours`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;