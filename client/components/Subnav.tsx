import { SearchIcon } from '@heroicons/react/outline'
import styles from '../styles/subnav.module.css'
// import {Select} from 'web3uikit'
import { useMoralis } from 'react-moralis'
import { useState } from 'react'
import { setRevalidateHeaders } from 'next/dist/server/send-payload';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { pushDestination } from './reducers/actions';





function Subnav() {

    const { enableWeb3 } = useMoralis();

    const dispatch = useDispatch()

    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [destination, setDestination] = useState('New York')
    const [guests, setGuests] = useState('')

    function handleDestination(){
        dispatch(pushDestination({
            checkIn,
            checkOut,
            destination,
            guests
        }))
    }

    return (
        <div className={`w-[60rem] h-[10%] border-2 bg-[#ffffff] border-white rounded-3xl flex flex-row items-center justify-center`}>
            <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2 `}>
                <h4 className={`text-sm font-bold`}>Location</h4>
                <input list='cities' className={`text-xs h-[1.5rem] w-[90%] outline-none cursor-pointer`} placeholder='Lagos' onChange={(e) => setDestination(e.target.value)} />
                <datalist id='cities'>
                    <option value='Lagos'>Lagos</option>
                    <option value='New York' >New York</option>
                    <option value='Tokyo'>Tokyo</option>
                    <option value='Nairobi'>Nairobi</option>
                    <option value='London'>London</option>
                    <option value='Berlin'>Berlin</option>
                    <option value='Moscow'>Moscow</option>
                </datalist>
            </div>
            <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2`}>
                <h4 className={`text-sm font-bold`}>Check-In</h4>
                <input type='date' className={`text-xs cursor-pointer outline-none`} onChange={(e) => setCheckIn(e.target.value)} />
            </div>
            <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2`}>
                <h4 className={`text-sm font-bold`}>Check-Out</h4>
                <input type='date' className={`text-xs cursor-pointer outline-none`} onChange={(e) => setCheckOut(e.target.value)} />
            </div>
            <div className={`w-[23%] h-full flex flex-col items-start justify-center pl-2`}>
                <h4 className={`text-sm font-bold`}>Guests</h4>
                <input type='number' className={`text-sm outline-none border-0 cursor-pointer`} onChange={(e) => {setGuests(e.target.value)}} />
            </div>
            <div className={`w-[10%] h-full flex justify-end items-center pr-5`}>
                <Link href='/rentals'>
                    <div className={`rounded-full w-[2.5rem] h-[2.5rem] bg-[#EB4E5F] flex items-center justify-center cursor-pointer`}>
                        <SearchIcon className={`${styles.searchIcon}`} onClick = {handleDestination} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Subnav