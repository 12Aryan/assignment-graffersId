import { Button, Flex, Text } from "@chakra-ui/react";
import InputField from "../../components/common/input-field/InputField";
import { LocationIcon } from "../../icons/LocationIcon";
import MenuField from "../../components/common/menu/MenuField";
import { useEffect, useState } from "react";
import AddCompanyModal from "../../components/common/modal/AddCompanyModal";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {
  AddCompany,
  FetchCompanyList,
  SearchCompany,
} from "../../redux/ReviewRatingsSlice";

const ListHeader = () => {
  const uuid = uuidv4();
  const dispatch = useDispatch<any>();
  const [isAddCompanyModal, setIsAddCompanyModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [companyData, setCompanyData] = useState({
    company_id: uuid,
    companyName: "",
    foundedOn: "",
    location: "",
    rating: null,
    totalReviews: null,
  });

  const resetCompanyData = () => {
    setCompanyData({
      company_id: uuid,
      companyName: "",
      foundedOn: "",
      location: "",
      rating: null,
      totalReviews: null,
    });
  };

  const closeModal = () => {
    setIsAddCompanyModal(false);
  };

  const handleAddCompanyClick = () => {
    dispatch(AddCompany(companyData));
    closeModal();
    resetCompanyData();
  };

  const handleSearchInputchange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleFindCompanyClick = () => {
    dispatch(SearchCompany({ field: "location", searchQuery }));
  };

  useEffect(() => {
    if (!searchQuery) dispatch(FetchCompanyList());
  }, [searchQuery]);

  return (
    <>
      <Flex
        borderBottom={"1px solid #ECECEC"}
        padding={"40px 65px 28px 65px"}
        justify={"space-between"}
        w={"100%"}
      >
        <Flex gap={"22px"} align={"end"}>
          <InputField
            title="Click on find company to search location"
            name="search"
            handleChange={handleSearchInputchange}
            label="Select city"
            rightIcon={<LocationIcon />}
            placeholder="Enter your location"
          />
          <Button variant={"gradientButton"} onClick={handleFindCompanyClick}>
            <Text
              fontSize={"16px"}
              lineHeight={"24px"}
              color={"#FFF"}
              fontWeight={600}
            >
              Find Company
            </Text>
          </Button>
        </Flex>
        <Flex align={"end"} gap={"84px"}>
          <Button
            variant={"gradientButton"}
            onClick={() => setIsAddCompanyModal(true)}
          >
            <Text
              fontSize={"15px"}
              lineHeight={"22.5px"}
              color={"#FFF"}
              fontWeight={500}
            >
              + Add Company
            </Text>
          </Button>
          <MenuField
            label={"Sort:"}
            buttonText="Name"
            items={["Name", "Average", "Rating", "Location"]}
          />
        </Flex>
      </Flex>

      {isAddCompanyModal && (
        <AddCompanyModal
          isOpen={isAddCompanyModal}
          onClose={closeModal}
          handleClick={() => handleAddCompanyClick()}
          setCompanyData={setCompanyData}
          companyData={companyData}
        />
      )}
    </>
  );
};

export default ListHeader;
