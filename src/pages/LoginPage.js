import { Container } from '@mui/system'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react'
import HomeImage from '../assets/images/ball.png'
import { Button, createStyles, FormControl, makeStyles, TextField } from '@mui/material';
import { animateCSS } from '../animation/triggerAnimation'
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate()
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

        if(mobileNumber.length != 10) {
            if(mobileValidationAlert) animateCSS(".input-with-number", 'jello', true, 0)
            setMobileValidationAlert(true)
            return 
        }



        animateCSS(".input-container-name", 'bounceOutRight', true, 1000)
        animateCSS(".input-container-number", 'bounceOutRight', true, 1000)
        animateCSS(".top-heading", 'bounceOutUp', true, 1000)
        animateCSS(".next-btn", 'bounceOutDown', true, 1000)
        setTimeout(
            () => {
                navigate('/')
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
        <Container style={{ textAlign: 'center', marginTop: '10%' }} fixed>
            <div className='top-heading'>
                <h2 style={{ color: '#BD1307', fontWeight: 'bold', fontSize: '2em' }} className="animate__animated animate__bounceInDown">Login</h2>

            </div>
            <div className='animate__animated animate__lightSpeedInLeft'>
                <div className='input-container-name'>



                    <p style={{ fontWeight: 'bold', fontSize: '1em' }}>Name</p>
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
                                        <img src={HomeImage} width={300} className="input-ball" />
                                    </InputAdornment>
                                ),
                                disableUnderline: true,
                                classes: { input: classes.input}

                            }}

                        />
                    </div>
                </div>
            </div>
            <br />
            <div className='animate__animated animate__lightSpeedInLeft'>
                <div className='input-container-number'>
                    <p style={{ fontWeight: 'bold', fontSize: '1em' }}>Mobile number</p>
                    <div className='input-with-number'>
                        <TextField
                            variant="standard"
                            id="input-with-icon-adornment"
                            className='input-field'
                            placeholder='07XXXXXXXX'
                            onChange={(e) => setMobileNumber(e.target.value)}
                            value={mobileNumber}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={HomeImage} width={300} className="input-ball" />
                                    </InputAdornment>
                                ),
                                disableUnderline: true

                            }}

                        />
                        {mobileValidationAlert ? <p className='validation-msg animate__animated animate__slideInDown'>Enter a valid mobile number !</p> : <p></p> }
                    </div>
                </div>
            </div>
            <br />
            <div className='animate__animated animate__backInUp '>
                <Button
                    variant="contained"
                    color="error"
                    className="next-btn"
                    hidden={true}
                    onClick={() => handleNextBtn()}
                >
                    NEXT
                </Button>
            </div>



        </Container>
    )
}

export default LoginPage