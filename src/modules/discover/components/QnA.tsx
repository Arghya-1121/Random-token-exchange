import React, { FC, useMemo } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  chakra,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

interface QnAProps {}
const QnA: FC<QnAProps> = (props) => {
  const {} = props;
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const questionColor = useColorModeValue('gray.800', 'gray.100');
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <chakra.h1
          py={5}
          fontSize={37}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          Yay! QnA!
        </chakra.h1>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md" color={questionColor}>What is Random?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color={textColor}>
                This is just another NTF that is selling here,
                There is no uniqueness of this NFT.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md" color={questionColor}>Why do we need to buy this?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color={textColor}>
                There is no reason to buy this unless you want to burn your
                money into some random thing.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md" color={questionColor}>How to buy this?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color={textColor}>
                To buy this, you need to open this site and click on the
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "Buy Random" button... Buy the amount of Random...
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Now enjoy! I don't know what you gonna do with this!
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
};

export default QnA;
