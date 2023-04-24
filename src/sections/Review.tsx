import React from "react";
import {
  Heading,
  Flex,
  Center,
  Text,
  Icon,
  Avatar,
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import alex from "../assets/alexander.jpg";
import vickey from "../assets/vicky.jpg";
import nicholas from "../assets/nicolas.jpg";
const Review = () => {
  const container: React.CSSProperties = {
    display: "flex",
    background: "yellowgreen",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    margin: "0 auto",
  };
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  const cards = [
    {
      stars: 4,
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    nihil pariatur laboriosam. Earum, odio expedita, alias blanditiis
    iusto, itaque soluta totam eveniet dolores accusantium nobis
    asperiores cupiditate quas facere veniam!`,
      name: "Alexander",
      img: alex,
    },
    {
      stars: 3,
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    nihil pariatur laboriosam. Earum, odio expedita, alias blanditiis
    iusto, itaque soluta totam eveniet dolores accusantium nobis
    asperiores cupiditate quas facere veniam!`,
      name: "Vickey",
      img: vickey,
    },
    {
      stars: 5,
      text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    nihil pariatur laboriosam. Earum, odio expedita, alias blanditiis
    iusto, itaque soluta totam eveniet dolores accusantium nobis
    asperiores cupiditate quas facere veniam!`,
      name: "Nicholas",
      img: nicholas,
    },
  ];
  return (
    <div style={container}>
      <Heading fontFamily={"Sansation Bold"} textAlign={{ sm: "center" }}>
        User Review
      </Heading>
      <Box position={"relative"} width={"80%"} overflow={"hidden"}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Flex
              key={index + Math.random()}
              flexDirection={"column"}
              w={"80%"}
              py={8}
              px={4}
              bg="white"
              my={4}
              gap={5}
            >
              <Center gap={4} mb={4}>
                {Array(5)
                  .fill("")
                  .map((_, i) => {
                    if (card.stars > i)
                      return <Icon as={BsStarFill} h={8} w={8} key={i} />;
                    else return <Icon as={BsStar} h={8} w={8} key={i} />;
                  })}
              </Center>
              <Center>
                <Text w="80%">{card.text}</Text>
              </Center>
              <Center flexDirection={"column"} mt="3">
                <Avatar
                  size={"xl"}
                  border="1px"
                  showBorder={true}
                  src={card.img}
                  css={{
                    border: "2px solid white",
                  }}
                />
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {card.name}
                </Heading>
              </Center>
            </Flex>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default Review;
