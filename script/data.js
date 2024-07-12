const types = ["all", "food", "concert", "misc"];
const data = [
  {
    type: "food",
    name: "Soranoiro",
    japaneseName: "ソラノイロ",
    link: "https://soranoiro-vege.com",
    googleMaps: "https://maps.app.goo.gl/5Pgq3X3mUxWwzJ9GA",
    description: `We line up gluten-free Ramen and Vegan Ramen as well as standard soy sauce flavor and salt flavor Ramen.
Location is in the "Tokyo Ramen Street" which is basement floor of Tokyo Station.
Nearest exit is "Yaesu South Exit" of JR Tokyo station.`,
  },
  {
    type: "concert",
    name: "Other Name",
    link: "#",
    googleMaps: "#",
    date: "2024-12-01T17:00:00",
  },
  {
    type: "food",
    japaneseName: "薬膳食堂ちゃぶ膳",
    name: "Chabuzen",
    googleMaps: "https://maps.app.goo.gl/jPcBFSyEqP6jhDjL6",
    description:
      "Ramen, India curry soup curry salad, dessert. All menu respectively, do not use any animal ingredients and Five strong-smelling vegetables, the menu of Oriental vegetarian specification,",
  },
  {
    type: "misc",
    name: "Final Name",
    link: "#",
    googleMaps: "#",
  },
  {
    type: "food",
    name: "Name",
    japaneseName: "名前",
    link: "#",
    googleMaps: "#",
    date: "2024-06-30T17:00:00",
  },
  {
    type: "concert",
    name: "Other Name",
    link: "#",
    googleMaps: "#",
    date: "2024-12-01T17:00:00",
  },
  {
    type: "food",
    name: "Yet Another Name",
    link: "#",
    date: "2024-12-02T17:00:00",
  },
  {
    type: "misc",
    name: "Baikatei",
    japaneseName: "梅花亭",
    link: "https://www.baikatei.asia",
    googleMaps:
      "https://www.google.com/maps/place/2-ch%C5%8Dme-1-4+Shinkawa,+Chuo+City,+Tokyo+104-0033,+Japan/@35.6773109,139.7776824,17z/data=!3m1!4b1!4m6!3m5!1s0x6018895c7b579967:0x9923b6b9983acc3c!8m2!3d35.6773066!4d139.7802627!16s%2Fg%2F12hl1jzd1?entry=ttu",
  },
];

const getTypeTag = (type) => {
  switch (type) {
    case "all":
      return "&#10035; Alle";
    case "food":
      return "&#127858; Essen";
    case "concert":
      return "&#127928; Konzert";
    case "misc":
      return "&#128508; Sonstiges";
  }
  return type;
};
