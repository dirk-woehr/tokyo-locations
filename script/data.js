const types = ["all", "food", "concert", "misc", "shopping"];
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
    name: "Tokyo Rickshaw Asakusa",
    japaneseName: "人力車 浅草観光 東京力車",
    link: "https://tokyo-rickshaw.tokyo/",
    googleMaps: "https://maps.app.goo.gl/VjGy54YMSoneKB1Y6",
    description: "Mon-Fri 10:00 - 19:00\nSat-Sun 09:00 - 19:00",
  },

  {
    type: "misc",
    name: "Tokyo Video Gamers (Modernes Izakaya-Restaurant)",
    japaneseName: "Tokyo Video Gamers",
    link: "https://tokyovideogamers.com/",
    googleMaps: "https://maps.app.goo.gl/x63jrf8w2Zr41Wfi8",
    description: "Izakaya Eat Drink Gratis play an Arcade Automaten",
  },

  {
    type: "food",
    name: "Sometarō",
    japaneseName: "染太郎",
    googleMaps: "https://maps.app.goo.gl/du5z9dGuQPUZ4NUx8",
    description: "Thu-Mon 12:00 - 14:45 17:30 - 21:30",
  },
  {
    type: "food",
    name: "Minami Indo Dining Nakano",
    japaneseName: "南印度ダイニング",
    googleMaps: "https://maps.app.goo.gl/Zc4aEuDwrVhPfznt9",
    description: "Tue-Sun 11:30 - 15:00 17:30 - 23:00",
  },
  {
    type: "food",
    name: "Nihao",
    japaneseName: "你好 (ニーハオ) 本店",
    link: "https://nihao.co.jp",
    googleMaps: "https://maps.app.goo.gl/5z92ofNxpznWNNpu5",
    description: "Mon-Sun 11:30 22:00",
  },
  {
    type: "food",
    name: "Toyosu Senkyaku Banrai",
    japaneseName: "豊洲 千客万来",
    link: "https://www.toyosu-senkyakubanrai.jp",
    googleMaps: "https://maps.app.goo.gl/MMUSSCMYD5PiK8We7",
    description: "Mon-Sun 10:00 22:00",
  },
  {
    type: "food",
    name: "Yanaka Ginza",
    japaneseName: "谷中銀座",
    link: "#",
    googleMaps: "https://maps.app.goo.gl/hPpbUf64p83C4GNh8",
    description: "Mon-Sun 10:00 22:00",
  },
  {
    type: "concert",
    name: "Other Name",
    link: "#",
    googleMaps: "#",
    date: "2024-12-01T17:00:00",
  },
  {
    type: "concert",
    name: "Tsushimamire",
    japaneseName: "つしまみれ",
    link: "https://toos.co.jp/basementbar/ev/%e3%81%a4%e3%82%88%e3%81%97%e7%94%9f%e8%aa%95%e7%a5%ad-2024/",
    googleMaps: "https://maps.app.goo.gl/aPFJRrsv14gf6Z4Z9",
    date: "2024-12-09T18:30:00",
  },
  {
    type: "concert",
    name: "Another Story /C-GATE",
    link: "http://www.cyclone1997.com/home.html",
    googleMaps: "https://maps.app.goo.gl/PoUvPgpFdoYG6pHP9",
    date: "2024-12-10T18:00:00",
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
    name: "Nishi-Nippori Station",
    japaneseName: "西日暮里駅",
    googleMaps: "https://maps.app.goo.gl/jNmDmvtBfBcafjYt7",
    description: `Ruhigere Gegend mit verschiedenen Schreinen`,
  },
  {
    type: "misc",
    name: "Togoshi Ginza Shopping Street",
    japaneseName: "戸越銀座商店街",
    link: "http://www.togoshiginza.jp/",
    googleMaps: "https://maps.app.goo.gl/WwsBhv1ovJgsHneG6",
    description: `Einkaufstraße mit Fressbuden`,
  },
  {
    type: "misc",
    name: "Toden Arakawa Line",
    japaneseName: "戸越銀座商店街",
    googleMaps: "https://maps.app.goo.gl/1tauRrd7AV6KUq3T9",
    description: `Minowabashi Station, Outsuka Station, Waseda Station`,
  },
  {
    type: "misc",
    name: "Toden Arakawa Base",
    japaneseName: "東京都交通局 荒川電車営業所",
    googleMaps: "https://maps.app.goo.gl/DnAGXYqSg3DSgFqn7",
    description: `Museum Toden-Arakawa Line`,
  },
  {
    type: "shopping",
    name: "Daruyama Records & Craft Beer",
    japaneseName: "だるまや レコード & クラフトビール",
    link: "https://darumaya.to/",
    googleMaps: "https://maps.app.goo.gl/qp9zJNY4eZMiBW9x9",
    description: `Platten & Bier`,
  },
  {
    type: "shopping",
    name: "Face Records",
    link: "https://www.facerecords.com/shop/index.php",
    googleMaps: "https://maps.app.goo.gl/AruPvvs7mTL3tTrN9",
    description: `Rare CDs & Platten`,
  },
  {
    type: "shopping",
    name: "Woo-Eee-Woo Store",
    googleMaps: "https://maps.app.goo.gl/2FrpR83SQr13rYWo7",
    description: `CDs & Platten`,
  },
  {
    type: "shopping",
    name: "HMV Records",
    link: "https://www.hmv.co.jp/store/SHU/",
    googleMaps: "https://maps.app.goo.gl/B8QksAn5PAEPgpJMA",
    description: `CDs & Platten`,
  },
  {
    type: "misc",
    name: "Café Reissue",
    japaneseName: "リシュー",
    link: "https://www.reissue.co.jp/",
    googleMaps: "https://maps.app.goo.gl/SXLDDQqa2M6n2tvd8",
    description: "3d Latte Art",
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
    case "shopping":
      return "&#128722; Einkaufen";
  }
  return type;
};
