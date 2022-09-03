import Subnav from "./Subnav"
import Intro from "./Intro"





function Mainbody(){

    return(
        <div className = {`w-full h-[85vh] flex flex-col justify-around items-center`}>
           <Subnav/>
           <Intro/>
           
        </div>
    )
}

export default Mainbody