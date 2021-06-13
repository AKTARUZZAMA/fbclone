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
        profile: "https://scontent.fdac68-1.fna.fbcdn.net/v/t1.6435-9/95542073_108646880841005_7737006442665738240_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEekxa9ev5hBd-B7lzDIRiGrntmI55vTV6ue2Yjnm9NXo4uj1xt1KR7kPLtsdDn27tiJDrQgX2J9ETs3sXPDG9L&_nc_ohc=7iRwchKkTBkAX9PLxMn&_nc_ht=scontent.fdac68-1.fna&oh=78fd839bcff1c71a214d29ecf397f9c1&oe=60E4A014",
      },
      {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
      },
      {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://scontent.fdac68-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFcLwthaZEHQ04zFRsq6H18QyaNjMnA6N9DJo2MycDo38maM-aKkTAZlopfaYn9lnCxQgYt-p5a4U6chPHPBde9&_nc_ohc=XQYSNQITbCkAX954Z1F&tn=QwVjeMmsE-7cOc2U&_nc_ht=scontent.fdac68-1.fna&oh=d32574d9154a84f4c30bb3cd786057d6&oe=60E4E8D6",
      },
      {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://scontent.fdac68-1.fna.fbcdn.net/v/t1.18169-9/23473074_10155031875776961_8482140412038626648_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFr9KgBjuyY5P5S_GjtZOIrHG52X8XTmT8cbnZfxdOZPz1w6qlZe1jik88Dzul3s-c9wb54Ssiwqpf78mD1xR9G&_nc_ohc=-d9TjjV2S-QAX8uu1PB&_nc_ht=scontent.fdac68-1.fna&oh=7bb5f8024c00dce09a36d64cd4b95368&oe=60E31EDE",
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
