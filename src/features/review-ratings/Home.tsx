import CompanyListing from "./CompanyListing.tsx";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      justify={"center"}
      w={"100%"}
      overflowY={"scroll"}
      h={"calc(100vh - 75px)"}
    >
      <CompanyListing />
    </Flex>
  );
};

export default Home;
