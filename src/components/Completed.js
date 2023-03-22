import { Player } from '@lottiefiles/react-lottie-player'
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react'
import Lottie from 'react-lottie'
import * as animationData from '../assets/lottie/107653-trophy.json'
import { leaderboard } from '../config/const';

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function Completed({ match }) {
    return (
        <div >
            <div className='award-animation'>
                <Lottie
                    width={250}
                    options={defaultOptions}
                

                />
            </div>
            <h1 className='score-label'>SCORE</h1>
            <h1 className='score-points'>{match.score} / {match.wickets} </h1>
            <p style={{ textAlign: 'center', color: "#fff" }}>Leaderboard <h4 style={{ fontSize: '0.5em' }}>({match.matchSize} /{match.matchSize} )</h4></p>
            <div style={{ display: 'flex', justifyContent: "center", overflow: "auto", height: "500px" }}>
                <List className='card-list-list completed-leaderboard' >
                    <ListItem disablePadding>
                        <ListItemButton style={{ backgroundColor: "#1e2430", color: "#fff" }}>
                            <ListItemText primary="Name" />
                            <ListItemText primary="Highest Score" style={{ textAlign: 'right' }} />
                        </ListItemButton>

                    </ListItem>
                    {leaderboard.map((item, key) => (
                        <ListItem disablePadding>
                            <ListItemButton key={key} style={{ backgroundColor: "#2a3244", color: "#fff" }}>
                                <ListItemText primary={item.name} />
                                <ListItemText primary={item.score} style={{ textAlign: 'right' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>


    )
}

export default Completed