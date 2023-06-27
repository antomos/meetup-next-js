import { MongoClient, ObjectId } from 'mongodb';
import { Fragment, useState } from 'react';
import Head from 'next/head';
import MeetupForm from '../../components/meetups/MeetupForm';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { useRouter } from 'next/router';

function MeetupDetails(props) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  function editHandler(){
    setIsEditing(true)
  }
  async function updateMeetupHandler(enteredMeetupData) {
    const response = await fetch(`/api/meetups/${props.meetupData.id}`, {
      method: 'PATCH',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();



    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      {isEditing ?
        <MeetupForm initialData={props.meetupData} onSendingMeetup={updateMeetupHandler} action='Edit'/> :
        <MeetupDetail
          image={props.meetupData.image}
          title={props.meetupData.title}
          address={props.meetupData.address}
          description={props.meetupData.description}
          editHandler={editHandler}
        />
      }

    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://amoschetti:test@cluster0.axoxoiw.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://amoschetti:test@cluster0.axoxoiw.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
