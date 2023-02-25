import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { animateCSS } from '../animation/triggerAnimation'
import Logo from '../assets/images/Logo-01.png'
import { FixedSizeList } from 'react-window';
const matches = [
    {
        id: 1,
        matchSize: 10,
        winPrize: 500,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-8.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2"
        ]
    },
    {
        id: 2,
        matchSize: 10,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    },
    {
        id: 3,
        matchSize: 10,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    },
    {
        id: 4,
        matchSize: 10,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    },
    {
        id: 4,
        matchSize: 10,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    },
    {
        id: 4,
        matchSize: 10,
        winPrize: 1000,
        image: "https://fancyodds.com/wp-content/uploads/2022/01/3d-Cricket-Wallpaper-9.jpg",
        endTime: "2023-04-01",
        startTime: "2023-02-01",
        rules: [
            "Rule 1",
            "Rule 2",
            "Rule 3"
        ]
    }
]
const MatchSelectionPage = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [selectedMatch, setSelectedMatch] = useState(0)

    const handleStartBtn = async (match) => {
        Swal.fire({
            title: `MATCH ${match.matchSize}/${match.matchSize}`,
            html: rulesGenerator(match.rules),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#bbb',
            confirmButtonText: 'Play Now'
        }).then((result) => {
            if (result.isConfirmed) {
                animateCSS(".start-btn", 'bounceOutDown', true, 1000)
                animateCSS(".start-content", 'flipOutY', true, 1000)

                setTimeout(
                    () => {
                        navigate('/match')
                    },
                    3000
                );
            }
        })
        // setOpen(false)

    }

    const rulesGenerator = (rules) => {
        let html = `<div style="text-align:left">Rules: <ul>`
        rules.forEach(element => {
            html = html + `<li>${element}</li>`
        });
        return html + '</ul></div>'
    }

 
    return (
        <Container className='margin-issue' style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '3%' }} fixed>

            <div className='start-content animate__slow'>
                <div className='top-heading'>
                    <h2 style={{ color: '#cf4036', fontWeight: 'bold', fontSize: '2em', WebkitTextStroke: "0.5px #BD1307" }} className="animate__animated animate__bounceInDown">Please Select your match</h2>

                </div>
                <div className='card-list animate__animated animate__backInDown'>
                   

           
                            <List className='card-list-list'>
                                {matches.map((match, key) => (
                                    <ListItem component="div" disablePadding>
                                        <Card key={key} sx={{ width: 300, height: 240, borderRadius: 10, boxShadow: '10px 10px 20px rgb(56, 41, 41)', textAlign: "center" }} className='animate__animated animate__backInDown mb-5'>
                                            <CardActionArea
                                                onClick={() => {
                                                    handleStartBtn(match)
                                                }}
                                            >
                                                <CardMedia
                                                    component="img"
                                                    height="120"
                                                    image={match.image}
                                                    alt={match.matchSize}
                                                />
                                                <CardContent className='match-card-content'>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        MATCH {match.matchSize}/{match.matchSize}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h8" component="div">
                                                        Win Prize Rs. {match.winPrize}
                                                    </Typography>
                                                    <Typography variant="body2" >
                                                        Time Period : {match.startTime} - {match.endTime}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </ListItem>
                                ))}
                            </List>
                     

                

                </div>
                <img src={Logo} className="logo-img mt-5 animate__animated animate__bounce  animate__1 animate__delay-5s" />
            </div>


        </Container>

    )
}

export default MatchSelectionPage