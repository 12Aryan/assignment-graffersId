import { extendTheme } from "@chakra-ui/react";
import globalStyles from "../globalStyles";
import BorderStyles from "./others/BorderStyles";
import BorderWidths from "./others/BorderWidths";
import BreakPoints from "./others/BreakPoints";
import Color from "./others/Color";
import Fonts from "./others/Fonts";
import FontSizes from "./others/FontSizes";
import LineHeights from "./others/LineHeights";
import Sizes from "./others/Sizes";
import Spaces from "./others/Spaces";
import { ButtonTheme } from "./components/Button.theme";
import  MenuTheme  from "./components/Menu.theme";
import InputTheme from './components/Input.theme'

const Theme = extendTheme({
  borderWidths: BorderWidths, // Border Widths
  borderStyles: BorderStyles, // Border Style
  breakpoints: BreakPoints, // Breakpoints5
  fonts: Fonts, // Fonts
  fontSizes: FontSizes, // FontSizes
  lineHeights: LineHeights, // LineHeight
  colors: Color, // Colors
  space: Spaces, // margins & paddings
  sizes: Sizes, // widths & heights
  styles: { global: globalStyles },
  components: {
    Button: ButtonTheme,
    Menu: MenuTheme,
    Input: InputTheme,
  },
});

export default Theme;
