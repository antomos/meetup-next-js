import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem({ meetup, onDelete }) {
  console.log(meetup);
  const router = useRouter();
  const handleDelete = () => {
    onDelete(meetup);
  };



  function showDetailsHandler() {
    router.push('/' + meetup.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
          <button onClick={handleDelete}>Delete Meetup</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
