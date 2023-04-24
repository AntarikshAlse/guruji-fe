import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import AstroCard from "./../components/AstroCard";
const Astrologers = () => {
  const container: React.CSSProperties = {
    display: "flex",
    background: "#FFEFE3",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    margin: "0 auto",
  };
  return (
    <div style={container}>
      <Heading fontFamily={"Sansation Bold"} textAlign={{ sm: "center" }}>
        Premium Astrologers
      </Heading>
      <Grid
        w="100%"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={2}
      >
        {/* 1 */}
        <GridItem rowSpan={1} colSpan={1}>
          <AstroCard />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <AstroCard />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <AstroCard />
        </GridItem>
        {/* 2 */}
        <GridItem rowSpan={1} colSpan={1}>
          <AstroCard />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <AstroCard />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <AstroCard />
        </GridItem>
        {/* 3 */}
        <GridItem rowSpan={1} colSpan={1}>
          <AstroCard />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <AstroCard />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <AstroCard />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Astrologers;
