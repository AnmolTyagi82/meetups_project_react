import React from 'react'
import NewMeetUpForm from '../meetups/NewMeetUpForm'

import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://meetupreact-c5408-default-rtdb.firebaseio.com/meetups.json',
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/');
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
