import Messi from '../assets/images/PlayerImg/Portrait/messi.jpg'

export default function PlayerCard({name, gender, age, bpm, health, playtime, image, visibility}) {
    const cardStyle = {
        "width": "34.9375rem",
        "height": "14.75rem",
        "flex-shrink": "0",
        "border-radius": "2.8125rem",
        "background": "linear-gradient(180deg, #D5EE32 0%, rgba(136, 169, 40, 0.50) 100%)"
    }
    return (
        <div className={`visible p-[2.4rem] flex flex-col gap-3 justify-center`} style={cardStyle}>
            <div id="top-sec" className="w-full flex">
                <div className="w-32 h-32 shadow-2xl rounded-2xl">
                    <img src={Messi} className="object-cover object-top w-full h-full rounded-2xl"/>
                </div>
                <div className="ms-4">
                    <h1 className="text-[2.25rem] font-semibold my-0.5">{`${name}`}</h1>
                    <h2>{`Gender: ${gender}`} <span className="ms-4">{`Age: ${age}`}</span></h2>
                </div>
                <button className="flex justify-end items-start mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <g clip-path="url(#clip0_242_77)">
                            <path d="M16.5 2.75C24.0941 2.75 30.25 8.90588 30.25 16.5C30.25 24.0941 24.0941 30.25 16.5 30.25C8.90588 30.25 2.75 24.0941 2.75 16.5C2.75 8.90588 8.90588 2.75 16.5 2.75ZM16.4862 13.75H15.125C14.7745 13.7504 14.4375 13.8846 14.1826 14.1252C13.9278 14.3657 13.7744 14.6946 13.7539 15.0444C13.7333 15.3943 13.8472 15.7388 14.0721 16.0075C14.2971 16.2763 14.6161 16.449 14.9641 16.4904L15.125 16.5V23.3612C15.125 24.0763 15.6667 24.6675 16.3625 24.7417L16.5138 24.75H17.1875C17.4767 24.75 17.7585 24.6588 17.9929 24.4895C18.2273 24.3201 18.4023 24.0811 18.4931 23.8066C18.5838 23.532 18.5857 23.2358 18.4984 22.9601C18.4112 22.6844 18.2392 22.4432 18.007 22.2709L17.875 22.1843V15.1388C17.875 14.4237 17.3333 13.8325 16.6375 13.7582L16.4862 13.75ZM16.5 9.625C16.1353 9.625 15.7856 9.76987 15.5277 10.0277C15.2699 10.2856 15.125 10.6353 15.125 11C15.125 11.3647 15.2699 11.7144 15.5277 11.9723C15.7856 12.2301 16.1353 12.375 16.5 12.375C16.8647 12.375 17.2144 12.2301 17.4723 11.9723C17.7301 11.7144 17.875 11.3647 17.875 11C17.875 10.6353 17.7301 10.2856 17.4723 10.0277C17.2144 9.76987 16.8647 9.625 16.5 9.625Z" fill="#FCFFEE"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_242_77">
                            <rect width="33" height="33" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <div id="bot-sec" className="flex gap-4">
                <div className='bg-[#FCFFEE] rounded-full p-2 px-4 flex items-center gap-2 w-36'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 34 34" fill="none">
                        <path d="M22.5806 26.2085C20.5792 27.6774 18.5752 28.7494 17 29.2729C12.0417 27.6252 2.83337 20.5418 2.83337 12.7502C2.83337 8.44697 6.32182 4.9585 10.625 4.9585C13.2603 4.9585 15.59 6.26672 17 8.2691C18.4101 6.26672 20.7398 4.9585 23.375 4.9585C27.6782 4.9585 31.1667 8.44697 31.1667 12.7502C31.1667 13.9873 30.9346 15.2065 30.5242 16.3889" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.125 20.5418H21.9583L24.0833 17.7085L26.2083 23.3752L28.3068 20.5418H31.1667" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className='font-semibold'>{`${bpm} bpm`}</span>
                </div>
                <div className='bg-[#FCFFEE] rounded-full p-2 px-4 flex items-center gap-2 w-36'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 34 34" fill="none">
                        <path d="M13.0156 1.0625C12.4873 1.0625 11.9805 1.27239 11.6069 1.646C11.2333 2.01961 11.0234 2.52633 11.0234 3.05469V11.0234H3.05469C2.52633 11.0234 2.01961 11.2333 1.646 11.6069C1.27239 11.9805 1.0625 12.4873 1.0625 13.0156V20.9844C1.0625 21.5127 1.27239 22.0195 1.646 22.3931C2.01961 22.7667 2.52633 22.9766 3.05469 22.9766H11.0234V30.9453C11.0234 31.4737 11.2333 31.9804 11.6069 32.354C11.9805 32.7276 12.4873 32.9375 13.0156 32.9375H20.9844C21.5127 32.9375 22.0195 32.7276 22.3931 32.354C22.7667 31.9804 22.9766 31.4737 22.9766 30.9453V22.9766H30.9453C31.4737 22.9766 31.9804 22.7667 32.354 22.3931C32.7276 22.0195 32.9375 21.5127 32.9375 20.9844V13.0156C32.9375 12.4873 32.7276 11.9805 32.354 11.6069C31.9804 11.2333 31.4737 11.0234 30.9453 11.0234H22.9766V3.05469C22.9766 2.52633 22.7667 2.01961 22.3931 1.646C22.0195 1.27239 21.5127 1.0625 20.9844 1.0625H13.0156Z" fill="black"/>
                    </svg> 
                    <span className='font-semibold ms-4'>{`${health}%`}</span>
                </div>
                <div className='bg-[#FCFFEE] rounded-full p-2 px-4 flex items-center gap-2 w-36'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 34 34" fill="none">
                        <g clip-path="url(#clip0_242_82)">
                            <path d="M17 2.8335C24.8242 2.8335 31.1666 9.17591 31.1666 17.0002C31.1666 24.8244 24.8242 31.1668 17 31.1668C9.17573 31.1668 2.83331 24.8244 2.83331 17.0002C2.83331 9.17591 9.17573 2.8335 17 2.8335ZM17 8.50016C16.6243 8.50016 16.2639 8.64942 15.9982 8.9151C15.7326 9.18077 15.5833 9.54111 15.5833 9.91683V17.0002C15.5834 17.3759 15.7327 17.7361 15.9984 18.0017L20.2484 22.2517C20.5156 22.5098 20.8734 22.6526 21.2449 22.6494C21.6163 22.6461 21.9716 22.4972 22.2343 22.2345C22.497 21.9718 22.646 21.6165 22.6492 21.2451C22.6524 20.8736 22.5096 20.5158 22.2516 20.2486L18.4166 16.4137V9.91683C18.4166 9.54111 18.2674 9.18077 18.0017 8.9151C17.736 8.64942 17.3757 8.50016 17 8.50016Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_242_82">
                            <rect width="34" height="34" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg> 
                    <span className='font-semibold'>{`${bpm} hours`}</span>
                </div>
            </div>
            
        </div>
    )
}