const express = require('express');
const app = express();

//Creating a class to instantiate plant objects
class Plant {
  constructor(commonName, scientificName, kingdom, division, plantClass, subclass, order, family, commonFamily, genus, species, imageSrc, duration, description, citeYear, url) {
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.classification = {kingdom, division, plantClass, subclass, order, family, commonFamily, genus, species}
    this.imageSrc = imageSrc;
    this.duration = duration;
    this.description = description;
    this.descriptionCite = `Illinois Department of Natural Resources. ${citeYear}. Native Plant Information. Retrieved from ${url}`;
  }
}

//Creating the array of plant objects
const plants = [new Plant('American bellflower', 'Campanulastrum americanum', 'Plantae', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Campanulales', 'Campanulaceae Juss.', 'Bellflower family', 'Campanulastrum Small', 'Campanulastrum americanum', 'https://s7d1.scene7.com/is/image/isp/fygoct2019?qlt=100&wid=900&ts=1689692279748&$ImageComponent$&fit=constrain', 'Annual', 'American bellflower is an annual or biennial herb. Its sap is milky. The erect stem may be branched. Leaves are arranged alternately along the stem. Each simple, lance‐shaped leaf is toothed. A single leaf may be six inches long and two inches wide. The five-petaled, pale‐blue flowers are flat and have a lighter ring at the center. The style (part of the female reproductive structures) is very long and curved. Flowers develop in a cluster on a stalk that may be one and one‐half feet long. The fruit is a club‐shaped capsule, about one‐half inch long, containing flat, brown seeds. American bellflower may attain a height of one and one‐half to six feet and may be found throughout Illinois. It grows in woodlands. Flowers are produced from June through November. White‐tailed deer may eat the leaves of this plant.', '2019', 'https://dnr.illinois.gov/education/fygmain/2019/fygoct2019.html')]

//Creating IDs for all the plants
plants.forEach((plant, index) => plant.id = index + 1);

app.get('/plants/:id', (request, response) => {
  //Setting up our id path parameter to be able to take a numeric id or the plant's common name.
  const requestId = Number(request.params?.id) || request.params?.id.toLowerCase();
  console.log(requestId);
  if (plants.some(plant => plant.id === requestId)) {
    response.json(plants[requestId - 1]);
  } else if (plants.some(plant => plant.commonName.split(' ').join('').toLowerCase() === requestId)){
    console.log((plants.find(plant => plant.commonName.split(' ').join('').toLowerCase() === requestId)))
    response.json(plants.find(plant => plant.commonName.split(' ').join('').toLowerCase() === requestId));
  } else {
    response.status(404).sendFile(__dirname + '/404.html');
  }
});

app.listen(process.env.PORT || 2277);