import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
//import { useState, useEffect } from 'react'



function RentalsMap({ locations, google, center }: any) {

   
    return (
        <div className = {`md:w-[50vw] md:h-[100vh] md:block xs:hidden xs:w-[0px] xs:h-[0px]`}>
            {center &&
                <Map
                    google={google}
                    containerStyle={{width: "inherit", height: "inherit", display: "inherit"}}
                    // containerStyle={`md:w-[50vw] md:h-[100vh] xs:w-0 xs:h-0`}
                    center={center}
                    initialCenter = {center[0]}
                    zoom={13}
                    disableDefaultUI={true}
                />
            }
        </div>
    )
}

//{width: "inherit", height: "inherit"}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB-CwPoLD1uw6zaIy35H1eHw0qQX6zVic4",
})(RentalsMap)