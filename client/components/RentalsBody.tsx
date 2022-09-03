import Bedspace from './Bedspace'
import styles from '../styles/rentalsbody.module.css'
import { lagos } from './data/locations'


// interface Props {
//     city: string,
//     unoDescription: string,
//     dosDescription: string,
//     imgUrl: string,
//     lat: string,
//     long: string,
//     name: string,
//     pricePerDay: string
// }


function RentalsBody() {

    return (
        <div className={`w-[100%] h-[85vh] flex flex-row `}>
            <div className={`w-[50%] h-[100%] py-2 px-2 flex flex-col items-start justify-start`}>
                <h3 className={`text-sm font-bold mb-3`}>Available For Your Preferred Location</h3>
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
                            />
                        )
                    })}
                </div>
            </div>
            <div className={`w-[50%] h-[100%] border-2 border-grey`}>
            </div>
        </div>
    )
}

export default RentalsBody