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
    googleMaps: "https://maps.app.goo.gl/gXZpjByDRDfN8wTn6",
    date: "2024-12-08T17:00:00",
    description: "Zepp Haneda\n",
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
    type: "food",
    japaneseName: "肉汁餃子のダンダダン 東上野店",
    name: "Nikujiru Gyoza Dandadan Higashiueno",
    googleMaps: "https://maps.app.goo.gl/WdCkSYSVNGcK2xJs6",
    link: "https://www.dandadan.jp/",
    description: "Sat/Sun 11:45 - 23:59\nMon-Fri 11:45 - 15:00 / 16:00 - 23:59",
  },
  {
    type: "food",
    japaneseName: "お好み焼き 鉄板焼 浅草 つる次郎",
    name: "Okonomiyaki Teppanyaki Asakusa Tsurujiro",
    googleMaps: "https://maps.app.goo.gl/PEZDJzhBLJ3ZCh288",
    link: "https://tsurujirou-asakusa.com/",
    description: "Sat/Sun 11:30 - 21:00\nMon-Fri 11:30 - 15:00 / 17:00 - 22:00",
  },
  {
    type: "food",
    japaneseName: "餃子の王さま",
    name: "Gyōza no Ōsama",
    googleMaps: "https://maps.app.goo.gl/3tVTmT85chzFFc8V6",
    link: "https://gfw4900.gorp.jp",
    description: "Sat/Sun 11:15 - 20:00\nMon-Fri 11:15 - 14:00 / 16:00 - 20:00",
  },
  {
    type: "food",
    japaneseName: "浅草 カツ吉",
    name: "Katsukichi",
    googleMaps: "https://maps.app.goo.gl/GDhWpkVMD5yXBtMt9",
    link: "https://asakusakatsukichi.wixsite.com/website",
    description: `Daytime session: 11:30-14:30 (LO 14:00)
Evening session: 17:00-20:00 (LO 19:30)
Closed: Thursday`,
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
  {
    type: "misc",
    name: "Café Reissue",
    japaneseName: "Latteart Café Reissue～リシュー～",
    link: "https://www.reissue.co.jp/",
    googleMaps: "https://maps.app.goo.gl/SXLDDQqa2M6n2tvd8",
    description: `Bitte kommen Sie mit Ihren Lieben.

Bitte kommen Sie und denken Sie an etwas, das Sie lieben.

Auch wenn Sie die Form Ihres Milchkaffees nicht behalten können, werden wir eine einzigartige Latte Art kreieren, die in Ihrer Erinnerung und Ihrem Herzen bleiben wird.

Tue-Sun 10:00 - 19:00`,
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
