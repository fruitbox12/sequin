//import { Button } from "web3uikit"
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