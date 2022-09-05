import { ConnectButton } from 'web3uikit'
import { useSelector } from 'react-redux'
import { SearchIcon } from '@heroicons/react/outline'
import styles from '../styles/navbar.module.css'


function Navbar(rentals: any) {

    const active = 'text-sm mx-7 h-[inherit] flex justify-center items-end pb-3 border-b-2 border-b-white cursor-pointer'
    const inactive = 'text-sm mx-7 h-[inherit] flex justify-center items-end pb-3 cursor-pointer hover:border-b-[1px] hover:border-b-white'

    //const locationDetails = useSelector((state: { destinationState: any }) => state.destinationState)

    //DO THIS FOR THE DATES
    // locationDetails.checkIn/checkOut.toLocaleString("default", {month: "short",})
    // locationDetails.checkIn/checkOut.toLocaleString("default", {day: "2-digit",})
    //add these to control how the month and day strings look


    return (
        <div className={`w-[93%] h-[10vh] flex justify-around items-center`}>
            <div className={`w-[20%] h-[inherit] flex justify-start items-end`}>
                {/* <img className = {`w-[70%]`} src = '/icons/airbnb.png' alt = ''/> */}
                {rentals === true ? <h1 className={`text-white text-5xl font-oswald h-[inherit] flex justify-center items-end `}>SEQUIN</h1> :
                    <h1 className={`text-black text-5xl font-oswald h-[inherit] flex justify-center items-end `}>SEQUIN</h1>}
            </div>
            {rentals === true ?
                <div className={`w-[55%] h-[inherit] text-white flex justify-center items-center text-lg `}>
                    <div className={`${active}`}>Places To Stay</div>
                    <div className={`${inactive}`}>Experiences</div>
                    <div className={`${inactive}`}>Online Experiences</div>
                </div> :
                <div className={`w-[55%] h-[inherit] flex flex-row items-center justify-around rounded-3xl ${styles.rentalsPanel}`}>
                    <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2`}>
                        <h4 className={`text-sm font-bold`}>{`Lagos`}</h4>
                    </div>
                    <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2`}>
                        <h4 className={`text-sm font-bold`}>{`Apr 01 - Apr 02`}</h4>
                    </div>
                    <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2`}>
                        <h4 className={`text-sm font-bold`}>{`2-guests`}</h4>
                    </div>
                    <div className={`w-[10%] h-full flex justify-end items-center pr-5`}>
                        {/* <Link href='/rentals'> */}
                        <div className={`rounded-full w-[2.5rem] h-[2.5rem] bg-[#EB4E5F] flex items-center justify-center cursor-pointer`}>
                            <SearchIcon className={`${styles.searchIcon}`} />
                        </div>
                        {/* </Link> */}
                    </div>
                </div>}
            <div className={`w-[25%] h-[inherit] flex justify-end items-center`}>
                <ConnectButton />
            </div>
        </div>
    )
}

export default Navbar