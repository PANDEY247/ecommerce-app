import './Featured.css';
import Card from '../Card/Card';

export const FeaturedProduct = () => {
  const data = [
    {
      id: 1,
      img:
        'https://img.freepik.com/free-photo/perky-girl-stylish-glasses-stares-amazement-walking-pink-wall-brunette-culottes-orange-blouse-posing-with-red-handbag_197531-14254.jpg?w=900&t=st=1686711006~exp=1686711606~hmac=2db75c1f9554a4a51e26d8eb5ac3749f73dca381150590fe40b438f06f98d06f',
    
      title: 'Stylish orange top',
      isNew: 'Tops',
      oldPrice: 700,
      price: 642,
    },
    // ... rest of the data objects ...
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/cute-young-girl-with-dark-wavy-hairstyle-bright-makeup-silk-dress-black-jacket-holding-sunglasses-hands-looking-away-against-beige-building-wall_197531-24462.jpg?w=900&t=st=1686711676~exp=1686712276~hmac=bca46bf0f83461dbbb144c10aca76f879231c8d0f93910290dbe999b7f056896",
      title: "black casual top",
      isNew: "True",
      oldPrice: 880,
      price: 712,
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/full-length-attractive-female-athlete-wearing-sportswear-smiling-while-carrying-gym-bag-confident-young-woman-with-toned-abs_662251-977.jpg?w=360&t=st=1686712725~exp=1686713325~hmac=eb4b47a09886ceffed77a3ba445bf11f3bc1105389cc31d9183b9d7c61a72bc4",
      title: "dry fit lower -tshirt set",
      isNew: "True",
      oldPrice: 1000,
      price: 772,
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/enchanting-blinde-woman-trendy-knitted-sweater-expressing-happiness-indoor-portrait-charming-european-woman-standing-orange_197531-12473.jpg?t=st=1686711655~exp=1686712255~hmac=a42c8184be83375459cdd81c1009f2c43b47607781042bc1d72a01119110ef26",
      title: "sweter-Winter collection",
      isNew: "False",
      oldPrice: 1100,
      price: 512,
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/young-handsome-man-posing_144627-28067.jpg?w=360&t=st=1686711936~exp=1686712536~hmac=53121a80034c69ab5e452b91240829a9347b67581d21764b35cf7bf471186e4a",
      title: "sharp tshirt",
      isNew: "True",
      oldPrice: 770,
      price: 552,
    },
    {
      id: 6,
      img: "https://img.freepik.com/free-photo/attractive-young-man-sunglasses-holding-coconut-cocktail_171337-19017.jpg?w=900&t=st=1686711999~exp=1686712599~hmac=5ba453cd065f9c1f86f8a4571ce2336078fb0a80493c832336a3030d67dbb66d",
      title: "cocktail tshirt",
      isNew: "True",
      oldPrice: 950,
      price: 666,
    },
    {
      id: 7,
      img: "https://img.freepik.com/free-photo/black-professional-black-basketball-player-action-basketball-court_613910-7915.jpg?w=900&t=st=1686712502~exp=1686713102~hmac=1af0d0c35d696a95f50c04d3f8f68749613dcb4b61cf0bb567050b3b162bc27d",
      title: "sport sleveless tshirt",
      isNew: "True",
      oldPrice: 990,
      price: 882,
    },
    {
      id: 8,
      img: "https://img.freepik.com/free-photo/soft-image-beautiful-happy-stylish-hipster-girl-straw-hat_343629-218.jpg?w=740&t=st=1686712112~exp=1686712712~hmac=2be3ddd0e0a0b8905b56a60eb3a1d120374fd1800e9bdea6ae6062b4923ef197",
      title: "",
      isNew: "true",
      oldPrice: 890,
      price: 712,
    },
    {
      id: 9,
      img: "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448792.jpg?w=360&t=st=1686712181~exp=1686712781~hmac=44a4207eca1098e9fd4d47f9c13cbffbc6ba50569ef02b3cb4bb1df55ddeca4e",
      title: " plain white tshirt",
      oldPrice: 660,
      price: 665,
    },


    {
      id: 10,
      img:
        'https://img.freepik.com/free-photo/muscular-handsome-bodybuilder-sportswear-with-rucksack-posing-against-gray-background_613910-19675.jpg?w=900&t=st=1686712406~exp=1686713006~hmac=5f7bd18954f9c36affaecf5b6d9b4df9471ec0b611dd68a83a11fd4462aa1177',
      title: 'dry fit tshirt',
      isNew: 'true',
      oldPrice: 10,
      price: 12,
    },
  ];

  return (
    <div className="top">
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
