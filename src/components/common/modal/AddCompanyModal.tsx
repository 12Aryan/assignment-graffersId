import React, { useState } from "react";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import DarkCircle from "../../../icons/DarkCircle";
import LightCircle from "../../../icons/LightCircle";
import InputField from "../input-field/InputField";
import { format, parseISO } from "date-fns";

interface AddReviewProps {
  isOpen: boolean;
  onClose: () => void;
  handleClick: (data: any) => void;
  setCompanyData?: (data: any) => void;
  companyData?: any;
}

const AddCompanyModal = ({
  isOpen,
  onClose,
  handleClick,
  setCompanyData,
  companyData,
}: AddReviewProps) => {
  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "date") {
      setCompanyData?.({
        ...companyData,
        [name]: value ? format(parseISO(value), "dd-MM-yyyy") : "",
      });
    } else {
      setCompanyData?.({ ...companyData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors: any = {};
    if (!companyData?.companyName)
      newErrors.companyName = "Company name is required";
    if (!companyData?.location) newErrors.location = "Location is required";
    if (!companyData?.foundedOn)
      newErrors.foundedOn = "Founded on date is required";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors)?.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      handleClick(companyData);
    }
  };

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
        width={"414px"}
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
          left={"385px"}
        >
          <ModalCloseButton style={{ height: "24px", width: "24px" }} />
        </Flex>
        <ModalHeader
          mt={"60px"}
          display={"flex"}
          justifyContent={"center"}
          p={0}
        >
          Add Company
        </ModalHeader>
        <ModalBody>
          <Flex pt={"23px"} direction={"column"} w={"100%"} gap={"18px"}>
            <InputField
              handleChange={handleInputChange}
              name="companyName"
              label="Company name"
              placeholder="Enter..."
              style={{ width: "100%" }}
              inputStyle={{ height: "37px" }}
              labelColor={"#959595"}
              errors={errors.companyName}
            />

            <InputField
              handleChange={handleInputChange}
              name="location"
              label="Location"
              placeholder="Enter..."
              style={{ width: "100%" }}
              inputStyle={{ height: "37px" }}
              labelColor={"#959595"}
              errors={errors.location}
            />

            <InputField
              handleChange={handleInputChange}
              name="foundedOn"
              type={"date"}
              label="Founded on"
              placeholder="Enter..."
              style={{ width: "100%" }}
              inputStyle={{ height: "37px" }}
              labelColor={"#959595"}
              errors={errors.foundedOn}
            />
          </Flex>
        </ModalBody>

        <ModalFooter display={"flex"} justifyContent={"center"} mt={"50px"}>
          <Button
            variant="gradientButton"
            style={{
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "22.5px",
              width: "100px",
            }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCompanyModal;
