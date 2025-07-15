import { useAppUtils } from "@/lib/app/hooks";
import Head from 'next/head'
import React, { FC, useMemo } from "react";
import { LINKS } from "@/utils/links";
import Link from "next/link";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  chakra,
} from '@chakra-ui/react'

interface HeroSectionProps {}
const HeroSection: FC<HeroSectionProps> = (props) => {
  const {} = props;
  return (
      <Container maxW={'6xl'}>
              <Stack
                as={Box}
                textAlign={'center'}
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                  lineHeight={'110%'}>
                  Life sucks? Buy <chakra.span fontStyle="italic">Random</chakra.span> <br />
                  <Text fontSize="4xl" fontWeight={400} as={'span'} color={'purple.400'}>
                  -now your life sucks more! LOL! 😂
                  </Text>
                </Heading>
                <Text color={'gray.500'}>
                💥 Life is Boring? Sucks? No Money? Huh, we all faced this! <br />
                 This is the GLITCH IN THE MATRIX that’s gonna TRANSFORM your basic boring life
                  into a nothing! Yeah, You read it right! 💫
                </Text>
                <Stack
                  direction={'column'}
                  spacing={3}
                  align={'center'}
                  alignSelf={'center'}
                  position={'relative'}>
                  <Link href={LINKS.cw20Token("Random-Exchange")}>
                    <Button
                      colorScheme={'#7F56D9'}
                      bg={'purple.400'}
                      px={6}
                      _hover={{
                        bg: 'purple.500',
                      }}>
                      Buy Random
                    </Button>
                  </Link>
      
                </Stack>
              </Stack>
            </Container>
  );
};
export default HeroSection;