import React, { useEffect } from 'react'
import { useState } from 'react';
import '../css/Header.css'
import { CiShoppingCart } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';


function Header() {

    const [theme, setTheme] = useState(true);
    //const [cardTheme, setCardTheme] = useState(true);

    const navigate = useNavigate();

    const changeTheme = () => {
        const root = document.getElementById('root');
        setTheme(!theme);
        if(theme){
            root.style.backgroundColor = "gray";
            root.style.color = "white";
        }else{
            root.style.backgroundColor = "white";
            root.style.color = "black";
        }
    }

  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <div className='flex-row'>
            <img className="logo" src="./src/images/logo.png" alt="Logo" 
            onClick={()=> navigate("/")}
            />
            <p className='logo-text'>Bakkal A.Ş</p>
        </div>

        <div className='flex-row'>
            <input className='search-input' type="text" placeholder='Ara'/>
            <div>
                {!theme ? <IoSunnyOutline className='icon' onClick={changeTheme}/> : <FaMoon className='icon'  onClick={changeTheme}/>}
                
                <Badge badgeContent={4} color="secondary">
                    <CiShoppingCart style={{marginRight:"5px"}} className='icon'/>
                </Badge>
                {/* */}
            </div>
        </div>
    </div>
  )
}

export default Header