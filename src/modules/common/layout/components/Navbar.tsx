import { Box, Flex, Text, useColorMode, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { FC } from "react";
import { CollectionDropdown, ConnectWallet } from "@/modules/common/cta";
import useApp from "@/lib/app/hooks/useApp";
import Link from "next/link";
import { LINKS } from "@/utils/links";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = (props) => {
  const {} = props;
  const { config } = useApp();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box py="2" px="8">
      <Flex
        direction="row"
        alignItems="center"
        maxW="container.lg"
        mx="auto"
        gap="4"
      >
        <Link href={LINKS.home()} passHref>
          <Text as="a" fontSize="lg" fontWeight="bold">
            {config.name}
          </Text>
        </Link>
        <Flex direction="row" ml="auto" gap="2">
          {/* <CollectionDropdown /> */}
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            size="md"
            variant="ghost"
          />
          <ConnectWallet />
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
