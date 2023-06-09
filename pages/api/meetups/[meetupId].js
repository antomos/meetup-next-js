import { MongoClient, ObjectId } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup
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

async function handler(req, res) {

  if (req.method === 'DELETE') {

    const client = await MongoClient.connect(
      'mongodb+srv://amoschetti:test@cluster0.axoxoiw.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const { meetupId } = req.query;

    const result = await meetupsCollection.deleteOne({ _id: ObjectId(meetupId) });



    client.close();

    res.status(200).json({ message: `${meetupId}Meetup deleted!` });


  }
  if (req.method === 'PATCH') {
    const { enteredMeetupData } = req.body;
    const client = await MongoClient.connect(
      'mongodb+srv://amoschetti:test@cluster0.axoxoiw.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const { meetupId } = req.query;


    await meetupsCollection.updateOne(
      { _id: ObjectId(meetupId) },
      { $set: req.body }
    );
    client.close();

    res.status(200).json({ message: 'Meetup updated successfully.' });
  }
}

export default handler;
