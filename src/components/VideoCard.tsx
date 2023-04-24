import {
  Heading,
  Avatar,
  Box,
  Center,
  AspectRatio,
  Image,
  Flex,
  Text,
  Icon,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiPlayCircle } from "react-icons/fi";
import nicolas from "../assets/nicolas.jpg";
export default function Card() {
  return (
    <Center>
      <Box
        maxW={"270px"}
        w={"full"}
        //bg={useColorModeValue("white", "gray.800")}
        backgroundImage={`url(${nicolas})`}
        rounded={"md"}
        px={{ lg: "7rem", sm: "6rem" }}
        py={{ lg: "9rem", sm: "4rem" }}
      >
        <Stack spacing={0} align={"center"} mb={5}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            <Icon as={FiPlayCircle} w={10} h={10} color={"#a95210"} />
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
