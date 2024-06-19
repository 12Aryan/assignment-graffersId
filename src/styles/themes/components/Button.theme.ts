import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonTheme: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    color: "white",
    bg: "",
    _hover: {},
    _active: {},
    _focus: {},
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: {
      bg: "",
      _hover: {
        backgroundColor: "#3464CB",
      },
      _active: {
        backgroundColor: "#3464CB",
      },
      _focus: {
        backgroundColor: "#3464CB",
      },
    },
    gradientButton: {
      bg: "linear-gradient(136.93deg, #D100F3 9.08%, #002BC5 108.36%)",
      height: "37px",
      borderRadius: "5px",
      padding: "6px 13px",
      _hover: {
        backgroundColor:
          "linear-gradient(136.93deg, #D100F3 9.08%, #002BC5 108.36%)",
      },
      _active: {
        backgroundColor:
          "linear-gradient(136.93deg, #D100F3 9.08%, #002BC5 108.36%)",
      },
      _focus: {
        backgroundColor:
          "linear-gradient(136.93deg, #D100F3 9.08%, #002BC5 108.36%)",
      },
    },
    menuButtonTheme: {
      border: "1px solid #CDCDCD",
      bg: '#FFF',
      color: '#000',
      fontSize:'15px',
      lineHeight: '22.5px',
      fontWeight: '500',
      padding:'6px 14px'
    },
    darkButton:{
      bg: '#303030',
      borderRadius: '5px',
      fontSize:'15px',
      lineHeight: '22.5px',
      fontWeight: '500',
      height: '37px',
      padding:'7px 23px'
    },
    outlinedButton: {},
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};
