import { Button, Flex, Text } from "@chakra-ui/react";
import Logo1 from "../../icons/logo1";
import GrayLocationIcon from "../../icons/GrayLocationIcon";
import Logo2 from "../../icons/Logo2";
import Logo3 from "../../icons/Logo3";
import Logo4 from "../../icons/Logo4";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchCompanyList,
  getCompanyList,
} from "../../redux/ReviewRatingsSlice";
import { getLoading } from "../../redux/SharedSlice";
import Spinnerr from "../../components/common/spinner/Spinner";
import { useNavigate } from "react-router-dom";
import StarComponent from "../../components/common/start-component/StarComponent";
import { calculateAverageRating } from "../../utils/GlobalUtils";

const CompanyList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const companyListArr = useSelector(getCompanyList);
  const loading = useSelector(getLoading);
  const randomIndex = Math.floor(Math.random() * 4);
  const logos = [<Logo1 />, <Logo2 />, <Logo3 />, <Logo4 />];

  useEffect(() => {
    dispatch(FetchCompanyList());
  }, []);

  return (
    <Flex
      direction={"column"}
      gap={"25px"}
      width={"100%"}
      height={"100%"}
      paddingBottom={"60px"}
    >
      {loading ? (
        <Flex align={"center"} justify={"center"} h={"100%"}>
          <Spinnerr color="#D100F3" size="xl" />
        </Flex>
      ) : companyListArr && companyListArr?.length > 0 ? (
        companyListArr?.map((item, index) => {
          return (
            <Flex
              key={item?.id}
              boxShadow={"0px 0px 25px 0px #0000001A"}
              bg={"#FFF"}
              borderRadius={"10px"}
              padding={"21px"}
              justify={"space-between"}
            >
              <Flex direction={"row"} gap={"20px"}>
                <Flex>{logos[index <= 3 ? index : randomIndex]}</Flex>

                <Flex direction={"column"} justify={"space-between"}>
                  <Flex direction={"column"} gap={"4px"}>
                    <Flex>
                      <Text
                        color={"#000"}
                        fontSize={"20px"}
                        lineHeight={"30px"}
                        fontWeight={500}
                      >
                        {item?.companyName}
                      </Text>
                    </Flex>
                    <Flex gap={"3px"} alignItems={"center"}>
                      <Flex>
                        <GrayLocationIcon />
                      </Flex>
                      <Flex>
                        <Text
                          color={"#767676"}
                          fontSize={"13px"}
                          fontWeight={400}
                          lineHeight={"19.5px"}
                        >
                          {item?.location}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex gap={"6px"} align={"center"}>
                    <Flex>
                      <Text
                        color={"#000000"}
                        fontSize={"16px"}
                        fontWeight={600}
                        lineHeight={"24px"}
                      >
                        {calculateAverageRating(
                          companyListArr[index]?.reviews
                        ) || 0}
                      </Text>
                    </Flex>
                    <StarComponent
                      fontSize="20px"
                      rating={calculateAverageRating(
                        companyListArr[index]?.reviews
                      )}
                    />

                    <Flex>
                      <Text
                        color={"#000000"}
                        fontSize={"16px"}
                        fontWeight={600}
                        lineHeight={"24px"}
                      >
                        {item?.reviews?.length || 0} Reviews
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                direction={"column"}
                justify={"space-between"}
                align={"end"}
              >
                <Flex>
                  <Text
                    color={"#767676"}
                    fontSize={"12px"}
                    fontWeight={400}
                    lineHeight={"18px"}
                  >
                    Founded on {item?.foundedOn}
                  </Text>
                </Flex>
                <Flex>
                  <Button
                    variant={"darkButton"}
                    onClick={() => navigate(`/detail?companyId=${item?.id}`)}
                  >
                    Detail Review
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          );
        })
      ) : (
        <Flex align={"center"} justify={"center"} h={"100%"}>
          No data found!
        </Flex>
      )}
    </Flex>
  );
};

export default CompanyList;
