import React, { useEffect } from 'react'
import "./profile.css"
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import axios from "axios"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
const Profile = () => {

    const { user, dispatch } = useContext(AuthContext);


    return (
        <div className='total'>
            <Navbar />
            <div className="container">
                <br />
                <div className="content">

                    <table className='table'>
                        <tr colspan="2" >
                            <th className='tablee'>Personal Details <br />
                                To see the updated details log in again.. <br /> <br />
                                <Link to={'/updateUser'}>
                                    <button className='button' >Edit</button>
                                </Link>
                            </th>

                            <th><img src={user.img} alt='profilephoto' className="w-[120px] h-[130px] rounded-[50%]" /><br />Profile Picture</th>
                        </tr>
                        <tr>
                            <td>User Name</td>
                            <td>{user.username}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{user.country}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{user.city}</td>
                        </tr>


                    </table>

                </div>
            </div>

            <br />





            <div className='footer'>
                <Footer />
            </div>
        </div>

    )
}

export default Profile