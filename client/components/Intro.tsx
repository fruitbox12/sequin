import Link from "next/link"

function Intro() {

    return (
        <div className={`w-[100%] h-[85%] flex justify-start items-center md:pl-10 xs:pl-5`}>
            <div className={`md:w-[30rem] md:h-[25rem] flex flex-col justify-center items-start md:pl-3 xs:w-[100vw] xs:h-[auto]`}>
                <h1 className={`md:text-6xl font-extrabold text-white mb-4 xs:text-5xl`}>Welcome!</h1>
                <h1 className={`md:text-3xl font-bold text-white mb-4 xs:text-xl`}>Are You Feeling Adventurous?</h1>
                <p className={`text-sm text-white mb-4 font-light`}>Let us decide and discover new places to stay, live, work or just relax</p>
                <Link href='/rentals'>
                    <button className={`md:w-[15rem] h-[2.5rem] text-[#3578e5] text-sm font-extrabold bg-white rounded-xl xs:w-[12rem]`}>Explore A Location!</button>
                </Link>
            </div>
        </div>
    )
}

export default Intro