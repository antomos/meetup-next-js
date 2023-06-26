import { useState, Fragment } from 'react';
import classes from './Modal.module.css';
import { useRouter } from 'next/router';

const Modal = ({ meetup, onClose }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const router = useRouter();
  async function handleConfirmDelete () {

      console.log('DELETE started for ' + meetup.id);
      const response = await fetch(`/api/meetups/${meetup.id}`, {
        method: 'DELETE'
      });

      const data = await response.json();


    setIsDeleted(true);
    setTimeout(() => {
      onClose();
    }, 2000); // Close the modal after 2 seconds
    router.push('/');

  };

  return (
    <>
    <div className={classes.backdrop} onClick={onClose}/>
      <div className={classes.modal}>
        <div className={classes.content}>Meetup Title: {meetup.title}</div>

        {isDeleted ? (
          <div>Element deleted successfully!</div>
        ) : (
          <>
            <div className={classes.content}>Are you sure you want to delete this element?</div>
            <div className={classes.actions}>
              <button onClick={handleConfirmDelete}>Confirm Delete</button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </>
        )}
      </div>


    </>
  );
};

export default Modal;
