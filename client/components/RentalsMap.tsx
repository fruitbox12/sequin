import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
//import { useState, useEffect } from 'react'



function RentalsMap({ locations, google, center }: any) {

   
    return (
        <div className={``}>
            {/* change to 'center */}
            {center &&
                <Map
                    google={google}
                    containerStyle={{width: "50vw", height: "100vh"}}
                    center={center}
                    initialCenter = {locations[0]}
                    zoom={13}
                    disableDefaultUI={true}
                />
            }
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB-CwPoLD1uw6zaIy35H1eHw0qQX6zVic4",
})(RentalsMap)