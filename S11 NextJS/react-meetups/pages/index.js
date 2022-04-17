import MeetupList from "../components/meetups/MeetupList";

const DUMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    address: "asfsd",
    description: "sdfsd",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMY_MEETUPS} />;
};

export default HomePage;
