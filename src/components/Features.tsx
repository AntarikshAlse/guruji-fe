import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image } from '@chakra-ui/react';
//import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import supportIcon from '../assets/customerSuppIcon.svg';
import agreementIcon from '../assets/agreement.svg';
import privateIcon from '../assets/private.svg';
import secureIcon from '../assets/securePayments.svg';
interface FeatureProps {
  text: string;
  src?: string;
}

const Feature = ({  text, src }: FeatureProps) => {
  return (
    <Flex 
    direction={{ base: 'column', md: 'row' ,lg:"row"}} 
    gap={2} 
    alignItems={{sm: 'center'}}
    >
      <Image alt='feature image' src={src} />
      <Text color={'antiquewhite'} textAlign={{sm:"center"}}>{text}</Text>
    </Flex>
  );
};

export default function SimpleThreeColumns() {
  const features = [{src:supportIcon,txt:"24x7 Support"},{src:agreementIcon,txt:"Verified Astrologers"},{src:privateIcon,txt:"Private & Confidential"},{src:secureIcon,txt:"Secure Payments"}]
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 4, md: 4 }} spacing={10}>
       {features.map((feature)=>(
        <Feature
          src={feature.src}
          text={feature.txt}
        />
       )) }
      </SimpleGrid>
    </Box>
  );
}