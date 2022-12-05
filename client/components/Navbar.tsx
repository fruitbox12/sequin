import { ethers } from 'ethers';
import { SearchIcon } from '@heroicons/react/outline'
import styles from '../styles/navbar.module.css'
import { useEffect, useState } from 'react';
import { saveReceptionistContract, saveRoomContract, saveAccount } from './reducers/actions';
import { useDispatch } from 'react-redux';
import { receptionistAddress } from '../src/receptionistAddress'
import { roomAddress } from '../src/roomAddress'
import receptionistABI from "../artifacts/contracts/Receptionist.sol/Receptionist.json"
import roomABI from "../artifacts/contracts/Rooms.sol/Rooms.json"

function Navbar({ rentals }: any) {

    const dispatch = useDispatch()

    const [connectSwitch, setconnectSwitch] = useState(false)
    const [account, setAccount] = useState("")
    // const [network, setNetwork] = useState("")


    const active = 'xl:text-sm mx-7 h-[inherit] flex justify-center items-end pb-3 border-b-2 border-b-white cursor-pointer xs:text-[0]'
    const inactive = 'xl:text-sm mx-7 h-[inherit] flex justify-center items-end pb-3 cursor-pointer hover:border-b-[1px] hover:border-b-white xs:text-[0]'


    useEffect(() => {
        let Window: any = window
        if (connectSwitch && Window.ethereum !== undefined) {

            let provider = Window.ethereum
            let ethersProvider = new ethers.providers.Web3Provider(provider);

            Window.ethereum.request({ method: "eth_requestAccounts" })
                .then((accounts: any) => {
                    setAccount(accounts[0])
                    dispatch(saveAccount(accounts[0]))
                    console.log(accounts[0])
                })
                .catch((err: any) => console.log(err))

            let signer = ethersProvider.getSigner()

            const receptionist: any = new ethers.Contract(receptionistAddress, receptionistABI.abi, signer)
            const rooms: any = new ethers.Contract(roomAddress, roomABI.abi, signer)


            if (receptionist) {
                dispatch(saveReceptionistContract(receptionist))
                dispatch(saveRoomContract(receptionist))
            }

        } else if (connectSwitch && Window.ethereum == undefined) {
            alert("Please Download Metamask")
        }
        setconnectSwitch(false)
    }, [connectSwitch])



    function connectMetamask() {
        setconnectSwitch(true)
    }

    //const locationDetails = useSelector((state: { destinationState: any }) => state.destinationState)

    //DO THIS FOR THE DATES
    // locationDetails.checkIn/checkOut.toLocaleString("default", {month: "short",})
    // locationDetails.checkIn/checkOut.toLocaleString("default", {day: "2-digit",})
    //add these to control how the month and day strings look


    return (
        <div className={`w-[95%] lg:h-[60px] flex xl:justify-around items-center xs:h-[50px] xs:justify-between`}>
            <div className={`w-[20%] h-[inherit] flex justify-start md:items-end xs:items-center`}>
                <img className={`lg:w-[3rem] mx-2 rounded-full xs:w-[2rem]`} src='/icons/logo.png' alt='' />
                {rentals === true ? <h1 className={`text-black lg:text-5xl font-oswald h-[inherit] flex justify-center md:items-end md:text-2xl xs:text-lg xs:items-center`}>SEQUIN</h1> :
                    <h1 className={`text-white lg:text-5xl font-oswald h-[inherit] flex justify-center md:items-end md:text-2xl xs:text-lg xs:items-center`}>SEQUIN</h1>}
            </div>
            {rentals === true ?
                <div className={`xl:w-[55%] h-[inherit] flex flex-row items-center justify-around rounded-3xl xs:w-0 ${styles.rentalsPanel}`}>
                    <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2`}>
                        <h4 className={`xl:text-sm font-bold xs:text-[0rem]`}>{`Lagos`}</h4>
                    </div>
                    <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2`}>
                        <h4 className={`xl:text-sm font-bold xs:text-[0rem]`}>{`Apr 01 - Apr 02`}</h4>
                    </div>
                    <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2`}>
                        <h4 className={`xl:text-sm font-bold xs:text-[0rem]`}>{`2-guests`}</h4>
                    </div>
                    <div className={`w-[10%] h-full flex justify-end items-center pr-5`}>
                        {/* <Link href='/rentals'> */}
                        <div className={`rounded-full w-[2.5rem] h-[2.5rem] bg-[#EB4E5F] flex items-center justify-center cursor-pointer`}>
                            <SearchIcon className={`${styles.searchIcon}`} />
                        </div>
                        {/* </Link> */}
                    </div>
                </div> :
                <div className={`lg:w-[55%] h-[inherit] text-white flex justify-center items-center text-lg xs:w-0`}>
                    <div className={`${active}`}>Places To Stay</div>
                    <div className={`${inactive}`}>Experiences</div>
                    <div className={`${inactive}`}>Online Experiences</div>
                </div>
            }
            {account !== "" ?
                <div className={`md:w-[25%] h-[inherit] flex justify-end items-center xs:w-50%`}>
                    {/* <ConnectButton /> */}
                    <button className={`w-[12rem] md:h-[45px] bg-[#1266e4] rounded-lg text-white lg:text-base xs:text-sm xs:w-[10rem] xs:h-[35px] transition ease-in`}>{`${account.slice(0, 6)}...${account.slice(38, 42)}`}</button>
                </div> :
                <div className={`md:w-[25%] h-[inherit] flex justify-end items-center xs:w-50%`}>
                    <button className={`w-[12rem] md:h-[45px] bg-[#1266e4] rounded-lg text-white lg:text-base xs:text-sm xs:w-[10rem] xs:h-[35px]`} onClick={connectMetamask}>Connect Wallet</button>
                </div>
            }
        </div>
    )
}

export default Navbar