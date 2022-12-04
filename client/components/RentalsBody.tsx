import Bedspace from './Bedspace'
import styles from '../styles/rentalsbody.module.css'
import { lagos } from './data/locations'
import RentalsMap from './RentalsMap'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { useEffect } from 'react';
//import { useEffect, useState, useMemo } from 'react'






function RentalsBody() {
    // let coords: any[] = []
    // useEffect(()=>{
       
    // }, [])

    function getAvgCoord(coords: any){
        let arr = Object.keys(coords) ///remember, 'locations' is the array of location objects you import
        let getLat = (key: any) => coords[key]["lat"]
        let avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length
        
        let getLong = (key: any) => coords[key]["long"]
        let avgLong = arr.reduce((a, c) => a + Number(getLong(c)), 0) / arr.length
        let avgCoord
    
            return avgCoord = {lat: avgLat, long: avgLong}
    }
    

    let roomsArray = [], totalSupply: number = 0

    // const roomContract = useSelector((state: { roomContract: any }) => state.roomContract)
    const receptionistContract = useSelector((state: { receptionistContract: any }) => state.receptionistContract)

    // useEffect(()=>{
    //     // getNumberOfRooms()
    //     // if(totalSupply != 0){
    //     //     for(let i = 0; i < totalSupply; i++){
    //     //         roomsArray.push()
    //     //     }
    //     // }
    //     console.log(receptionistContract)
    // }, [])

    
    

    return (
        <div className={`w-[100vw] h-[90vh] flex flex-row justify-around`}>
            <div className={`md:w-[50%] h-[100%] py-2 px-2 flex flex-col items-start justify-start xs:w-[100vw]`}>
                <h3 className={`text-sm font-bold mb-3 ml-4`}>Available For Your Preferred Location</h3>
                <div className={`w-full min-h-[90%] h-auto flex flex-col justify-start items-start py-2 md:px-3 overflow-x-hidden overflow-y-scroll xs:px-0 ${styles.rentalsbody}`}>
                    {lagos.map(({ city, unoDescription, dosDescription, imgUrl, lat, long, name, pricePerDay, index}) => {
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
                                index = {index}
                                key={Math.floor(Math.random() * 10000)}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={`md:w-[50%] md:h-[100%] xs:w-0 xs:h-0`}>
                <RentalsMap location={lagos} center = {getAvgCoord(lagos)} />
                {/* <RentalsMap location={coords} center = {coords[Math.floor(Math.random() * coords.length)]} /> */}
            </div>
            {/* <button className = {`bg-black`} onClick = {getNumberOfRooms}>Test</button> */}
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
