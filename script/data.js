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
    name: "Gacharic Spin x Doll$boxx",
    link: "#",
    googleMaps: "#",
    date: "2024-12-08T17:00:00",
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
    googleMaps: "https://maps.app.goo.gl/x8ewfGqpE244jJN88",
    description: `Our shop is a confectionery store that was established in Odenmacho in 1850. In 1853, we created the first Japanese confectionery, "Amerika Manju," which was baked in a kettle, and it became a big hit. Since then, successive owners have been working on their ingenuity and have continued to make confectionery that is refined yet commonplace.`,
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
