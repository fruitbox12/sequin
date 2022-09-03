





function Intro(){

    return(
        <div className = {`w-[100%] h-[85%] flex justify-start items-center pl-10`}>
            <div className={`w-[30rem] h-[25rem] flex flex-col justify-center items-start pl-3`}>
                <h1 className = {`text-5xl font-extrabold text-white mb-4`}>Feel Adventurous?</h1>
                <p className = {`text-base text-white mb-4 font-bold`}>Let us decide and discover new places to stay, live, work or just relax</p>
                <button className = {`w-[15rem] h-[2.5rem] text-[#3578e5] text-sm font-extrabold bg-white rounded-xl`}>Explore A Location!</button>
            </div>
        </div>
    )
}

export default Intro