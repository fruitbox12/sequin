//import { Button } from "web3uikit"
import { ethers } from 'ethers'
import { useSelector } from 'react-redux'
import styles from '../styles/bedspace.module.css'
import { receptionistAddress } from '../src/receptionistAddress'



interface Props {
  city: string,
  unoDescription: string,
  dosDescription: string,
  imgUrl: string,
  lat: string,
  long: string,
  name: string,
  pricePerDay: string,
  index: number
}

function Bedspace({ city, unoDescription, dosDescription, imgUrl, lat, long, name, pricePerDay, index }: Props) {

  const receptionistContract = useSelector((state: { receptionistContract: any }) => state.receptionistContract)
  const account = useSelector((state: { account: any }) => state.account)

  function etherToWei(_etherAmount: any) {
    return ethers.utils.parseUnits(_etherAmount, "ether")
  }

  async function rent() {
    if (account) {
      let rentReceipt = await receptionistContract.rent(receptionistAddress, account, index)
      let payReceipt = await receptionistContract.pay("0xC3886B1637C7a7F263C6533a59976014883D615d", { value: etherToWei(pricePerDay)  })
      console.log(rentReceipt.toString())
      console.log(payReceipt.toString())
    } else {
      alert("Connect to metamask!")
    }
  }


  return (


    <div className={`md:max-w-[98%] md:w-[50rem] md:min-h-[11rem] md:h-[11rem] rounded-xl flex flex-row my-5 border-[1px] border-grey xs:max-w-[100%] xs:w-[100%] xs:min-h-[11rem] xs:h-[11rem] ${styles.bedspace}`}>
      <div className={`w-[45%] h-full border-2 border-grey flex justify-center align-center rounded-xl`}>
        <img className={`w-full h-auto rounded-xl`} alt='' src={imgUrl} />
      </div>
      <div className={`w-[55%] h-full flex flex-col`}>
        <div className={`w-full h-[60%] flex flex-col items-start justify-around pl-3`}>
          <h1 className={`text-xl font-bold`}>{name}</h1>
          <div className={`w-full h-1/2 flex flex-col justify-center items-start`}>
            <p className={`md:text-xs xs:text-sm`}>{unoDescription}</p>
            <p className={`md:text-xs xs:text-sm`}>{dosDescription}</p>
          </div>
        </div>
        <div className={`w-full h-[40%] flex flex-row items-center justify-between px-3 py-2`}>
          <button className={`bg-[#1266e4] md:w-[7rem] h-[1.5rem] rounded-md text-white text-sm xs:w-[5rem]`} onClick={rent}>Stay Here</button>
          <h5 className={`text-xs font-bold`}>{pricePerDay} ETH/Day</h5>
        </div>
      </div>
    </div>
  )
}

export default Bedspace