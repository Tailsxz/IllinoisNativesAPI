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
  new Plant('Azure Aster', 'Symphyotrichum oolentangiense', 'Plantae', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Asterales', 'Asteraceae Bercht. & J. Presl', 'Aster family', 'Symphyotrichum Nees', 'Symphyotrichum oolentangiense', 'https://s7d1.scene7.com/is/image/isp/fygnov2018?qlt=100&wid=900&ts=1689692867507&$ImageComponent$&fit=constrain', 'Photo © John Hilty', 'Perennial', 'Azure aster, also known as sky blue aster, is found statewide in prairies, woodland openings and savannas. The plants grow to about three feet tall. Leaves are arranged alternately along the stem. Leaf size and leaf stalk length decrease from the base of the plant to the top. Flowers are present from August through November. Many flower heads are present at the top of the plant. Ray flowers are blue or purple. The flowers are important sources of nectar and pollen for many pollinators. The seeds and leaves also provide food for several species of wildlife.', '2018', 'https://dnr.illinois.gov/education/fygmain/2018/fygnov2018.html'),
  new Plant('Big bluestem', 'Andropogon gerardii', 'Plantae', 'Magnoliophyta', 'Liliopsida', 'Commelinidae', 'Cyperales', 'Poaceae Barnhart', 'Grass family', 'Andropogon L.', 'Andropogon gerardii', 'https://s7d1.scene7.com/is/image/isp/bnbigblue?qlt=100&wid=600&ts=1689704368676&$ImageComponent$&fit=constrain', null, 'Perennial', 'You may not consider winter as a time to think about or be impressed by the plants in your garden. Winter gardens can be beautiful, though, and provide important habitat for wildlife. As you plan for your garden this year, consider including some native grasses. Leaving them year round can be a pleasing experience for you, and they require very little maintenance. Native prairie grasses are resistant to cold and drought and are rarely attacked by disease and insects. They are perennials that you can enjoy year after year. Big bluestem is the State Prairie Grass of Illinois. It can grow to a height of six to eight feet. In summer, the leaves are blue-green, thus this plant\'s common name. In fall the leaves turn yellow and bronze. Recommended to be planted far enough from other plants in your garden to give them room to grow and to avoid entanglements with other plants. Since these are tall plants, the back of the garden is a good place for them.', '2008', 'https://dnr.illinois.gov/education/fygmain/2008/fygjan2008.html'), 
  new Plant('Black-eyed Susan', 'Rudbeckia hirta', 'Plantae', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Asterales', 'Asteraceae Bercht. & J. Presl', 'Aster family', 'Rudbeckia L.', 'Rudbeckia hirta L.', 'https://s7d1.scene7.com/is/image/isp/bnbesusan?qlt=100&wid=900&ts=1689703803893&$ImageComponent$&fit=constrain', null, 'Perennial', 'Black-eyed Susan can be found in moist prairies, open woods, pastures, fields, roadsides and savannas in the eastern half of the state. This plant has upright, hairy stems. The simple, lance‐shaped leaves are arranged alternately along the stem. Each hairy leaf has teeth that are widely spaced along the margin. Flowering occurs from June through October. One flower head is produced per plant, although sometimes the plant branches near the base and produces one flower per stem. The flower head contains many small flowers that are of two types: yellow ray flowers (10 to 20 per flower head), about three-fourths inch long; and purple‐brown, tubular flowers in the dome‐shaped center. Some individual plants may have pale‐yellow ray flowers with white tips. Each flower head is about two and one‐half to two and three‐fourths inches wide. This plant may grow to a height of two to three feet. Black-eyed Susan is a short-lived perennial or a biennial (living two years). It readily grows from its seeds, though. The flower heads attract a variety of pollinating insects.', '2017', 'https://dnr.illinois.gov/education/fygmain/2017/fygsep2017.html'),
  new Plant('Blackhaw', 'Viburnum prunifolium', 'Plantae', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Dipsacales', 'Caprifoliaceae Juss.', 'Honeysuckle family', 'Viburnum L.', 'Viburnum prunifolium L.', 'https://s7d1.scene7.com/is/image/isp/fygsep2013?qlt=100&wid=900&ts=1689600643119&$ImageComponent$&fit=constrain', null, 'Perennial', 'Blackhaw is a small tree that grows along streams, in woods and on wooded slopes throughout Illinois. It may reach a height of 25 feet with a diameter of six inches. The bark is red-brown with many fissures. Its leaves are simple and arranged oppositely on the stem. A single leaf may be up to three inches long and two inches wide. The leaf edge is very finely toothed. Flowers are produced from April through June. These white flowers form in broad, rounded clusters. The resulting blue-black fruits are fleshy, contain one seed and are readily eaten by wildlife. Fall leaf colors on this small tree are outstanding.', '2013', 'https://dnr.illinois.gov/education/fygmain/2013/fygsep2013.html'),
  new Plant('Blazing star', 'Liatris spicata', 'Plantae', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Asterales', 'Asteraceae Bercht. & J. Presl', 'Aster family', 'Liatris Gaertn. ex Schreb.', 'Liatris spicata (L.)', 'https://s7d1.scene7.com/is/image/isp/bnroughbstar?qlt=100&wid=900&ts=1689884463915&$ImageComponent$&fit=constrain', null, 'Perennial', 'There are several species of blazing-star native to Illinois. Their tall spikes of purple flowers can be seen throughout the state from July until late fall. Most commonly associated with prairies, blazing-star varieties are also adapted to savannas, open woods, wet meadows, fens and sandy areas. The plants can grow to a height of about five feet. The stem is unbranched and is covered with a spiral of long, narrow leaves. The plant grows from a corm, an underground stem with scaly leaves that is similar in appearance to a bulb.', '2008', 'https://dnr.illinois.gov/education/fygmain/2008/fygsep2008.html'), 
  new Plant('Bloodroot', 'Sanguinaria canadensis', 'Plantae', 'Magnoliophyta', 'Magnoliopsida', 'Magnoliidae', 'Papaverales', 'Papaveraceae Juss.', 'Poppy family', 'Sanguinaria L.', 'Sanguinaria canadensis L.', 'https://s7d1.scene7.com/is/image/isp/fygmar2011?qlt=100&wid=900&ts=1689617320297&$ImageComponent$&fit=constrain', 'Photo © River Valley Photographic Resources, Ltd.', 'Perennial', 'Bloodroot blooms from March through April in rich woodlands throughout Illinois. This plant is a member of the poppy family. When broken, the stem produces an orange-red sap. As the plant’s stem grows underground, its common name is “bloodroot.” The lobed leaf wraps around the flower stalk. The plant grows from six to 12 inches tall and produces a prominent white flower. The rhizomes of this plant slowly spread, and after a few years a small colony of the plants can develop.', '2011', 'https://dnr.illinois.gov/education/fygmain/2011/fygmar2011.html')];

//Creating IDs for all the plants
plants.forEach((plant, index) => plant.id = index + 1);

module.exports = plants;