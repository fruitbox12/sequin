import {ConnectButton} from 'web3uikit'





function Navbar(){

    const active = 'text-sm mx-7 h-[inherit] flex justify-center items-end pb-3 border-b-2 border-b-white cursor-pointer'
    const inactive = 'text-sm mx-7 h-[inherit] flex justify-center items-end pb-3 cursor-pointer'


    return(
        <div className = {`w-[93%] h-[10vh] flex justify-around items-center`}>
            <div className = {`w-[20%] flex justify-start items-end`}>
                <img className = {`w-[70%]`} src = '/icons/airbnb.png' alt = ''/>
            </div>
            <div className = {`w-[55%] h-[inherit] text-white flex justify-center items-center text-lg `}>
                <div className={`${active}`}>Places To Stay</div>
                <div className={`${inactive}`}>Experiences</div>
                <div className={`${inactive}`}>Online Experiences</div>
            </div>
            <div className = {`w-[25%] h-[inherit] flex justify-end items-center`}>
                <ConnectButton/>
            </div>
        </div>
    )
}

export default Navbar