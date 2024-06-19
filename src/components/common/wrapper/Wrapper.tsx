import Toaster from "../toaster/Toaster";
import { Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getToast } from "../../../redux/SharedSlice";
import Header from "../header/Header";

const Wrapper = ({ children }: any) => {
  const toaster = useSelector(getToast);

  return (
    <Flex
      minH={"100vh"}
      minW={"100dvw"}
      maxH={"100vh"}
      maxW={"100dvw"}
      height={"100%"}
      flexDirection={"column"}
      position={"relative"}
      overflow={"hidden"}
      bg="#FAFBFD"
    >
      {toaster && <Toaster toastMessage="Internal server error" />}
      <Header />
      {children}
    </Flex>
  );
};

export default Wrapper;
