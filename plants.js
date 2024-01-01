//Creating a class to instantiate plant objects
class Plant {
  constructor(commonName, scientificName, division, plantClass, subclass, order, family, commonFamily, genus, species, imageSrc, imageCite, duration, description, citeYear, url) {
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.classification = {kingdom: 'Plantae', division, plantClass, subclass, order, family, commonFamily, genus, species}
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
  new Plant('American bellflower', 'Campanulastrum americanum', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Campanulales', 'Campanulaceae Juss.', 'Bellflower family', 'Campanulastrum Small', 'Campanulastrum americanum', 'https://s7d1.scene7.com/is/image/isp/fygoct2019?qlt=100&wid=900&ts=1689692279748&$ImageComponent$&fit=constrain', null, 'Annual', 'American bellflower is an annual or biennial herb. Its sap is milky. The erect stem may be branched. Leaves are arranged alternately along the stem. Each simple, lance‐shaped leaf is toothed. A single leaf may be six inches long and two inches wide. The five-petaled, pale‐blue flowers are flat and have a lighter ring at the center. The style (part of the female reproductive structures) is very long and curved. Flowers develop in a cluster on a stalk that may be one and one‐half feet long. The fruit is a club‐shaped capsule, about one‐half inch long, containing flat, brown seeds. American bellflower may attain a height of one and one‐half to six feet and may be found throughout Illinois. It grows in woodlands. Flowers are produced from June through November. White‐tailed deer may eat the leaves of this plant.', '2019', 'https://dnr.illinois.gov/education/fygmain/2019/fygoct2019.html'), 
  new Plant('American Gromwell', 'Lithospermum latifolium', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Lamiales', 'Boraginaceae Juss.', 'Borage family', 'Lithospermum L.', 'Lithospermum latifolium', 'https://s7d1.scene7.com/is/image/isp/fygapr2019?qlt=100&wid=900&ts=1689613784387&$ImageComponent$&fit=constrain', 'Photo © River Valley Photographic Resources Ltd.', 'Perennial', 'American gromwell grows in rich woodlands statewide. An individual plant may be one and one-half to two and one-half feet tall. Its stems and leaves are covered with small hairs. Flowers develop individually from the leaf axils at the stem tip. Flower color is yellow. The fruit is a nutlet. Long-tongued bees and butterflies are pollinators that can take advantage of the flowers.', '2019', 'https://dnr.illinois.gov/education/fygmain/2019/fygapr2019.html'), 
  new Plant('Arrow Arum', 'Peltandra virginica', 'Magnoliophyta', 'Liliopsida', 'Arecidae', 'Arales', 'Araceae Juss.', 'Arum family', 'Peltandra Raf.', 'Peltandra virginica', 'https://s7d1.scene7.com/is/image/isp/fygjul2022?qlt=100&wid=900&ts=1689602028963&$ImageComponent$&fit=constrain', 'Photo © John Hilty', 'Perennial', 'Arrow arum is an aquatic plant that grows in areas of shallow, standing water such as swamps and ditches. It prefers shaded water. It is present in all but the counties of far north central and northwestern Illinois. Its leaves and flower stalks emerge from the water. The plant grows 12-24 inches tall. The leaves are large and arrow-shaped. This species blooms from May through June. The flowers are on a club-shaped structure called a spadix that is surrounded by a leaflike, elongated spathe. The flowers do not have petals or sepals. Fruits are green berries. Flies are attracted by the smell from the flowers and act as pollinators as they feed on the pollen. Waterfowl and some wading birds eat the fruits.', '2022', 'https://dnr.illinois.gov/education/fygmain/2022/fygjul2022.html'), 
  new Plant('Azure Aster', 'Symphyotrichum oolentangiense', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Asterales', 'Asteraceae Bercht. & J. Presl', 'Aster family', 'Symphyotrichum Nees', 'Symphyotrichum oolentangiense', 'https://s7d1.scene7.com/is/image/isp/fygnov2018?qlt=100&wid=900&ts=1689692867507&$ImageComponent$&fit=constrain', 'Photo © John Hilty', 'Perennial', 'Azure aster, also known as sky blue aster, is found statewide in prairies, woodland openings and savannas. The plants grow to about three feet tall. Leaves are arranged alternately along the stem. Leaf size and leaf stalk length decrease from the base of the plant to the top. Flowers are present from August through November. Many flower heads are present at the top of the plant. Ray flowers are blue or purple. The flowers are important sources of nectar and pollen for many pollinators. The seeds and leaves also provide food for several species of wildlife.', '2018', 'https://dnr.illinois.gov/education/fygmain/2018/fygnov2018.html'), 
  new Plant('Big bluestem', 'Andropogon gerardii', 'Magnoliophyta', 'Liliopsida', 'Commelinidae', 'Cyperales', 'Poaceae Barnhart', 'Grass family', 'Andropogon L.', 'Andropogon gerardii', 'https://s7d1.scene7.com/is/image/isp/bnbigblue?qlt=100&wid=600&ts=1689704368676&$ImageComponent$&fit=constrain', null, 'Perennial', 'You may not consider winter as a time to think about or be impressed by the plants in your garden. Winter gardens can be beautiful, though, and provide important habitat for wildlife. As you plan for your garden this year, consider including some native grasses. Leaving them year round can be a pleasing experience for you, and they require very little maintenance. Native prairie grasses are resistant to cold and drought and are rarely attacked by disease and insects. They are perennials that you can enjoy year after year. Big bluestem is the State Prairie Grass of Illinois. It can grow to a height of six to eight feet. In summer, the leaves are blue-green, thus this plant\'s common name. In fall the leaves turn yellow and bronze. Recommended to be planted far enough from other plants in your garden to give them room to grow and to avoid entanglements with other plants. Since these are tall plants, the back of the garden is a good place for them.', '2008', 'https://dnr.illinois.gov/education/fygmain/2008/fygjan2008.html'), 
  new Plant('Black-eyed Susan', 'Rudbeckia hirta', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Asterales', 'Asteraceae Bercht. & J. Presl', 'Aster family', 'Rudbeckia L.', 'Rudbeckia hirta L.', 'https://s7d1.scene7.com/is/image/isp/bnbesusan?qlt=100&wid=900&ts=1689703803893&$ImageComponent$&fit=constrain', null, 'Annual, Biennial, or Perennial', 'Black-eyed Susan can be found in moist prairies, open woods, pastures, fields, roadsides and savannas in the eastern half of the state. This plant has upright, hairy stems. The simple, lance‐shaped leaves are arranged alternately along the stem. Each hairy leaf has teeth that are widely spaced along the margin. Flowering occurs from June through October. One flower head is produced per plant, although sometimes the plant branches near the base and produces one flower per stem. The flower head contains many small flowers that are of two types: yellow ray flowers (10 to 20 per flower head), about three-fourths inch long; and purple‐brown, tubular flowers in the dome‐shaped center. Some individual plants may have pale‐yellow ray flowers with white tips. Each flower head is about two and one‐half to two and three‐fourths inches wide. This plant may grow to a height of two to three feet. Black-eyed Susan is a short-lived perennial or a biennial (living two years). It readily grows from its seeds, though. The flower heads attract a variety of pollinating insects.', '2017', 'https://dnr.illinois.gov/education/fygmain/2017/fygsep2017.html'), 
  new Plant('Blackhaw', 'Viburnum prunifolium', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Dipsacales', 'Caprifoliaceae Juss.', 'Honeysuckle family', 'Viburnum L.', 'Viburnum prunifolium L.', 'https://s7d1.scene7.com/is/image/isp/fygsep2013?qlt=100&wid=900&ts=1689600643119&$ImageComponent$&fit=constrain', null, 'Perennial', 'Blackhaw is a small tree that grows along streams, in woods and on wooded slopes throughout Illinois. It may reach a height of 25 feet with a diameter of six inches. The bark is red-brown with many fissures. Its leaves are simple and arranged oppositely on the stem. A single leaf may be up to three inches long and two inches wide. The leaf edge is very finely toothed. Flowers are produced from April through June. These white flowers form in broad, rounded clusters. The resulting blue-black fruits are fleshy, contain one seed and are readily eaten by wildlife. Fall leaf colors on this small tree are outstanding.', '2013', 'https://dnr.illinois.gov/education/fygmain/2013/fygsep2013.html'), 
  new Plant('Blazing star', 'Liatris spicata', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Asterales', 'Asteraceae Bercht. & J. Presl', 'Aster family', 'Liatris Gaertn. ex Schreb.', 'Liatris spicata (L.)', 'https://s7d1.scene7.com/is/image/isp/bnroughbstar?qlt=100&wid=900&ts=1689884463915&$ImageComponent$&fit=constrain', null, 'Perennial', 'There are several species of blazing-star native to Illinois. Their tall spikes of purple flowers can be seen throughout the state from July until late fall. Most commonly associated with prairies, blazing-star varieties are also adapted to savannas, open woods, wet meadows, fens and sandy areas. The plants can grow to a height of about five feet. The stem is unbranched and is covered with a spiral of long, narrow leaves. The plant grows from a corm, an underground stem with scaly leaves that is similar in appearance to a bulb.', '2008', 'https://dnr.illinois.gov/education/fygmain/2008/fygsep2008.html'), 
  new Plant('Bloodroot', 'Sanguinaria canadensis', 'Magnoliophyta', 'Magnoliopsida', 'Magnoliidae', 'Papaverales', 'Papaveraceae Juss.', 'Poppy family', 'Sanguinaria L.', 'Sanguinaria canadensis L.', 'https://s7d1.scene7.com/is/image/isp/fygmar2011?qlt=100&wid=900&ts=1689617320297&$ImageComponent$&fit=constrain', 'Photo © River Valley Photographic Resources, Ltd.', 'Perennial', 'Bloodroot blooms from March through April in rich woodlands throughout Illinois. This plant is a member of the poppy family. When broken, the stem produces an orange-red sap. As the plant’s stem grows underground, its common name is “bloodroot.” The lobed leaf wraps around the flower stalk. The plant grows from six to 12 inches tall and produces a prominent white flower. The rhizomes of this plant slowly spread, and after a few years a small colony of the plants can develop.', '2011', 'https://dnr.illinois.gov/education/fygmain/2011/fygmar2011.html'), 
  new Plant('Blue cohosh', 'Caulophyllum thalictroides', 'Magnoliophyta', 'Magnoliopsida', 'Magnoliidae', 'Ranunculales', 'Berberidaceae Juss.', 'Barberry family', 'Caulophyllum Michx.', 'Caulophyllum thalictroides (L.) Michx.', 'https://s7d1.scene7.com/is/image/isp/fygmar2021?qlt=100&wid=600&ts=1689691895765&$ImageComponent$&fit=constrain', 'Photo © River Valley Photographic Resources Ltd., rvprltd.com', 'Perennial', 'Blue cohosh grows statewide in moist woods. Flowers are produced in April and May. The flowers are six-parted and are green-yellow to brown. Its fruits are dark-blue berries. The leaves have seven to nine leaflets. A single plant may be one to three feet tall. The flowers attract pollinators, and the fruits are eaten by wildlife, particularly birds.', '2021', 'https://dnr.illinois.gov/education/fygmain/2021/fygmar2021.html'), 
  new Plant('Blue vervain', 'Verbena hastata', '	Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Lamiales', 'Verbenaceae J. St.-Hil.', 'Verbena family', 'Verbena L.', 'Verbena hastata L.', 'https://s7d1.scene7.com/is/image/isp/fygapr2016?qlt=100&wid=900&ts=1701120339019&$ImageComponent$&fit=constrain', null, 'Perennial', 'Blue vervain is found throughout Illinois in moist woodlands, moist prairies and moist disturbed areas. Flowering occurs from June through October. The blue-to-purple flowers develop on small spikes. Flowers mature first at the bottom of each spike and blooming progresses upward to the tip of the spike. The stem is four-sided and grooved. This plant may reach a height of six feet.  It is a good species for pollinators.', '2016', 'https://dnr.illinois.gov/education/fygmain/2016/fygapr2016.html'), 
  new Plant('Bluebells', 'Mertensia virginica', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Lamiales', 'Boraginaceae Juss.', 'Borage family', 'Mertensia Roth', 'Mertensia virginica (L.)', 'https://s7d1.scene7.com/is/image/isp/fygfeb2013?qlt=100&wid=900&ts=1689611832420&$ImageComponent$&fit=constrain', null, 'Perennial', 'Bluebells, also known as Virginia cowslip or mertensia, grow in moist woods and floodplain forests throughout Illinois. Flowers are present from March through June. Flowers are generally blue in color, although white flowers and rose-colored flowers are sometimes present. The flower bud is pink. Like all members of the forget-me-not family, the flowers are produced at the top of the stem, on one side of the stem. Flowers are large and tubular. They hang so that the flower opening faces the ground. The leaves are arranged alternately on the stem. Each leaf is oval and smooth. The plant grows to one to two feet in height.', '2013', 'https://dnr.illinois.gov/education/fygmain/2013/fygfeb2013.html'), 
  new Plant('Blue-eyed Mary', 'Collinsia verna', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Scrophulariales', 'Scrophulariaceae Juss.', 'Figwort family', 'Collinsia Nutt.', '	Collinsia verna Nutt.', 'https://s7d1.scene7.com/is/image/isp/fygjun2010?qlt=100&wid=900&ts=1700593692115&$ImageComponent$&fit=constrain', 'Photo © 2009, River Valley Photographic Resources, Ltd., rvprltd.com', 'Annual', 'Blue-eyed Mary grows statewide in Illinois in rich woods. A member of the snapdragon family, this species blooms from April through June. The distinctive flowers have upper lobes that are white and lower lobes that are bright blue. The plant may grow to 24 inches tall. Leaves are lance-shaped and arranged oppositely on the stem.', '2010', 'https://dnr.illinois.gov/education/fygmain/2010/fygjun2010.html'), 
  new Plant('Browneyed Susan', 'Rudbeckia triloba L.', 'Magnoliophyta', 'Magnoliopsida', '	Asteridae', 'Asterales', 'Asteraceae Bercht. & J. Presl', 'Aster family', 'Rudbeckia L.', 'Rudbeckia triloba L.', 'https://s7d1.scene7.com/is/image/isp/fygmar2016?qlt=100&wid=900&ts=1701120038975&$ImageComponent$&fit=constrain', null, 'Perennial', 'Brown-eyed Susan is found throughout Illinois in fields, woodlands and along streams. Flowering occurs from June through October. Numerous flowers are produced per plant. The petallike ray flowers are yellow and surround the cone-shaped, dark brown center. Leaves are arranged alternately on the stem. The plant may reach a height of five feet. The flowers of this plant are important to pollinator species.', '2016', 'https://dnr.illinois.gov/education/fygmain/2016/fygmar2016.html'), 
  new Plant('Butterfly Milkweed', 'Asclepias tuberosa', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Gentianales', 'Asclepiadaceae Borkh.', 'Milkweed family', 'Asclepias L.', 'Asclepias tuberosa L.', 'https://s7d1.scene7.com/is/image/isp/bnbutterweed?qlt=100&wid=900&ts=1689704438410&$ImageComponent$&fit=constrain', null, 'Perennial', 'The flowers of butterfly-weed can be seen in the woods, prairies and savannas of Illinois from May through September. It grows particularly well in sandy soil. Typically the flowers are orange, but they can also be shades of yellow and red. The stems are hairy with leaves generally alternate, but leaves may be opposite on the upper part of the stem. The plant grows to a height of two to three feet. The sap of this species is clear, unlike the white sap of other milkweeds. The seed pods are five to six inches in length. As its common name indicates, the plant attracts butterflies as a food source for both adults and larvae.', '2013', 'https://dnr.illinois.gov/education/fygmain/2013/fygjul2013.html'), 
  new Plant('Buttonbush', 'Cephalanthus occidentalis', 'Magnoliophyta', '	Magnoliopsida', 'Asteridae', 'Rubiales', '	Rubiaceae Juss.', 'Madder family', 'Cephalanthus L.', 'Cephalanthus occidentalis L.', 'https://s7d1.scene7.com/is/image/isp/fygdec2013?qlt=100&wid=600&ts=1689604005516&$ImageComponent$&fit=constrain', null, 'Perennial', 'Buttonbush is a shrub that grows in wet areas throughout the state. It usually reaches a height in the range of three to eight feet. Flowering occurs in June, July and August. The flowers are white, tiny and arranged in a sphere that is one to one and a half inches in diameter. The leaves may be up to eight inches long and three inches wide. The leaves are dark green on the surface and arranged in pairs or whorls of three or four. The fruit is a red-brown nutlet. Nutlets develop in clusters.', '2013', 'https://dnr.illinois.gov/education/fygmain/2013/fygdec2013.html'), 
  new Plant('Calico Aster', 'Symphyotrichum lateriflorum', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Asterales', '	Asteraceae Bercht. & J. Presl', 'Aster family', '	Symphyotrichum Nees', 'Symphyotrichum lateriflorum (L.) Á. Löve & D. Löve', 'https://s7d1.scene7.com/is/image/isp/fygoct2022?qlt=100&wid=900&ts=1689691176042&$ImageComponent$&fit=constrain', null, 'Perennial', 'Calico aster grows in moist soils statewide. It reaches a height of one to three feet. The stems are light green or dark red-brown and have white hairs on them. Leaves grow alternately on the stem and become smaller from the bottom to the top of the stem. Leaf shape varies. Flower heads develop in clusters on the upper stem tips and some of the side stem tips. Blooming occurs from August through October. Each flower head has 8-12 ray flowers around a center of disk flowers. The disk flowers are yellow initially but change to brown or purple-red. The ray flowers are white. The fruit is an achene, a simple dry fruit that does not open at maturity. The achenes have small tufts of white hairs. Many species of insects are attracted to the flowers. The seeds are eaten by songbirds and game birds in winter.', '2022', 'https://dnr.illinois.gov/education/fygmain/2022/fygoct2022.html'), 
  new Plant('Canada Milkvetch', 'Astragalus canadensis', 'Magnoliophyta', 'Magnoliopsida', 'Rosidae', 'Fabales', 'Fabaceae Lindl.', 'Pea family', 'Astragalus L.', '	Astragalus canadensis L.', 'https://s7d1.scene7.com/is/image/isp/fygaug2020?qlt=100&wid=600&ts=1689691768831&$ImageComponent$&fit=constrain', 'Photo © John Hilty', 'Perennial', 'Canada milk vetch is a perennial herb. Its pinnately compound leaves have small, oval leaflets in seven to 15 pairs. Leaves are arranged alternately along the stems. The five‐petaled, pealike flowers are pale yellow or white. The fruit is a pod that contains seeds. This plant grows to about four feet in height. Canada milk vetch may be found throughout Illinois. It grows in prairies and thickets. Flowers are produced from June through August. It is a good species for pollinators.', '2020', 'https://dnr.illinois.gov/education/fygmain/2020/fygaug2020.html'), 
  new Plant('Cardinalflower', 'Lobelia cardinalis', '	Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Campanulales', '	Campanulaceae Juss.', 'Bellflower family', 'Lobelia L.', 'Lobelia cardinalis L.', 'https://s7d1.scene7.com/is/image/isp/fygjul2008?qlt=100&wid=900&ts=1689600598803&$ImageComponent$&fit=constrain', null, 'Perennial', 'The brilliant red blossoms of cardinal-flower are present from July through October. Each flower may be two inches long, and the flower has an upper two-lobed lip and a lower three-lobed lip. This plant naturally grows in marshes, wet meadows, wet prairies and along streams, ponds and lakes, so you will want to be sure that there is plenty of soil moisture available where you plant it. The cardinal-flower plant can grow very tall if conditions are favorable. Leaves are arranged alternately on the stem. The leaves and stem are usually fuzzy. A single leaf may be up to eight inches long and two and one-half inches wide. Cardinal-flower can be found throughout Illinois.', '2008', 'https://dnr.illinois.gov/education/fygmain/2008/fygjul2008.html'), 
  new Plant('Carolina Rose', 'Rosa carolina', 'Magnoliophyta', 'Magnoliopsida', 'Rosidae', 'Rosales', 'Rosaceae Juss.', 'Rose family', 'Rosa L.', 'Rosa carolina L.', 'https://s7d1.scene7.com/is/image/isp/fygjul2015?qlt=100&wid=900&ts=1701106593916&$ImageComponent$&fit=constrain', null, 'Perennial', 'Carolina rose, also known as pasture rose, grows in prairies, upland woods and fields throughout Illinois. It may attain a height of one to three feet, although it typically is a low-growing plant. Flowers are produced from May through July. Each flower contains five pink petals and five green sepals. The leaves are compound and composed of three to seven leaflets. Leaves are arranged alternately along the stem. Thin, straight thorns in pairs are present at the leaf base. Fruits are red, spherical "hips" that can provide food for wildlife in the fall and winter.', '2015', 'https://dnr.illinois.gov/education/fygmain/2015/fygjul2015.html'), 
  new Plant('Celandine Poppy', 'Stylophorum diphyllum', 'Magnoliophyta', 'Magnoliopsida', 'Magnoliidae', 'Papaverales', '	Papaveraceae Juss.', 'Poppy family', 'Stylophorum Nutt.', 'Stylophorum diphyllum (Michx.) Nutt.', 'https://s7d1.scene7.com/is/image/isp/fygmar2008?qlt=100&wid=900&ts=1689613869397&$ImageComponent$&fit=constrain', null, 'Perennial', 'Celandine poppy, or wood poppy, is a perennial plant with hairy stems that grow to about one foot in height. The stems have yellow sap that was commonly used as a dye by Native Americans. Leaves grow from the base of the plant and along the stem. The hairy leaves are pinnately lobed, with each leaf up to about 10 inches long. Flowers arise in clusters of up to four at the stem tip. There are four yellow petals per flower, and each flower may be two inches wide. The fruit is a hairy capsule, up to one inch long. Celandine poppy grows in naturally in the rich wet woods of the southern one-fourth of Illinois as well as in Vermilion and Cook counties. Flowers are produced from March through May.', '2008', 'https://dnr.illinois.gov/education/fygmain/2008/fygmar2008.html'), 
  new Plant('Christmas Fern', 'Polystichum acrostichoides', 'Pteridophyta', 'Filicopsida', null, 'Polypodiales', 'Dryopteridaceae Herter', 'Wood Fern family', 'Polystichum Roth', 'Polystichum acrostichoides (Michx.) Schott', 'https://s7d1.scene7.com/is/image/isp/fygjan2009?qlt=100&wid=900&ts=1700581224902&$ImageComponent$&fit=constrain', null, 'Perennial', 'The Christmas fern is a perennial plant that retains green foliage all year. The leaves may grow to about 20 inches in length. Each of the pinnae, units of the blade or leaf, is lance- or oblong-shaped. Pinnae are smooth on the upper surface, have tiny serrations along the edge and have a projection at the base. The pinnae at the bottom of the blade are larger than those at the top and are sterile. More than 30 pairs of pinnae may be present per leaf. Christmas fern grows naturally in Illinois woodlands in the southern two-thirds of the state, often associated with areas where rocks are present. It is a good choice for a shaded rock garden. It is called "Christmas" fern because it was gathered and used by pioneers for decorations during the holiday season.', '2009', 'https://dnr.illinois.gov/education/fygmain/2009/fygjan2009.html'), 
  new Plant('Closed Bottle Gentian', 'Gentiana andrewsii', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Gentianales', 'Gentianaceae Juss.', 'Gentian family', 'Gentiana L.', 'Gentiana andrewsii Griseb.', 'https://s7d1.scene7.com/is/image/isp/fygsep2020?qlt=100&wid=600&ts=1689614342718&$ImageComponent$&fit=constrain', 'Photo © John Hilty', 'Perennial', 'Closed gentian is a perennial herb. Its sessile leaves are oval to lance‐shaped with a point at the tip. The simple, entire leaves are arranged opposite each other on the stem. The flowers have deep‐blue to violet petals that remain closed or nearly closed. The petals are connected by a white membrane that sticks out slightly beyond their tips. Flowers are arranged either in a cluster at the stem tip or in the upper leaf axils. The fruit is a capsule that contains seeds. Closed gentian may grow to a height of one to two feet. This species may be found statewide, although it is more commonly seen in the northern one‐half of Illinois than in the southern one‐half. It grows in moist woods and wet prairies. Flowers are produced from August through October.', '2020', 'https://dnr.illinois.gov/education/fygmain/2020/fygsep2020.html'), 
  new Plant('Red Columbine', 'Aquilegia canadensis', 'Magnoliophyta', 'Magnoliopsida', '	Magnoliidae', 'Ranunculales', '	Ranunculaceae Juss.', 'Buttercup family', 'Aquilegia L.', '	Aquilegia canadensis L.', 'https://s7d1.scene7.com/is/image/isp/fygmay2008?qlt=100&wid=900&ts=1689691947888&$ImageComponent$&fit=constrain', null, 'Perennial', 'Growing from thick roots, the upright, branched stems of columbine may reach two feet in height. This perennial plant has leaves at the base of the plant that are doubly compound, while the leaves on the upper stems are divided and do not have stalks. Flowers are produced in clusters at the stem tip, and a single flower may be two and one-half inches long on a slender stalk. The five petals are projected backwards into five hollow spurs that are red outside and yellow inside. The genus name Aquilegia refers to “eagle,” and the five spurs resemble an eagle\'s claws. Columbine grows in rocky woods statewide and flowers from mid-April to July.', '2008', 'https://dnr.illinois.gov/education/fygmain/2008/fygmay2008.html'), 
  new Plant('Common Boneset', 'Eupatorium perfoliatum', '	Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Asterales', '	Asteraceae Bercht. & J. Presl', 'Aster family', 'Eupatorium L.', '	Eupatorium perfoliatum L.', 'https://s7d1.scene7.com/is/image/isp/fygmar2017?qlt=100&wid=900&ts=1689603194189&$ImageComponent$&fit=constrain', null, 'Perennial', 'Common boneset is also known as perfoliate boneset.  Found statewide, this species thrives in swamps, wet meadows, wet prairies, sloughs, around ponds and lakes and along streams. This plant has white, hairy stems that may grow to five feet tall. The lance-shaped leaves are arranged opposite each other on the stem. Leaves are white, hairy, toothed, up to six inches long and up to two inches broad. Flowers are produced from July through October. They develop in small heads with five white petals per flower. Petals form a tube. Fruits are single seeds about one-tenth inch long, each with a tuft of white bristles.', '2017', 'https://dnr.illinois.gov/education/fygmain/2017/fygmar2017.html'), 
  new Plant('Common Milkweed', 'Asclepias syriaca', '	Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Gentianales', 'Asclepiadaceae Borkh.', 'Milkweed family', 'Asclepias L.', 'Asclepias syriaca L.', 'https://s7d1.scene7.com/is/image/isp/bncmilkweed?qlt=100&wid=900&ts=1689704614218&$ImageComponent$&fit=constrain', null, 'Perennial', 'Common milkweed grows in fields, roadsides and prairie edges throughout Illinois. Flowering occurs from May through August. The flowers may be purple-brown, rose or purple-pink. Flowers are produced in a cluster at the stem tip and from the leaf axils of the upper leaves. Although there are many flowers in a cluster, usually only a few of them are pollinated. The pollinated flowers develop into large pods that contain seeds attached to silky plumes. Common milkweed pods are easily identified by the many projections on their surface. These plants may grow to nearly five feet tall. Their leaves are arranged oppositely on the stem. Each leaf may be up to eight inches long and 4.5 inches wide. The veins in the leaves usually have a pink tinge. The stem is generally not branched and is covered with small hairs. The sap of common milkweed is white. Monarch butterfly larvae are among the few organisms that are able to eat milkweed leaves. Many pollinators are attracted to the flowers, however.', '2014', 'https://dnr.illinois.gov/education/fygmain/2014/fygaug2014.html'), 
  new Plant('Common Mountainmint', 'Pycnanthemum virginianum', 'Magnoliophyta', 'Magnoliopsida', 'Asteridae', 'Lamiales', '	Lamiaceae Martinov', 'Mint family', 'Pycnanthemum Michx. ', 'Pycnanthemum virginianum (L.) T. Dur. & B.D. Jacks. ex B.L. Rob. & Fernald', 'https://s7d1.scene7.com/is/image/isp/bnmountainmint?qlt=100&wid=900&ts=1689881970445&$ImageComponent$&fit=constrain', null, 'Perennial', 'Common mountain mint grows in fens, marshes and prairies throughout Illinois, although it is more frequently found in the northern one-half of the state. It blooms from July through September. The flowers are white, small and produced in clusters at the stem tip. Only a few flowers bloom in each cluster at one time. Leaves are narrow, smooth and without teeth along the edge. Like all mints, it has a square stem. This plant grows one and one-half to two feet in height. It attracts a variety of pollinators.', '2016', 'https://dnr.illinois.gov/education/fygmain/2016/fygaug2016.html')];

//Creating IDs for all the plants
plants.forEach((plant, index) => plant.id = index + 1);

module.exports = plants;