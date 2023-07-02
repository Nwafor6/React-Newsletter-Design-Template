import React, { useState } from "react";
import Capture2 from "../assets/images/Capture2.png"
import Success from "./success";

const Newletter= ()=>{
    let  [userEmail, setUserEmail]= useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email= document.querySelector("#email")
        if (email.value.includes("@") && email.value.includes(".")){
            email.classList.remove("is-invalid")
            document.querySelector(".inavlid-promt").style.display="none"
            const hideSubscribePage = document.querySelector(".main-container");
            hideSubscribePage.style.display="none"
            document.querySelector(".addSuccess").style.display="block";
            setUserEmail(email.value);
            // Clear the form
            document.querySelector("#emailForm").reset()
        }else{
            email.classList.add("is-invalid")
            document.querySelector(".inavlid-promt").style.display="block"
            email.style.background_color
        }
    }
   
    return(
        <>
            <div className="main-div ">
                
                <div className="main-container">
                    <div className="main">
                        <div className="stayupdated">
                            <div className="title"><h2>Stay Updated!</h2></div>
                            <div className="text"><p>Join 60,000+ managers receiving monthly updated on:</p></div>
                            <div className="list">
                                <p><i className="bi bi-check-circle-fill"></i> Product discovery and building what matters</p>
                                <p><i className="bi bi-check-circle-fill"></i> Measuring to ensure updates are a success</p>
                                <p><i className="bi bi-check-circle-fill"></i> And much more!</p>
                            </div>
                            <div className="form">
                                <form id="emailForm"  onSubmit={handleSubmit}>
                                        <div className="inavlid-promt text-danger">
                                            <small>Valid email required.</small>
                                        </div>
                                    <div className="label"><label htmlFor="email"><b>Email Address</b></label></div>
                                    <div id="emailholder">
                                        <input type="text" name="email" className="form-control" id="email"/>
                                    </div>
                                <div className="submit-btn">
                                <button type="submit">Subscribe to Monthly newsletter</button>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className="image"><img src={Capture2} alt="" /></div>
                    </div>
                </div>
                <div className="addSuccess">{<Success email={userEmail}/>}</div>
            </div>
        </>
    )
}
export default Newletter