// our-domain.com/new-meetup
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import MeetupForm from '../../components/meetups/MeetupForm';

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/meetup-requests', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();



    router.push('/');
  }
  const initialData = {
    title: '',
    image: '',
    address: '',
    description: ''
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
      <MeetupForm initialData={initialData} onSendingMeetup={addMeetupHandler} action='Add'/>
    </Fragment>
  );
}

export default NewMeetupPage;
