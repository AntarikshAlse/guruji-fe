import React from 'react';
import Simple from "../components/Navbar";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Box,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';
import SimpleThreeColumns from '../components/Features';
import bgImg from '../assets/bg1.jpg';
const CTA = () => {
  const bgStyle={backgroundSize:"cover",background: `linear-gradient(rgba(76, 50, 12, 0.02), rgb(0 0 0 / 78%)),url(${bgImg})`};
  return (
    <div style={bgStyle}>
      <Simple/>
      <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          fontFamily={"Sansation Bold, arial"}
          color={'white'} 
          lineHeight={'110%'}>
         “Astrology for Clarity”
        </Heading>
        <Text color={'antiquewhite'} maxW={'3xl'}>
        Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={10}
            py={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Consult Now
          </Button>
        </Stack>
      </Stack>
      <Box>
      <SimpleThreeColumns/>
      </Box>
    </Container>
    </div>
    
  )
}

export default CTA



