import { Button, createStyles, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { animateCSS } from '../animation/triggerAnimation'
import BallImage from '../assets/images/ball.png';
function Login({changeStatus}) {

    const navigate = useHistory()
    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [mobileValidationAlert, setMobileValidationAlert] = useState(false)


    const handleNextBtn = async () => {
        setMobileValidationAlert(false)
        if (name == "") {
            animateCSS(".input-with-name", 'jello', true, 0)
            return
        }


        if (mobileNumber == "") {
            animateCSS(".input-with-number", 'jello', true, 0)
            return
        }

        if (mobileNumber.length != 10) {
            if (mobileValidationAlert) animateCSS(".input-with-number", 'jello', true, 0)
            setMobileValidationAlert(true)
            return
        }



        animateCSS(".input-container-name", 'bounceOutRight', true, 1000)
        animateCSS(".input-container-number", 'bounceOutLeft', true, 1000)
        
        // animateCSS(".top-heading", 'bounceOutUp', true, 1000)
        // animateCSS(".next-btn", 'bounceOutDown', true, 1000)
        setTimeout(
            () => {
                changeStatus(name, mobileNumber)
                //navigate.push('/otp')
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
            <div className='animate__animated animate__lightSpeedInLeft '>
                <div className='input-container-name'>
                    <p style={{ fontWeight: 'bold', fontSize: '1em', color: "#fff" }}>Name</p>
                    <div className='input-with-name'>
                        <TextField
                            variant="standard"
                            className='input-field'
                            placeholder='John Doe'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={BallImage} width={300} className="input-ball" />
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                                classes: { input: classes.input }

                            }}

                        />
                    </div>
                </div>
            </div>
            <br />
            <div className='animate__animated animate__lightSpeedInLeft'>
                <div className='input-container-number'>
                    <p style={{ fontWeight: 'bold', fontSize: '1em', color: "#fff" }}>Mobile number</p>
                    <div className='input-with-number'>
                        <TextField
                            variant="standard"
                            id="input-with-icon-adornment"
                            className='input-field'
                            placeholder='07XXXXXXXX'
                            onChange={(e) => setMobileNumber(e.target.value)}
                            value={mobileNumber}
                            pattern="[0-9]*"
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
                        {mobileValidationAlert ? <p className='validation-msg animate__animated animate__slideInDown'>Enter a valid mobile number !</p> : <p></p>}
                    </div>
                </div>
            </div>
            <br />
            <div className='animate__animated animate__backInUp '>
                <Button
                    variant="contained"
                    color="error"
                    className="next-btn"
                    onClick={() => handleNextBtn()}
                >
                    NEXT
                </Button>
            </div>
        </>
    )
}

export default Login