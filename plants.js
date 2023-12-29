//Creating a class to instantiate plant objects
class Plant {
  constructor(commonName, scientificName, kingdom, division, plantClass, subclass, order, family, commonFamily, genus, species, imageSrc, imageCite, duration, description, citeYear, url) {
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.classification = {kingdom, division, plantClass, subclass, order, family, commonFamily, genus, species}
    this.imageSrc = imageSrc;
    this.imageCite = imageCite;
    this.duration = duration;
    this.description = description;
    this.descriptionCite = `Illinois Department of Natural Resources. ${citeYear}. Native Plant Information. Retrieved from ${url}`;
  }
  
  lowerCaseAndRemoveSpace(prop) {
    return this[prop].toLowerCase().split(' ').join('');
  }
}

//Creating the array of plant objects
const plants = [
  new Plant('American bellflower', 'Campanulastrum americanum', 'Plantae', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Campanulales', 'Campanulaceae Juss.', 'Bellflower family', 'Campanulastrum Small', 'Campanulastrum americanum', 'https://s7d1.scene7.com/is/image/isp/fygoct2019?qlt=100&wid=900&ts=1689692279748&$ImageComponent$&fit=constrain', null, 'Annual', 'American bellflower is an annual or biennial herb. Its sap is milky. The erect stem may be branched. Leaves are arranged alternately along the stem. Each simple, lance‐shaped leaf is toothed. A single leaf may be six inches long and two inches wide. The five-petaled, pale‐blue flowers are flat and have a lighter ring at the center. The style (part of the female reproductive structures) is very long and curved. Flowers develop in a cluster on a stalk that may be one and one‐half feet long. The fruit is a club‐shaped capsule, about one‐half inch long, containing flat, brown seeds. American bellflower may attain a height of one and one‐half to six feet and may be found throughout Illinois. It grows in woodlands. Flowers are produced from June through November. White‐tailed deer may eat the leaves of this plant.', '2019', 'https://dnr.illinois.gov/education/fygmain/2019/fygoct2019.html'),
  new Plant('American Gromwell', 'Lithospermum latifolium', 'Plantae', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Lamiales', 'Boraginaceae Juss.', 'Borage family', 'Lithospermum L.', 'Lithospermum latifolium', 'https://s7d1.scene7.com/is/image/isp/fygapr2019?qlt=100&wid=900&ts=1689613784387&$ImageComponent$&fit=constrain', 'Photo © River Valley Photographic Resources Ltd.', 'Perennial', 'American gromwell grows in rich woodlands statewide. An individual plant may be one and one-half to two and one-half feet tall. Its stems and leaves are covered with small hairs. Flowers develop individually from the leaf axils at the stem tip. Flower color is yellow. The fruit is a nutlet. Long-tongued bees and butterflies are pollinators that can take advantage of the flowers.', '2019', 'https://dnr.illinois.gov/education/fygmain/2019/fygapr2019.html'),
  new Plant('Arrow Arum', 'Peltandra virginica', 'Plantae', 'Magnoliophyta', 'Liliopsida', 'Arecidae', 'Arales', 'Araceae Juss.', 'Arum family', 'Peltandra Raf.', 'Peltandra virginica', 'https://s7d1.scene7.com/is/image/isp/fygjul2022?qlt=100&wid=900&ts=1689602028963&$ImageComponent$&fit=constrain', 'Photo © John Hilty', 'Perennial', 'Arrow arum is an aquatic plant that grows in areas of shallow, standing water such as swamps and ditches. It prefers shaded water. It is present in all but the counties of far north central and northwestern Illinois. Its leaves and flower stalks emerge from the water. The plant grows 12-24 inches tall. The leaves are large and arrow-shaped. This species blooms from May through June. The flowers are on a club-shaped structure called a spadix that is surrounded by a leaflike, elongated spathe. The flowers do not have petals or sepals. Fruits are green berries. Flies are attracted by the smell from the flowers and act as pollinators as they feed on the pollen. Waterfowl and some wading birds eat the fruits.', '2022', 'https://dnr.illinois.gov/education/fygmain/2022/fygjul2022.html'),
  new Plant('Azure Aster', 'Symphyotrichum oolentangiense', 'Plantae', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Asterales', 'Asteraceae Bercht. & J. Presl', 'Aster family', 'Symphyotrichum Nees', 'Symphyotrichum oolentangiense', 'https://s7d1.scene7.com/is/image/isp/fygnov2018?qlt=100&wid=900&ts=1689692867507&$ImageComponent$&fit=constrain', 'Photo © John Hilty', 'Perennial', 'Azure aster, also known as sky blue aster, is found statewide in prairies, woodland openings and savannas. The plants grow to about three feet tall. Leaves are arranged alternately along the stem. Leaf size and leaf stalk length decrease from the base of the plant to the top. Flowers are present from August through November. Many flower heads are present at the top of the plant. Ray flowers are blue or purple. The flowers are important sources of nectar and pollen for many pollinators. The seeds and leaves also provide food for several species of wildlife.', '2018', 'https://dnr.illinois.gov/education/fygmain/2018/fygnov2018.html')];

//Creating IDs for all the plants
plants.forEach((plant, index) => plant.id = index + 1);

module.exports = plants;