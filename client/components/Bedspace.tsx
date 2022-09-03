// {[
//     {
//       path: 'https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/2'
//     },
//     {
//       path: 'https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/0'
//     },
//     {
//       path: 'https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/1'
//     },
//     {
//       path: 'https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3'
//     },
//     {
//       path: 'https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/4'
//     },
//     {
//       path: 'https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/7'
//     },
//     {
//       path: 'https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/5'
//     },
//     {
//       path: 'https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/6'
//     }
//   ]}



//   [
//     {
//         city: "New York",
//         unoDescription: "3 Guests • 2 Beds • 2 Rooms",
//         dosDescription: "Wifi • Kitchen • Living Area",
//         imgUrl:
//           "https://ipfs.moralis.io:2053/ipfs/QmS3gdXVcjM72JSGH82ZEvu4D7nS6sYhbi5YyCw8u8z4pE/media/3",
//         lat: "40.716862",
//         long: "-73.999005",
//         name: "Apartment in China Town",
//         pricePerDay: "3",
//       },
//   ];

import { Button } from "web3uikit"
import styles from '../styles/bedspace.module.css'

interface Props{
  city: string,
  unoDescription: string,
  dosDescription: string,
  imgUrl: string,
  lat: string,
  long: string,
  name : string,
  pricePerDay: string
}

function Bedspace({city, unoDescription, dosDescription, imgUrl, lat, long, name, pricePerDay}: Props) {

  

  // const city = city
  // const lat = lat
  // cosnt long = long

  return (
    <div className={`max-w-[85%] w-[50rem] min-h-[11rem] h-[11rem] rounded-xl flex flex-row my-5 border-[1px] border-grey ${styles.bedspace}`}>
      <div className={`w-[45%] h-full border-2 border-grey flex justify-center align-center rounded-xl`}>
        <img className={`w-full h-auto rounded-xl`} alt='' src={imgUrl} />
      </div>
      <div className={`w-[55%] h-full flex flex-col`}>
        <div className={`w-full h-[60%] flex flex-col items-start justify-around pl-3`}>
          <h1 className={`text-xl font-bold`}>{name}</h1>
          <div className={`w-full h-1/2 flex flex-col justify-center items-start`}>
            <p className={`text-xs`}>{unoDescription}</p>
            <p className={`text-xs`}>{dosDescription}</p>
          </div>
        </div>
        <div className={`w-full h-[40%] flex flex-row items-end justify-between px-3 py-2`}>
          <button className = {`bg-[#576b95] w-[7rem] h-[1.5rem] rounded-md text-white text-sm`}>Stay Here</button>
          <h5 className = {`text-xs font-bold`}>{pricePerDay} Matic/Day</h5>
        </div>
      </div>
    </div>
  )
}

export default Bedspace