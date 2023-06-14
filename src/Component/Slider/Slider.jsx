import  { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    'https://img.freepik.com/free-photo/smile-corporate-skyscraper-teeth-bare_1134-1439.jpg?w=1380&t=st=1686734014~exp=1686734614~hmac=c02bc1fa54ce07e92536b87e1c921b1bb55712955ec37e94f7d5c88ecfc202a7',
    'https://img.freepik.com/free-photo/cute-child-sunglasses-enjoys-summer-fun-indoors-generated-by-ai_188544-42184.jpg?w=1060&t=st=1686652199~exp=1686652799~hmac=bf59e970717a88e79ee55d85994501ebeb0ef4132f4be4a52a0cf8ffa81fa8e8',
    "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448751.jpg?w=996&t=st=1686659623~exp=1686660223~hmac=71f62d9bbf497ad060bf89d0049f3785385bdb2c68a0fe6f4fd09645224232ef"
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="slider-container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;