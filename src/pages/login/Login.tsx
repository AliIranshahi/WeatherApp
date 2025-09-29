// import moon from '../../assets/images/Moon.png';
// import sun from '../../assets/images/Sun.png';
// import cloud from '../../assets/images/Cloud.png';
import Lang from '../../components/lang/Lang';
import LoginSection from '../../components/login_section/LoginSection';
import { useAuthContext } from '../../hooks/useAuthContext';
function Login() {
    const {state} = useAuthContext();
    return (

        <div className={`w-[100vw] h-[100vh]  ${state.color == "white" ? "bg-[#f3fafe]" : "bg-[#151d32]"} flex flex-col justify-center items-center`}>
            <div className=" w-[70%] md:w-[1190px] h-[590px]  grid grid-cols-12 icon-object shadow-lg rounded-lg overflow-hidden">
                <div className="col-span-5 hidden md:block ">
                    <div className={`w-[100%] h-[100%]  relative ${state.color == "white" ? "bg-[#D3E1E7]" : "bg-[#3e4660]"}`}>

                        <img src={'/assets/images/Moon.png'} alt="" className='absolute   bottom-10 right-10 ' />

                        <img src={'/assets/images/Sun.png'} alt="" className='absolute  bottom-30 left-[-25px] ' />


                        <img src={'/assets/images/Cloud.png'} alt="" className='absolute  right-10 top-10 ' />

                    </div>
                </div>
                <LoginSection />
            </div>
            <Lang />
        </div>

    )
}

export default Login