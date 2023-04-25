import React from "react";
import SunLogo from "../assets/sunLogo.svg";
import {
  Image,
  Flex,
  Heading,
  Icon,
  Box,
  Center,
  AspectRatio,
  Text,
} from "@chakra-ui/react";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import Slider from "react-slick";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import VideoCard from "../components/VideoCard";

const Testimonials = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const container: React.CSSProperties = {
    display: "flex",
    background: "cornsilk",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    margin: "0 auto",
  };
  const settings = {
    centerMode: true,
    arrows: false,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const srcArray = [vid1, vid2, vid3, vid1, vid2];
  return (
    <div style={container}>
      <Image src={SunLogo} alt="sun image" />
      <Heading fontFamily={"Sansation Bold"} textAlign={{ sm: "center" }}>
        User Testimonials
      </Heading>
      <Box w="90%">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {srcArray.map((src, i) => (
            <VideoCard key={i} src={src} />
          ))}
        </Slider>
      </Box>
      <Flex gap={8} mt={2}>
        <Icon
          as={BiChevronLeftCircle}
          h={10}
          w={10}
          _hover={{ cursor: "pointer" }}
          color="blackAlpha.700"
          onClick={() => slider?.slickPrev()}
        />
        <Icon
          as={BiChevronRightCircle}
          h={10}
          w={10}
          _hover={{ cursor: "pointer" }}
          color="blackAlpha.700"
          onClick={() => slider?.slickNext()}
        />
      </Flex>
    </div>
  );
};

export default Testimonials;
