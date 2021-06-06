import { session, useSession } from "next-auth/client";
import StoryCard from "./StoryCard";

function Stories() {

    const [session, loading] = useSession();
    const name = session.user.name;
    const image = session.user.image;
    const stories = [
      {
        name: name,
        src: "https://scontent.fdac68-1.fna.fbcdn.net/v/t1.6435-9/76751511_1010577442612405_1931869172979990528_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeEkGZWg9K3WCVr2QAybe1EJYLPjqn5xJwJgs-OqfnEnAk8Pj-0pMz8H96jt2efIlgPUgeG8QK8rwOt_39msxOVO&_nc_ohc=JjRdh7FUi_gAX9M1ALm&_nc_oc=AQm9chGfl13PNW0PNzJHCKEK0jMp0KngZToar0wmBg0BdVLJ_Kr3ZaiT-nANhltCNNI&_nc_ht=scontent.fdac68-1.fna&oh=242c2dd5f07267ae6109f1d4d427ae2a&oe=60E4654C",
        profile: image,
      },
      {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
      },
      {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
      },
      {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
      },
      {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
      },
    ];


  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
