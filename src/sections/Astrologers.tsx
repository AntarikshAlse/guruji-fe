import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import AstroCard from "./../components/AstroCard";
//images
import kevin from "../assets/AstrologerSample.jpg";
import alexander from "../assets/alexander.jpg";
import nicolas from "../assets/nicolas.jpg";
import vicky from "../assets/vicky.jpg";
const Astrologers = () => {
  const container: React.CSSProperties = {
    display: "flex",
    background: "yellowgreen",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    margin: "0 auto",
  };
  const astrologers = [
    {
      name: "Kevin",
      src: kevin,
      specialities: "Love, Business, Relations",
      skills: "Vedic Astrology",
    },
    {
      name: "alexander",
      src: alexander,
      specialities: "Business, Education",
      skills: "Morden Astrology",
    },
    {
      name: "nicolas",
      src: nicolas,
      specialities: "Business, Education,Future",
      skills: "Morden Astrology",
    },
    {
      name: "vicky",
      src: vicky,
      specialities: "Business, Relations",
      skills: "Astrology",
    },
    {
      name: "Kevin",
      src: kevin,
      specialities: "Love, Business, Relations",
      skills: "Vedic Astrology",
    },
    {
      name: "alexander",
      src: alexander,
      specialities: "Business, Education",
      skills: "Morden Astrology",
    },
    {
      name: "nicolas",
      src: nicolas,
      specialities: "Business, Education,Future",
      skills: "Morden Astrology",
    },
    {
      name: "vicky",
      src: vicky,
      specialities: "Business, Relations",
      skills: "Astrology",
    },
    {
      name: "vicky",
      src: vicky,
      specialities: "Business, Relations",
      skills: "Astrology",
    },
  ];
  return (
    <div style={container}>
      <Heading fontFamily={"Sansation Bold"} textAlign={{ sm: "center" }}>
        Premium Astrologers
      </Heading>
      <Grid
        w="80%"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={2}
      >
        {/* 1 */}
        {astrologers.map((astrologer) => (
          <GridItem rowSpan={1} colSpan={1}>
            <AstroCard
              name={astrologer.name}
              src={astrologer.src}
              specialities={astrologer.specialities}
              skills={astrologer.skills}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Astrologers;
