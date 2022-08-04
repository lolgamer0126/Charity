import { ReactNode, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
  Text,
  ListItem,
  Button
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FiChevronDown } from 'react-icons/fi';
import NextLink from 'next/link';
import fetchUser from '../functions/fetchUser';
import Cookies from 'js-cookie';
import LoginWithGoogle from './loginButton';

const NavLink = ({ children, link }: { children: ReactNode, link: string }) => (
  <NextLink href = {link} >

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

export default function SimpleNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const cookie = Cookies.get('user');
    if(cookie){
      fetchUser(cookie).then(result => {
        setUser(result.user);
    }
    );}
  },[]);
  const logOut = () =>{
    Cookies.remove('user');
    window.location.reload();
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink link='/home' >Нүүр</NavLink>
              <NavLink link='/shop' >Дэлгүүр</NavLink>
              <NavLink link='/ad' >Сурталчилгаа</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={ user?.photo || 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8='}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                    <Text fontSize="sm"> {user?.username || 'Нууц хэрэглэгч'} </Text>
                    <Text fontSize="xs" color="gray.600">
                    {user?.id || 'Нэвтрэх'} 
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
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
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NavLink link='/home' >Нүүр</NavLink>
              <NavLink link='/shop' >Дэлгүүр</NavLink>
              <NavLink link='/ad' >Сурталчилгаа</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}