import { Flex, Text } from "@chakra-ui/react";
import Logo from "../../../icons/Logo";
import SearchIcon from "../../../icons/SearchIcon";
import InputField from "../input-field/InputField";
import { useEffect, useState } from "react";
import { SearchCompany } from "../../../redux/ReviewRatingsSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch<any>();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputchange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(SearchCompany({ field: "search", searchQuery }));
  }, [searchQuery]);

  return (
    <Flex
      h={"75px"}
      boxShadow={"0px 2px 25px 0px #0000001A"}
      bg={"#fff"}
      width={"100%"}
      align={"center"}
      justify={"space-between"}
      p={"10px 80px"}
    >
      <Logo />
      <Flex justify={"space-between"} align={"center"} gap={"49px"}>
        <InputField
          handleChange={handleSearchInputchange}
          inputStyle={{ border: "1px solid #CDCDCD" }}
          rightIcon={<SearchIcon />}
          placeholder="Search companies..."
        />
        <Text>SignUp</Text>
        <Text>LogIn</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
