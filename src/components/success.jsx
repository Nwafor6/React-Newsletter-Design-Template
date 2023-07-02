import React from "react";


const Success = (props)=>{
    const handleDismissMsg =()=>{
        const hideSubscribePage = document.querySelector(".main-container");
        hideSubscribePage.style.display="block"
        document.querySelector(".addSuccess").style.display="none"
    }
    return(
        <>
            <div className="main-div success-div">
                <div className="main-container">
                    <div className="main success_main">
                        <div className="stayupdated">
                        <div className="success_icon"><i className="bi bi-check-circle-fill text-danger"></i></div>
                            <div className="title"><h2>Thanks for <br /> subscribing!</h2></div>
                            <div className="text">
                                <p>A confirmation email has been sent to <b className="email-val">{props.email}</b>. Please open it and click the button insideto confirm your subcsription</p>
                            </div>
                            <div className="success-btn">
                                <button className="text-white border-0" id="dismiss-btn" onClick={handleDismissMsg}>Dismiss Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Success