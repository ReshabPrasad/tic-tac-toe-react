import { FaCircle } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { TbHandFinger } from "react-icons/tb";
import './Icon.css'


function Icon({type}){
    if(type=="circle"){
        return (
            <div className="icon">
                <FaCircle />
            </div>
        )
    }
    else if(type=="cross"){
        return (
            <div className="icon">
                <ImCross/>
            </div>
        )
    }
    else{
    return (
        <div className="icon">
            <TbHandFinger/> 
        </div>
    )
}
}

export default Icon;