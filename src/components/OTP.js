import { Button, createStyles, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { animateCSS } from '../animation/triggerAnimation';
import BallImage from '../assets/images/ball.png';
function OTP({ generatedOTP, username, mobile }) {
    const navigate = useHistory()
    const [name, setName] = useState("")
    const [otp, setOTP] = useState("")
    const [mobileValidationAlert, setMobileValidationAlert] = useState(false)
    console.log(generatedOTP, username, mobile)
    const handleNextBtn = async () => {
        setMobileValidationAlert(false)

        if (otp == "") {
            animateCSS(".input-with-number", 'jello', true, 0)
            return
        }

        if (otp != generatedOTP) {
            setMobileValidationAlert(true)
            if (mobileValidationAlert)
                animateCSS(".input-with-number", 'jello', true, 0)

            return
        }


        animateCSS(".input-container-number", 'bounceOutLeft', true, 1000)
        animateCSS(".top-heading", 'bounceOutUp', true, 1000)
        animateCSS(".next-btn", 'bounceOutDown', true, 1000)
        animateCSS(".logo-img", 'bounceOutDown', true, 1000)
        setTimeout(
            () => {
                localStorage.setItem("username", username)
                navigate.push('/selection')
            },
            1000
        );
    }

    const classes = (theme) => createStyles({
        input: {
            '&::placeholder': {
                fontStyle: 'italic',
                fontSize: '100px'
            },
        },
    });
    return (
        <>
            <div style={{ marginTop: '60px' }} className='animate__animated animate__lightSpeedInLeft'>
                <div className='input-container-number'>
                    {/* <span style={{ fontWeight: 'bold', fontSize: '0.6em', color: "#000" }}>{generatedOTP}</span> */}
                    <p style={{ fontWeight: 'bold', fontSize: '1em', color: "#fff" }}>OTP (One Time Password)</p>
                    <div className='input-with-number'>
                        <TextField
                            variant="standard"
                            id="input-with-icon-adornment"
                            className='input-field'
                            placeholder='XXXXXX'
                            onChange={(e) => setOTP(e.target.value)}
                            type={"number"}
                            value={otp}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={BallImage} width={300} className="input-ball" />
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                                inputMode: 'numeric'

                            }}

                        />

                        {mobileValidationAlert ?
                            <span className='validation-msg-otp'><p className='validation-msg animate__animated animate__slideInDown'>Invalid OTP! Please Re-try.</p></span> :
                            <p></p>}
                        <p style={{ fontWeight: 'bold', fontSize: '0.9em', color: "#fff" }}>We have sent an SMS to your phone</p>
                    </div>
                </div>
            </div>
            <br />
            <div className='animate__animated '>
                <Button
                    variant="contained"
                    color="error"
                    className="next-btn"
                    onClick={() => handleNextBtn()}
                >
                    LOGIN
                </Button>
            </div>
        </>
    )
}

export default OTP