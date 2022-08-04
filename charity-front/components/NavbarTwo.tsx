import React, { ReactNode, useEffect, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Tabs,
  TabList,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiChevronDown,
  FiScissors
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import NextLink from "next/link"
import {BsLaptop, BsQuestion} from "react-icons/bs";
import {GiElectric, GiClothes, GiSofa, GiDiamondRing} from "react-icons/gi";
import {MdSportsBasketball, MdFastfood} from "react-icons/md";
import {IoLogoGameControllerB} from "react-icons/io";
import fetchUser from '../functions/fetchUser';
import Cookies from 'js-cookie';
import LoginWithGoogle from './loginButton';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Цахилгаан бараа', icon: GiElectric },
  { name: 'Компьютер, дагалдах хэрэгсэл', icon: BsLaptop },
  { name: 'Хувцас', icon: GiClothes },
  { name: 'Гэр ахуйн бараа', icon: FiScissors },
  { name: 'Тавилга', icon: GiSofa },
  { name: 'Cпорт', icon: MdSportsBasketball },
  { name: 'Үнэт эдлэл', icon: GiDiamondRing },
  { name: 'Хүнс', icon: MdFastfood },
  { name: 'Тоглоом', icon: IoLogoGameControllerB },
  { name: 'Бусад', icon: BsQuestion },
];

const NavLink = ({ children, link }: { children: ReactNode, link: string }) => (
  <NextLink href = {link}>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}>
      {children}
    </Link>
  </NextLink>
);

interface UserProps{
  email: string;
  photo: string;
  username : string;
  id : string;
}

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const cookie = Cookies.get('user');
    if(cookie){
      fetchUser(cookie).then(result => {
        setUser(result.user);
    }
    );}  },[])

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav user={user} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Tabs defaultIndex={1}>
        <TabList flexDirection={'column'} >

        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </TabList>
      </Tabs>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {

  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
  user: UserProps | undefined;
}
const MobileNav = ({ onOpen, user, ...rest }: MobileProps) => {
  const logOut = () =>{
    Cookies.remove('user');
    window.location.reload();
  }

  return (
      <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"      
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between'}}
      gap='2'
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <NavLink link='/home' >Нүүр</NavLink>
      <NavLink link='/ad' >Сурталчилгаа</NavLink>

      <Spacer/>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    user?.photo || 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{user?.username || "Нууц хэрэглэгч" }</Text>
                  <Text fontSize="xs" color="gray.600">
                    {user?.id || "Нэвтрэх"}
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList 
              zIndex={2}
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              {user?.id ? 
                (
                  <div>
                    <MenuItem>
                      <NextLink href = '/profile' >Профайл</NextLink>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={logOut} >
                      <Text> Гарах</Text>
                    </MenuItem>
                  </div>
                ) 
              : ( <LoginWithGoogle/> )  }
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};