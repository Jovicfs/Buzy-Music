import { useState,useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";
import { CiStreamOn } from "react-icons/ci";
import './menu.css'
export default function Menu(){
  const dropDownRef = useRef(null)
  const [isActive,setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)
    return(
        <div className="container">
            <button type="button" className="Button-Menu"
            onClick={onClick}>
                <IoMenu/> 
            </button>
            <nav ref= {dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                <ul className="list">
                    <li ref={dropDownRef} className={`menuCard ${isActive ? "active" : "inactive"}`} ><a href="#">
                        <MdHomeFilled className={`icons ${isActive ? "active" : "inactive"}`}/>
                       <span>Home</span>
                        </a></li>
                    <li ref={dropDownRef} className={`menuCard ${isActive ? "active" : "inactive"}`}><a href="#">
                        <FaCompass className={`icons ${isActive ? "active" : "inactive"}`} />
                      <span>Explorar</span>
                        </a></li>
                    <li ref={dropDownRef} className={`menuCard ${isActive ? "active" : "inactive"}`}><a href="#">
                    <BsMusicNoteList className={`icons ${isActive ? "active" : "inactive"}`}/>
                        <span>Biblioteca</span>
                        </a></li>
                    <li ref={dropDownRef} className={`menuCard ${isActive ? "active" : "inactive"}`}><a href="#">
                    <CiStreamOn className={`icons ${isActive ? "active" : "inactive"}`}/>
                        <span>Stream</span>
                        </a></li>
                    </ul>
            </nav>
        </div>
        
    )
}