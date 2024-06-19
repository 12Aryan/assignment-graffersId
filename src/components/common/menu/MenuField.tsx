import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import CheveronDownIcon from "../../../icons/CheveronDownIcon";

interface MenuProps {
  label?: string;
  buttonText : string,
  items: Array<string>,
}

const MenuField = ({label,buttonText,items}:MenuProps) => {
  return (
    <Flex direction={'column'} gap={'6px'}>
      {label && <Flex>
        <Text color={'#4A4A4A'} fontSize={'14px'} fontWeight={400} lineHeight={'21px'}>{label}</Text>
      </Flex>}
      <Menu>
        <MenuButton as={Button} rightIcon={<CheveronDownIcon/>} variant={'menuButtonTheme'} >{buttonText}</MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup   type="radio">
            {
              items.map((item:any)=> {
                return  <MenuItemOption key={item} >{item}</MenuItemOption>}
              )
            }
            
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default MenuField;
