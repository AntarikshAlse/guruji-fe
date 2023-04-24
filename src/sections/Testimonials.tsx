import React from "react";
import SunLogo from "../assets/sunLogo.svg";
import { Image, Flex, Heading, Icon } from "@chakra-ui/react";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import Card from "../components/VideoCard";
const Testimonials = () => {
  const container: React.CSSProperties = {
    display: "flex",
    background: "#dcb685",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    margin: "0 auto",
  };

  return (
    <div style={container}>
      <Image src={SunLogo} alt="sun image" />
      <Heading fontFamily={"Sansation Bold"} textAlign={{ sm: "center" }}>
        User Testimonials
      </Heading>
      <Card />
      <Flex gap={8} mt={2}>
        <Icon as={BiChevronLeftCircle} h={10} w={10} color="#a95210" />
        <Icon as={BiChevronRightCircle} h={10} w={10} color="#a95210" />
      </Flex>
    </div>
  );
};

export default Testimonials;
