import React from 'react'
import { useState, useEffect } from 'react';

import MeetUpList from '../meetups/MeetUpList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://meetupreact-c5408-default-rtdb.firebaseio.com/meetups.json`
    ).then(response => {
      return response.json()
    }).then(data => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

  const deleteMeetupHandler = async (meetupId) => {
    setIsLoading(true);
    try {
      await fetch(`https://meetupreact-c5408-default-rtdb.firebaseio.com/meetups/${meetupId}.json`, {
        method: "DELETE",
      });
      setLoadedMeetups(prevMeetups => prevMeetups.filter(meetup => meetup.id !== meetupId));
    } catch (error) {
      console.log("Error deleting meetup:", error);
    }
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList 
        meetups={loadedMeetups} 
        onDeleteMeetup={deleteMeetupHandler}
        showDeleteButton={true}
      />
    </section>
  )
}

export default AllMeetupsPage;
