import { NavLink } from "react-router-dom";

function Center(){
    return <div className="flex justify-center mt-10 text-center">
        <div>
            <h1 className="text-red-600 font-semibold text-2xl">Welcome to Som hospital</h1>
            <h1 className="font-semibold text-3xl text-green-500">A Great Place to receive Care</h1>
            <h1 className="w-[700px]">At Shaafi Hospital, we are committed to providing exceptional healthcare services to our community. With a dedicated team of highly skilled medical professionals, state-of-the-art facilities, and a patient-centered approach, we strive to deliver comprehensive and compassionate care to every individual who walks through our doors.</h1>
 <NavLink to="/about"   className="text-green-500 font-semibold" > Learn More <i className="text-red-500 pl-3 fa-solid fa-arrow-right"></i></NavLink>     
    </div>
    </div>
}
export default Center;