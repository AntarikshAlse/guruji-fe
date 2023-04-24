import {
  Box,
  Flex,
  Text,
  Center,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import ManImg from "../assets/AstrologerSample.jpg";
const AstroCard = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        w={"15rem"}
        rounded={"lg"}
        my="4"
        bg="white"
        justifyContent={"space-between"}
        backgroundImage={ManImg}
        backgroundSize={"cover"}
      >
        <Flex justifyContent={"space-between"} p={2} pb={"8rem"}>
          <Text color={"white"}>10+ Years</Text>
          <Flex bg={"blackAlpha.800"} rounded={"md"} py={0.5} gap={2} px={1}>
            <Box
              rounded={"full"}
              bg="whatsapp.400"
              h={2}
              w={2}
              alignSelf={"center"}
            />
            <Text color={"white"}>Online</Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} bg="blackAlpha.400">
          <Box>
            <Text fontWeight="bold" color="antiquewhite">
              Astrologer Kevin
            </Text>
            <Text color="whitesmoke">Specialities</Text>
            <span>Love, Business, Life</span>
            <Flex>
              <Box>
                <Text color="whitesmoke">Skills</Text>
                <span>Vedic Astrology, Kundali</span>
              </Box>
              <Text fontWeight="bold" color={"#5CE449"}>
                Price 10 Rs/min
              </Text>
            </Flex>
          </Box>
          <Flex justifyContent={"space-between"} rounded={"lg"}>
            <Button color="white" bg={"blackAlpha.900"} w={"49%"}>
              Chat
            </Button>
            <Button color="white" bg={"blackAlpha.900"} w={"49%"}>
              Call
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default AstroCard;
