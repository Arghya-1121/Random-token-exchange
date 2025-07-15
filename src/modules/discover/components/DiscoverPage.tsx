import { useAppUtils } from "@/lib/app/hooks";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import React, { FC, useMemo } from "react";
import CollectionRow from "./CollectionRow";
import Featured from "./Featured";
import HeroSection from "./HeroSection";
import FeaturesWImage from "./FeaturesWImage";
import QnA from "./QnA";
import BasicStatistics from "./BasicStatistics";
import Testimonials from "./Testimonials";


interface DiscoverPageProps {}
const DiscoverPage: FC<DiscoverPageProps> = (props) => {
  const {} = props;
  const { getCollections } = useAppUtils();

  const collections = useMemo(() => {
    return getCollections();
  }, [getCollections]);

  return (
    <Box>
      <Box>
        {/* <Featured /> */}
        <HeroSection />
        <FeaturesWImage />
        <BasicStatistics />
        <Testimonials />
         <QnA />
        
      </Box>

      {/* // Explore Section
      <Text fontSize="xl" fontWeight="bold" mt="16">
        Explore Collections
      </Text>
      {collections.map((col) => (
        <Box mt="10" key={col.id}>
          <CollectionRow collectionId={col.id} />
        </Box>
      ))} */}

      
    </Box>

    
  );
};
export default DiscoverPage;
