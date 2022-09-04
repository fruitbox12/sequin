import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { useState, useEffect } from 'react'



function RentalsMap({locations, google}: any){

    //import parameters, locations and google

    

        const [center, setCenter] = useState({})


        useEffect(()=>{
            let arr = Object.keys(locations) ///remember, 'locations' is the array of location objects you import
            let getLat = (key: any) => locations[key]["lat"]
            let avgLat = arr.reduce((a, c) => a + Number(getLat(c)), 0) / arr.length

            let getLong = (key: any) => locations[key]["long"]
            let avgLong = arr.reduce((a, c) => a + Number(getLong(c)), 0) /arr.length

            setCenter({lat: avgLat, long: avgLong})
        }, [locations])
   


    return(
        <div className = {``}>
            {/* change to 'center */}
            {true &&
            <Map
            google = {google}
            containerStyle = {`w-[100%] h-[calc(100vh - 135px)]`}
            center = {center} 
            zoom = {13}
            disableDefaultUI = {true}
            />
            }
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: '',
}) (RentalsMap)