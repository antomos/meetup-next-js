import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';
import { useState } from 'react';
import Modal from '../ui/Modal';

function MeetupList(props) {
  const [selectedMeetup, setSelectedMeetup] = useState(null);

  const handleDelete = (meetup) => {
    setSelectedMeetup(meetup);
  };
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          meetup={meetup}
          onDelete={handleDelete}
        />
      ))}
       {selectedMeetup && (
        <Modal meetup={selectedMeetup} onClose={() => setSelectedMeetup(null)} />
      )}
    </ul>
  );
}

export default MeetupList;
