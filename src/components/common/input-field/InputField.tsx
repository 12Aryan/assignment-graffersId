import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

const InputField = ({
  placeholder,
  leftIcon,
  rightIcon,
  style,
  label,
  type,
  inputStyle,
  labelColor,
  name,
  value,
  handleChange,
  title,
  errors,
}: {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  style?: any;
  inputStyle?: any;
  placeholder?: string;
  label?: string;
  type?: string;
  name?: string;
  value?: any;
  handleChange?: (value: any) => void;
  labelColor?: string;
  title?: string;
  errors?: any;
}) => {
  return (
    <Flex direction={"column"} gap={"6px"} style={style}>
      {label && (
        <Flex>
          <Text
            color={labelColor || "#4A4A4A"}
            fontSize={"14px"}
            fontWeight={400}
            lineHeight={"21px"}
          >
            {label}
          </Text>
        </Flex>
      )}
      <InputGroup>
        {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
        <Input
          title={title}
          name={name}
          type={type}
          placeholder={placeholder}
          style={inputStyle}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"21px"}
          bg={"white"}
          {...(value !== undefined && { value })}
          {...(handleChange && {
            onChange: (e: any) => handleChange(e),
          })}
        />
        {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
      </InputGroup>
      {errors && (
        <Text color="red" fontSize="11px">
          {errors}
        </Text>
      )}
    </Flex>
  );
};

export default InputField;
