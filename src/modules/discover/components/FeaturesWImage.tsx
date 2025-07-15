import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react'
import React, { FC, useMemo } from "react";
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  emojiIcon?: string
}

const Feature = ({ text, emojiIcon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={10} h={10} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {emojiIcon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

interface FeaturesWImageProps {}
const FeaturesWImage: FC<FeaturesWImageProps> = (props) => {
    const {} = props;
    return (
        <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
            <Text
                textTransform={'uppercase'}
                color={'purple.400'}
                fontWeight={600}
                fontSize={'sm'}
                bg={useColorModeValue('purple.50', 'blue.900')}
                p={2}
                alignSelf={'flex-start'}
                rounded={'md'}>
                  Boring life motivation!
            </Text>
            <Heading>Give your life another reason to feel bad</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
                <chakra.span fontWeight="bold" textDecoration="underline">Random</chakra.span> is the DIGITAL asset gives your life another reason that you should work rather than get relaxed.
            </Text>
            <Stack
                spacing={4}
                divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                }>
                <Feature
                emojiIcon={'🧙🏻‍♂️'}
                iconBg={useColorModeValue('blue.100', 'yellow.900')}
                text={'DIGITAL ASSET'}
                />
                <Feature
                emojiIcon={'💣'}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Valuation 0'}
                />
                <Feature
                emojiIcon={'🔥'}
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Worth Nothing'}
                />
            </Stack>
            </Stack>
            <Flex>
            <Image
                rounded={'md'}
                alt={'feature image'}
                aspectRatio={4 / 4}
                src={
                    'https://i.pinimg.com/736x/e4/dc/27/e4dc27536c5bba778cb8c5bfbe2f7ae7.jpg'
                    }
                objectFit={'cover'}
            />
            </Flex>
        </SimpleGrid>
        </Container>
    );
    };

export default FeaturesWImage;