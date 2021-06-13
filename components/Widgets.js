import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Jeff Bezoz" },
  { src: "https://scontent.fdac68-1.fna.fbcdn.net/v/t1.6435-9/95542073_108646880841005_7737006442665738240_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEekxa9ev5hBd-B7lzDIRiGrntmI55vTV6ue2Yjnm9NXo4uj1xt1KR7kPLtsdDn27tiJDrQgX2J9ETs3sXPDG9L&_nc_ohc=7iRwchKkTBkAX9PLxMn&_nc_ht=scontent.fdac68-1.fna&oh=78fd839bcff1c71a214d29ecf397f9c1&oe=60E4A014", name: "Elon Mask" },
  { src: "https://scontent.fdac68-1.fna.fbcdn.net/v/t1.18169-9/23473074_10155031875776961_8482140412038626648_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFr9KgBjuyY5P5S_GjtZOIrHG52X8XTmT8cbnZfxdOZPz1w6qlZe1jik88Dzul3s-c9wb54Ssiwqpf78mD1xR9G&_nc_ohc=-d9TjjV2S-QAX8uu1PB&_nc_ht=scontent.fdac68-1.fna&oh=7bb5f8024c00dce09a36d64cd4b95368&oe=60E31EDE", name: "Bill Gates" },
  { src: "https://scontent.fdac68-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFcLwthaZEHQ04zFRsq6H18QyaNjMnA6N9DJo2MycDo38maM-aKkTAZlopfaYn9lnCxQgYt-p5a4U6chPHPBde9&_nc_ohc=XQYSNQITbCkAX954Z1F&tn=QwVjeMmsE-7cOc2U&_nc_ht=scontent.fdac68-1.fna&oh=d32574d9154a84f4c30bb3cd786057d6&oe=60E4E8D6", name: "Mark Zuckerberg" },
  { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
  { src: "https://scontent.fdac68-1.fna.fbcdn.net/v/t31.18172-8/19095476_1970717556492213_4231560313994151344_o.png?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEtcG6ItInWITcDMB4S5x38wJtr0pvX8BzAm2vSm9fwHCPBUIcUbIZHLHFX0xEOcbeF6FzwuEz3vfSddCXeyhNm&_nc_ohc=wVOZyekytFgAX-mgubl&_nc_ht=scontent.fdac68-1.fna&oh=aaac382355852dafc52a33f2246af707&oe=60E5D5E7", name: "The Quin" },
  { src: "https://links.papareact.com/r57", name: "James Bond" },
];
function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5 h-screen overflow-y-auto myscroll">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Pepole</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map(contact => (
          <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
