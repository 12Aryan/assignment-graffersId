import { Flex, Text } from "@chakra-ui/react";
import ListHeader from "./ListHeader";
import CompanyList from "./CompanyList";
import { getCompanyList } from "../../redux/ReviewRatingsSlice";
import { useSelector } from "react-redux";

const CompanyListing = () => {
  const companyListArr = useSelector(getCompanyList);

  return (
    <Flex
      w={"1200px"}
      direction={"column"}
      gap={"88px"}
      align={"center"}
      h={"100%"}
    >
      <ListHeader />
      <Flex direction={"column"} h={"100%"}>
        <Flex
          align={"center"}
          direction={"column"}
          gap={"5px"}
          maxW={"1064px"}
          w={"1064px"}
          h={"100%"}
        >
          <Flex w={"100%"} justifySelf={"start"}>
            <Text
              color={"#A0A0A0"}
              fontSize={"13px"}
              lineHeight={"19.5px"}
              fontWeight={400}
            >
              Result Found: {companyListArr?.length || 0}
            </Text>
          </Flex>
          <CompanyList />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CompanyListing;
