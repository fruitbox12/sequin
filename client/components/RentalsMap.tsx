// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
//import { useState, useEffect } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'



function RentalsMap({ locations, center }: any) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyB-CwPoLD1uw6zaIy35H1eHw0qQX6zVic4",
    })

    return (
        <div className={`md:w-[50vw] md:h-[100vh] md:block xs:hidden xs:w-[0px] xs:h-[0px]`}>
            {center && isLoaded &&
                // <Map
                //     google={google}
                //     containerStyle={{ width: "inherit", height: "inherit", display: "inherit" }}
                //     // containerStyle={`md:w-[50vw] md:h-[100vh] xs:w-0 xs:h-0`}
                //     center={{
                //         lat: "3.4219",
                //         long: "6.4281",
                //     }}
                //     initialCenter={locations}
                //     zoom={13}
                //     disableDefaultUI={true}
                // />
                <GoogleMap
                    center={{
                        lat: 6.4219,
                        lng: 3.4281,
                    }}
                    zoom={13}
                    mapContainerStyle={{ width: "inherit", height: "inherit", display: "inherit" }}
                >
                    <Marker position={{
                        lat: 3.4219,
                        lng: 6.4281,
                    }}/>
                </GoogleMap> 
            }
        </div>
    )
}
export default RentalsMap
//{width: "inherit", height: "inherit"}

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyB-CwPoLD1uw6zaIy35H1eHw0qQX6zVic4",
// })(RentalsMap)