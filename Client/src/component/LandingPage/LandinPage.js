import React from 'react'
import "./LandingPage.css"
import Logo from "../Images/Explore.jpg"
import logOutLogo from "../Images/carbon_power.svg"
import { Link } from 'react-router-dom'
import { mock } from '../mockdata/mockdata.js'


const LandinPage = () => {

    console.log(mock);
    return (
       <>
       <div className='NavBarConatiner'>
                <img className='Logo' src={Logo} />
                <div className='UserName_block'>
                    <div className='User_image_Block'>
                        <img src={logOutLogo} className='user_Image'></img></div>
                    <p className='UserName'>User</p>
                    <button className='Btn-signin-landing'><img src={logOutLogo}></img></button></div>

            </div>
            <div className='Main_Container'>
            <div className='row row-cols-1 row-cols-md-3 g-4' id='cards'>  {
                      mock.length > 0 && mock.map((obj) =>
                    (
                        <div className='col'> 
                        <div className='card h-100'>
                        <img src={obj.img} className="card-img-top" alt='img'></img>
                        <div className='card-body'>
                           <p className='Card_username'>{obj.username}</p> <p className='Tags'>{obj.tags}</p><h3 className='card-title'>{obj.name}</h3>
                            <p className='card-text'>{obj.discripition}</p></div>
                            
                        </div>
                        </div>
                       
                    ))
                }
                </div>
                <div><div className='Search_block'>
                    <input type="text" placeholder='  Search *'  className=""required={true}></input>
                    <input type="text" placeholder='  Search Tag *' className=""required={true}></input>
                    <div className='d-grid gap-2'><button  className="btn_searchs">SEARCH</button></div>
                    
                </div>
                <div className='Upload_Block'>
                    <div className='Upload_Header'>Create a Explore</div>
                    <input type="text" placeholder='  Title *'  classname="Upload_Title"required={true}></input>
                    <input type="text" placeholder='  Message *' className='Message_Text' required={true}></input>
                    <input type="text" placeholder='  Tags *' required={true}></input>
                    <input type="file"  required={true}></input>
                    <button className='btn btn-primary'>SUBMIT</button>
                    <button>CLEAR</button>
                </div></div>
                
                     </div></>
        
            
    )
}

export default LandinPage