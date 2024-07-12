const formatField = (value, field) => {
  switch (field) {
    case "date":
      const itemDate = new Date(Date.parse(value));
      return "&#128198; " + itemDate.toLocaleString("de-DE");
  }
  return value;
};

const fillTextField = (card, className, item, field) => {
  if (!item[field]) return;
  const element = card.querySelector("." + className);
  element.innerHTML = formatField(item[field], field);
};

const fillLink = (card, className, item, field, iconChar, titleText) => {
  if (!item[field]) return;
  const element = card.querySelector("." + className);
  const link = document.createElement("a");
  link.href = item[field];
  link.target = "_blank";
  const icon = document.createElement("span.icon");
  icon.innerHTML = iconChar;
  const title = document.createElement("span.icon");
  title.innerHTML = titleText;
  element.appendChild(link);
  link.appendChild(icon);
  link.appendChild(title);
};

const fillIcon = (card, className, item, field) => {
  const element = card.querySelector("." + className);
  element.innerHTML = getTypeTag(item[field]);
};

const fillItems = (filter) => {
  const filterButtons = document.querySelectorAll(".tpIcon");
  filterButtons.forEach((filterButton) => {
    filterButton;
  });

  const itemContainer = document.getElementById("itemContainer");
  while (itemContainer.firstChild) {
    itemContainer.removeChild(itemContainer.lastChild);
  }

  const filteredTypes =
    filter === "all" ? types : types.filter((type) => type === filter);

  const cardTemplate = document.getElementById("cardTemplate");
  filteredTypes.forEach((type) => {
    const typeData = data.filter((item) => {
      if (item.type !== type) return false;
      if (item.date !== undefined) {
        const currentDate = new Date();
        const itemDate = Date.parse(item.date);
        if (itemDate < currentDate) return false;
      }
      return true;
    });
    typeData.forEach((item) => {
      const newCard = document.importNode(cardTemplate.content, true);
      const cardElement = newCard.querySelector(".card");
      cardElement.classList.add(type);
      fillIcon(newCard, "tpIcon", item, "type");
      if (item.japaneseName) {
        fillTextField(newCard, "jpName", item, "japaneseName");
        fillTextField(newCard, "deName", item, "name");
      } else {
        fillTextField(newCard, "jpName", item, "name");
      }
      fillLink(
        newCard,
        "gglMps",
        item,
        "googleMaps",
        "&#128506;",
        "Google Maps"
      );
      fillLink(newCard, "wbSite", item, "link", "&#127968;", "Website");
      fillTextField(newCard, "evnDat", item, "date");
      fillTextField(newCard, "deScrp", item, "description");
      itemContainer.appendChild(newCard);
    });
  });
};

const fillNavigation = () => {
  const navigation = document.querySelector("#mainHeader > navigation");

  types.forEach((type, index) => {
    const navRadio = document.createElement("input");
    if (index === 0) navRadio.checked = true;
    navRadio.type = "radio";
    navRadio.name = "navRadio";
    navRadio.id = "radio-" + type;
    navRadio.classList.add("navRadio", type);
    const navLabel = document.createElement("label");
    navLabel.setAttribute("for", "radio-" + type);
    navLabel.classList.add(type, "tpIcon");
    navLabel.innerHTML = getTypeTag(type);
    navRadio.addEventListener("click", (e) => {
      fillItems(type);
    });
    navigation.appendChild(navRadio);
    navigation.appendChild(navLabel);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  fillItems("all");
  fillNavigation();
});
