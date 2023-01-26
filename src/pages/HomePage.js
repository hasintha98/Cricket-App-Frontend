import { Button, Container } from '@mui/material'
import React from 'react'
import HomeImage from '../assets/images/home-page-image.png'

const HomePage = () => {
    const animateCSS = (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);
            console.log(node, element, animation, prefix)
            node.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, { once: true });
        });
    return (
        <Container style={{ textAlign: 'center' }} fixed>
            <div className='animate__animated animate__backInDown'>
                <img src={HomeImage} className="animate__animated animate__bounce  animate__1 animate__delay-5s" />
            </div>
            <p style={{ color: '#BD1307', fontWeight: 'bold', fontSize: '2em' }} className="animate__animated animate__backInUp animate__delay-1s">Cricket Game Application</p>
            <div className='my-element animate__animated animate__rubberBand'>
                <Button
                    variant="contained"
                    color="error"
                    className="animate__animated animate__backInUp animate__delay-1s"
                    onClick={() => animateCSS(".my-element", 'animate__rubberBand')}>
                    START
                </Button>
            </div>
        </Container>

    )
}

export default HomePage