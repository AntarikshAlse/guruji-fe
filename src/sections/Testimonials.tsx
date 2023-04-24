import React from "react";
import SunLogo from "../assets/sunLogo.svg";
import {
  Image,
  Flex,
  Heading,
  Icon,
  Box,
  Center,
  Text,
} from "@chakra-ui/react";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import Card from "../components/VideoCard";
import Slider from "react-slick";

const Testimonials = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const container: React.CSSProperties = {
    display: "flex",
    background: "yellowgreen",
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
  return (
    <div style={container}>
      <Image src={SunLogo} alt="sun image" />
      <Heading fontFamily={"Sansation Bold"} textAlign={{ sm: "center" }}>
        User Testimonials
      </Heading>
      <Box w="90%">
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </Box>
      <Flex gap={8} mt={2}>
        <Icon
          as={BiChevronLeftCircle}
          h={10}
          w={10}
          color="#a95210"
          onClick={() => slider?.slickPrev()}
        />
        <Icon
          as={BiChevronRightCircle}
          h={10}
          w={10}
          color="#a95210"
          onClick={() => slider?.slickNext()}
        />
      </Flex>
    </div>
  );
};

export default Testimonials;
