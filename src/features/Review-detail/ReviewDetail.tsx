import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import GrayLocationIcon from "../../icons/GrayLocationIcon";
import Logo1 from "../../icons/logo1";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddReviewModal from "../../components/common/modal/AddReviewModal";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchCompany, getCompany } from "../../redux/ReviewRatingsSlice";
import StarComponent from "../../components/common/start-component/StarComponent";
import { getLoading } from "../../redux/SharedSlice";
import Spinnerr from "../../components/common/spinner/Spinner";
import moment from "moment";
import { calculateAverageRating } from "../../utils/GlobalUtils";

const ReviewDetail = () => {
  const dispatch = useDispatch<any>();
  const [params] = useSearchParams();
  const id = params.get("companyId") || "";
  const loading = useSelector(getLoading);
  const [isAddReview, setIsAddReview] = useState(false);
  const [reviewData, setReviewData] = useState({
    id: params.get("companyId"),
    reviewBy: "",
    subject: "",
    description: "",
    rating: null,
    created_at: "",
  });
  const companyData = useSelector(getCompany);

  const closeModal = () => {
    setIsAddReview(false);
  };

  console.log(reviewData);

  useEffect(() => {
    dispatch(FetchCompany(id));
  }, [params]);

  console.log(companyData?.reviews);

  return (
    <>
      <Flex
        w={"100%"}
        justify={"center"}
        overflowY={"scroll"}
        h={"calc(100vh - 75px)"}
      >
        <Flex
          w={"1200px"}
          direction={"column"}
          gap={"28px"}
          align={"center"}
          mb={"60px"}
        >
          <Flex
            borderBottom={"1px solid #ECECEC"}
            height={"130px"}
            minH={"130px"}
            maxH={"130px"}
            w={"100%"}
          ></Flex>
          {loading ? (
            <Flex align={"center"} justify={"center"} h={"100%"}>
              <Spinnerr color="#D100F3" size="xl" />
            </Flex>
          ) : companyData ? (
            <Flex
              bg={"#FFF"}
              boxShadow={"0px 0px 25px 0px #0000001A"}
              borderRadius={"10px"}
              direction={"column"}
              padding={"21px 19px"}
              maxW={"1064px"}
              w={"1064px"}
            >
              <Flex
                borderBottom={"1px solid #ECECEC"}
                borderRadius={"10px"}
                justify={"space-between"}
                pb={"27px"}
              >
                <Flex direction={"row"} gap={"20px"}>
                  <Flex>
                    <Logo1 />
                  </Flex>
                  <Flex direction={"column"} justify={"space-between"}>
                    <Flex direction={"column"} gap={"4px"}>
                      <Flex>
                        <Text
                          color={"#000"}
                          fontSize={"20px"}
                          lineHeight={"30px"}
                          fontWeight={500}
                        >
                          {(companyData && companyData?.companyName) || "NA"}
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
                            {(companyData && companyData?.location) || "NA"}
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
                          display={"flex"}
                          gap={"6px"}
                        >
                          {calculateAverageRating(companyData?.reviews)}
                          <StarComponent
                            rating={
                              calculateAverageRating(companyData?.reviews) || 0
                            }
                            fontSize="20px"
                          />
                        </Text>
                      </Flex>

                      <Flex>
                        <Text
                          color={"#000000"}
                          fontSize={"16px"}
                          fontWeight={600}
                          lineHeight={"24px"}
                        >
                          {(companyData && companyData?.reviews?.length) || 0}{" "}
                          Reviews 
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
                      Founded on{" "}
                      {(companyData && companyData?.foundedOn) || "NA"}
                    </Text>
                  </Flex>
                  <Flex>
                    <Button
                      variant={"gradientButton"}
                      onClick={() => setIsAddReview(true)}
                      leftIcon={<FaPlus width={"10px"} height={"10px"} />}
                      style={{ fontSize: "15px", fontWeight: 500 }}
                    >
                      Add Review
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction={"column"} padding={"15px"} gap={"20px"}>
                <Flex>
                  <Text
                    color={"#A0A0A0"}
                    fontSize={"13px"}
                    lineHeight={"19.5px"}
                    fontWeight={400}
                  >
                    Result Found: {companyData?.reviews?.length || 0}
                  </Text>
                </Flex>
                <Flex gap={"30px"} direction={"column"}>
                  {companyData &&
                    companyData?.reviews &&
                    companyData?.reviews?.length > 0 &&
                    companyData?.reviews?.map((item: any, index: number) => (
                      <Flex
                        w={"100%"}
                        gap={"15px"}
                        key={item?.reviewBy + index}
                      >
                        <Flex>
                          <Avatar src="" name={item?.reviewBy} />
                        </Flex>
                        <Flex direction={"column"} w={"100%"} gap={"11px"}>
                          <Flex justify={"space-between"} align={"start"}>
                            <Flex direction={"column"} gap={"3px"}>
                              <Flex>
                                <Text
                                  fontSize={"18px"}
                                  fontWeight={"500"}
                                  lineHeight={"27px"}
                                >
                                  {item?.reviewBy}
                                </Text>
                              </Flex>
                              <Flex>
                                <Text
                                  fontSize={"13px"}
                                  fontWeight={"400"}
                                  lineHeight={"19.5px"}
                                  color={"#969696"}
                                >
                                  {moment(item?.created_at).format(
                                    "DD-MM-YYYY, HH:mm"
                                  )}
                                </Text>
                              </Flex>
                            </Flex>
                            <StarComponent
                              fontSize="20px"
                              rating={item?.rating}
                            />
                          </Flex>

                          <Flex>
                            <Text
                              color={"#494949"}
                              fontSize={"15px"}
                              lineHeight={"22.5px"}
                              fontWeight={"400"}
                            >
                              {item?.description}
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    ))}
                </Flex>
              </Flex>
            </Flex>
          ) : (
            <Flex align={"center"} justify={"center"} h={"100%"}>
              No data found!
            </Flex>
          )}
        </Flex>
      </Flex>

      {isAddReview && (
        <AddReviewModal
          reviewData={reviewData}
          setReviewData={setReviewData}
          isOpen={isAddReview}
          onClose={closeModal}
          handleClick={() => {}}
        />
      )}
    </>
  );
};

export default ReviewDetail;
