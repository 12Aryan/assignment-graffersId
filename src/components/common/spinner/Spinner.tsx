import { Spinner } from "@chakra-ui/react";

const Spinnerr = ({ color, size }: { color: string; size: string }) => {
  return <Spinner color={color} emptyColor="gray" size={size} />;
};

export default Spinnerr;
