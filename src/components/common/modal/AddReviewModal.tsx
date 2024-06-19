import {
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DarkCircle from "../../../icons/DarkCircle";
import LightCircle from "../../../icons/LightCircle";
import InputField from "../input-field/InputField";
import StarComponent from "../start-component/StarComponent";
import { useDispatch, useSelector } from "react-redux";
import { AddReview, getCompany } from "../../../redux/ReviewRatingsSlice";

interface AddReviewProps {
  isOpen: boolean;
  onClose: () => void;
  handleClick: () => void;
  reviewData: any;
  setReviewData: (values: any) => any;
}

const AddReviewModal = ({
  isOpen,
  onClose,
  handleClick,
  reviewData,
  setReviewData,
}: AddReviewProps) => {
  const dispatch = useDispatch<any>();
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState<any>({});
  const companyData = useSelector(getCompany);

  const handleInputChange = (e) => {
    setReviewData?.({ ...reviewData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: any = {};
    if (!reviewData?.reviewBy) newErrors.reviewBy = "Full name is required";
    if (!reviewData?.subject) newErrors.subject = "Subject is required";
    if (!reviewData?.description)
      newErrors.description = "Description is required";
    if (!rating) newErrors.rating = "Rating is required";
    return newErrors;
  };

  const handleAddReviewClick = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors)?.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const payload = {
        id: companyData?.id,
        company_id: companyData?.company_id,
        companyName: companyData?.company,
        location: companyData?.location,
        rating: companyData?.rating,
        totalReviews: companyData?.reviews?.length + 1,
        foundedOn: companyData?.foundedOn,
        reviews: [
          ...(companyData?.reviews?.length > 0 ? companyData.reviews : []),
          {
            reviewBy: reviewData.reviewBy,
            subject: reviewData.subject,
            description: reviewData.description,
            rating: rating,
            company_id: reviewData.id,
            created_at: new Date(),
          },
        ],
      };
      dispatch(AddReview({ payload, id: companyData?.id }));
      onClose();
      setReviewData({
        reviewBy: "",
        subject: "",
        description: "",
        rating: null,
        created_at: "",
      });
      setRating(0);
    }
  };

  useEffect(() => {
    setReviewData?.({ ...reviewData, rating: rating });
  }, [rating]);

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent
        bg={"white"}
        position={"relative"}
        borderRadius={"25px"}
        width={"530px"}
      >
        <Flex position={"absolute"} borderTopLeftRadius={"25px"}>
          <DarkCircle />
        </Flex>
        <Flex position={"absolute"}>
          <LightCircle />
        </Flex>
        <Flex
          position={"absolute"}
          h={"24px"}
          w={"24px"}
          top={"8px"}
          left={"417px"}
        >
          <ModalCloseButton style={{ height: "24px", width: "24px" }} />
        </Flex>
        <ModalHeader
          mt={"60px"}
          display={"flex"}
          p={0}
          justifyContent={"center"}
        >
          Add Review
        </ModalHeader>
        <ModalBody pt={"23px"}>
          <Flex direction={"column"} gap={"28px"}>
            <Flex direction={"column"} w={"100%"} gap={"18px"}>
              <InputField
                name="reviewBy"
                handleChange={handleInputChange}
                label="Full Name"
                placeholder="Enter"
                style={{ width: "100%" }}
                inputStyle={{ height: "37px" }}
                labelColor={"#959595"}
                errors={errors.reviewBy}
              />
              <InputField
                name="subject"
                handleChange={handleInputChange}
                label="Subject"
                placeholder="Enter"
                style={{ width: "100%" }}
                inputStyle={{ height: "37px" }}
                labelColor={"#959595"}
                errors={errors.subject}
              />

              <Flex direction={"column"} gap={"6px"}>
                <Flex>
                  <Text
                    color={"#959595"}
                    fontSize={"14px"}
                    fontWeight={400}
                    lineHeight={"21px"}
                  >
                    Enter your Review
                  </Text>
                </Flex>
                <Textarea
                  name="description"
                  onChange={handleInputChange}
                  placeholder="Description"
                  style={{
                    width: "100%",
                    height: "100px",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21px",
                  }}
                />
                {errors.description && (
                  <Text color="red.500" fontSize="11px">
                    {errors.description}
                  </Text>
                )}
              </Flex>
            </Flex>
            <Flex direction={"column"}>
              <Flex>
                <Text
                  fontSize={"24px"}
                  fontWeight={600}
                  lineHeight={"36px"}
                  color={"#000"}
                >
                  Rating
                </Text>
              </Flex>
              <StarComponent
                rating={rating}
                setRating={setRating}
                fontSize="45px"
              />
              {errors.rating && (
                <Text color="red.500" fontSize="11px">
                  {errors.rating}
                </Text>
              )}
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter
          display={"flex"}
          justifyContent={"center"}
          mt={"10px"}
          mb={"60px"}
          p={0}
        >
          <Button
            variant="gradientButton"
            style={{
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "22.5px",
              width: "100px",
            }}
            onClick={handleAddReviewClick}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddReviewModal;
