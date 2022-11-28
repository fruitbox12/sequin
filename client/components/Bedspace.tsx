//import { Button } from "web3uikit"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/bedspace.module.css'
import { ethers, Contract } from 'ethers';
import { receptionistAddress } from '../../server/src/receptionistAddress'
import { roomAddress } from '../../server/src/roomAddress'
import receptionistABI from "../../server/artifacts/contracts/Receptionist.sol/Receptionist.json"
import roomABI from "../../server/artifacts/contracts/Rooms.sol/Rooms.json"
import { Rooms } from '../../server/typechain-types/contracts/Rooms'
import { Receptionist } from '../../server/typechain-types/contracts/Receptionist'

interface Props {
  city: string,
  unoDescription: string,
  dosDescription: string,
  imgUrl: string,
  lat: string,
  long: string,
  name: string,
  pricePerDay: string
}

function Bedspace({ city, unoDescription, dosDescription, imgUrl, lat, long, name, pricePerDay }: Props) {

  // const [receptionistContract, setReceptionistContract] = useState<Receptionist | undefined>()
  // const [roomsContract, setRoomsContract] = useState(null)
  // // const [supplySwitch, setSupplySwitch] = useState(false)

  // const receptionist = useSelector((state: any) => {
  //   state.receptionistContract
  // })

  // let _roomsContract

  // useEffect(() => {
  //   let Window: any = window

  //   if (Window.ethereum !== undefined) {
  //     let provider = Window.ethereum
  //     let ethersProvider = new ethers.providers.Web3Provider(provider);
  //     let signer = ethersProvider.getSigner()
  //     const receptionist: any = new ethers.Contract(receptionistAddress, receptionistABI.abi, signer)
  //     const rooms: any = new ethers.Contract(roomAddress, roomABI.abi, signer)

  //     if (receptionist && rooms) {
  //       setReceptionistContract(receptionist)
  //       setRoomsContract(rooms)
  //     }
  //   }
  // }, [])

  // useEffect(()=>{

  // }, [supplySwitch])

  // async function totalSupply() {

  //   let totalSupply = await roomsContract.totalSupply()
  //   console.log(totalSupply.toString())

  // }

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
          <button className={`bg-[#576b95] w-[7rem] h-[1.5rem] rounded-md text-white text-sm`}>Stay Here</button>
          <h5 className={`text-xs font-bold`}>{pricePerDay} ETH/Day</h5>
        </div>
      </div>
    </div>
  )
}

export default Bedspace