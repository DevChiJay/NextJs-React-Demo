import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';

export default function Meetup() {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    console.log(data);

    router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Taichi React - Add Meetup</title>
        <meta
          name='description'
          content='Add your own react meetups'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}
