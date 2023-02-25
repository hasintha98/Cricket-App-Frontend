import { Button, Container, InputAdornment, TextField } from '@mui/material'
import Ball from '../assets/images/ball.png'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import RunSelection from '../components/RunSelection';
import Quiz from '../components/Quiz';
import Swal from 'sweetalert2';

function MatchPage({ navigation }) {
  const [state, setState] = useState(false)
  const [selectedRun, setSelectedRun] = useState(0)

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
      showConfirmationDialog();
    };

    const showConfirmationDialog = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to leave this screen?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, leave this screen',
        cancelButtonText: 'No, stay on this screen',
      }).then((result) => {
        if (result.isConfirmed) {
          // User confirmed, leave the screen
          navigation.goBack();
        } else {
          // User canceled, stay on the screen
        }
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigation]);
  return (
    <Container className='margin-issue' style={{ textAlign: 'center', marginTop: '5%' }} fixed>

      {state ?
        <Quiz
          changeStatus={() => setState(!state)}
          run={selectedRun} /> :
        <RunSelection
          changeStatus={
            (run) => {
              setSelectedRun(run)
              setState(!state)
            }
          } />}

    </Container>
  )
}

export default MatchPage