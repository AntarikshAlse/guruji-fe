import React from "react";
import {
  Flex,
  Image,
  Box,
  Text,
  Center,
  Icon,
  Heading,
} from "@chakra-ui/react";
import Chakra from "../assets/Chakra.svg";
import sunLogo from "../assets/sunLogo.svg";
import { AiOutlineHeart } from "react-icons/ai";
//GiLinkedRings
import { GiLinkedRings } from "react-icons/gi";
//TbBusinessplan
import { TbBusinessplan } from "react-icons/tb";
//SlGraduation
import { SlGraduation } from "react-icons/sl";
//GiRelationshipBounds
import { GiRelationshipBounds } from "react-icons/gi";
//MdChildCare
import { MdChildCare } from "react-icons/md";
//TbPlanet
import { TbPlanet } from "react-icons/tb";
//MdOutlineHealthAndSafety
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Solutions = () => {
  const container: React.CSSProperties = {
    display: "flex",
    background: "#dcb685",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    margin: "0 auto",
    padding: "4rem 0",
  };
  const rotationAnimation = {
    transformOrigin: "center",
    animation: "rotate 3s infinite linear",
  };
  const arrayFeaturesLeft = [
    { title: "Love Problem", icon: AiOutlineHeart },
    { title: "Health Problems", icon: MdOutlineHealthAndSafety },
    { title: "Relationship Bounds", icon: GiRelationshipBounds },
    { title: "Child Problems", icon: MdChildCare },
  ];
  const arrayFeaturesRight = [
    { title: "Marriage Problems", icon: GiLinkedRings },
    { title: "Business Problems", icon: TbBusinessplan },
    { title: "Grah Shanti", icon: TbPlanet },
    { title: "Education", icon: SlGraduation },
  ];
  return (
    <div style={container}>
      <Heading fontFamily={"Sansation Bold"} textAlign={{ sm: "center" }}>
        Many Problems one Solution
      </Heading>
      <Flex w={"80%"} mx="auto" justifyContent={"space-between"}>
        <Flex flexDirection={"column"} gap={10} my="3rem">
          {arrayFeaturesLeft.map((feature) => (
            <Flex
              rounded={"lg"}
              key={feature.title}
              bg="aliceblue"
              border={"1px solid brown"}
            >
              <Text w={"70%"} px={2} minH={"3rem"}>
                {feature.title}
              </Text>
              <Center bg="#a95210" w={"30%"} h={"100%"}>
                <Icon as={feature.icon} color={"white"} />
              </Center>
            </Flex>
          ))}
        </Flex>
        <div>
          <Image
            src={Chakra}
            position={"relative"}
            top={0}
            left={0}
            minW={"500px"}
            alt="Raas Chakra"
            style={rotationAnimation}
          />
          <Image src={sunLogo} position={"relative"} bottom="50%" left="36%" />
        </div>
        <Flex flexDirection={"column"} gap={10} my="3rem">
          {arrayFeaturesRight.map((feature) => (
            <Flex
              rounded={"lg"}
              key={feature.title}
              bg="aliceblue"
              border={"1px solid brown"}
            >
              <Text w={"70%"} px={2} minH={"3rem"}>
                {feature.title}
              </Text>
              <Center bg="#a95210" w={"30%"} h={"100%"}>
                <Icon as={feature.icon} color={"white"} />
              </Center>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

export default Solutions;
