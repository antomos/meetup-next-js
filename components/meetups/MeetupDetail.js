import classes from './MeetupDetail.module.css';
import { useRouter } from 'next/router';

function MeetupDetail(props) {
  const router = useRouter()

  function goBackHandler() {
    router.push('/');
  }

  function editHandler() {
    props.editHandler();
  }
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <div className={classes.actions}>
          <button onClick={goBackHandler}>Go Back</button>
          <button onClick={editHandler}>Edit Meetup</button>

        </div>
    </section>
  );
}

export default MeetupDetail;
