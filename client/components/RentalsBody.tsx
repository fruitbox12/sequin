import Bedspace from './Bedspace'
import styles from '../styles/rentalsbody.module.css'
import { lagos } from './data/locations'
import RentalsMap from './RentalsMap'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
//import { useEffect, useState, useMemo } from 'react'



let coords: any[] = []
lagos.forEach((e) => {
    coords.push({ lat: e.lat, long: e.long })
})



function RentalsBody() {

    let roomsArray = [], totalSupply: number = 0

    const roomContract = useSelector((state: { roomContract: any }) => state.roomContract)

    useEffect(()=>{
        getNumberOfRooms()
        if(totalSupply != 0){
            for(let i = 0; i < totalSupply; i++){
                roomsArray.push()
            }
        }
    }, [])

    async function getNumberOfRooms(){
        totalSupply = await roomContract.totalSupply()
    }
    

    return (
        <div className={`w-[100%] h-[85vh] flex flex-row `}>
            <div className={`w-[50%] h-[100%] py-2 px-2 flex flex-col items-start justify-start`}>
                <h3 className={`text-sm font-bold mb-3 ml-4`}>Available For Your Preferred Location</h3>
                <div className={`w-full min-h-[90%] h-auto flex flex-col justify-start items-start py-2 px-3 overflow-x-hidden overflow-y-scroll ${styles.rentalsbody}`}>
                    {lagos.map(({ city, unoDescription, dosDescription, imgUrl, lat, long, name, pricePerDay }) => {
                        return (
                            <Bedspace
                                city={city}
                                unoDescription={unoDescription}
                                dosDescription={dosDescription}
                                imgUrl={imgUrl}
                                lat={lat}
                                long={long}
                                name={name}
                                pricePerDay={pricePerDay}
                                key={Math.floor(Math.random() * 10000)}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={`w-[50%] h-[100%] border-2 border-grey`}>
                <RentalsMap location={coords} center = {coords[Math.floor(Math.random() * coords.length)]} />
            </div>
        </div>
    )
}

export default RentalsBody;


// function getAvgCoord(){
    //     let arr = Object.keys(coords) ///remember, 'locations' is the array of location objects you import
    //     let getLat = (key: any) => coords[key]["lat"]
    //     avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length
    
    //     let getLong = (key: any) => coords[key]["long"]
    //     avgLong = arr.reduce((a, c) => a + Number(getLong(c)), 0) / arr.length

    //     return avgCoord = {lat: avgLat, long: avgLong}
    // }
