import React, {ReactNode} from 'react';
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
    Spacer
} from '@chakra-ui/react';
import {FiMenu, FiChevronDown, FiScissors} from 'react-icons/fi';
import {IconType} from 'react-icons';
import NextLink from "next/link"
import {BsLaptop, BsQuestion} from "react-icons/bs";
import {GiElectric, GiClothes, GiSofa, GiDiamondRing} from "react-icons/gi";
import {MdSportsBasketball, MdFastfood} from "react-icons/md";
import {IoLogoGameControllerB} from "react-icons/io";
interface LinkItemProps {
    name: string;
    icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
    {
        name: 'Цахилгаан бараа',
        icon: GiElectric
    }, {
        name: 'Компьютер, дагалдах хэрэгсэл',
        icon: BsLaptop
    }, {
        name: 'Хувцас',
        icon: GiClothes
    }, {
        name: 'Гэр ахуйн бараа',
        icon: FiScissors
    }, {
        name: 'Тавилга',
        icon: GiSofa
    }, {
        name: 'Cпорт',
        icon: MdSportsBasketball
    }, {
        name: 'Үнэт эдлэл',
        icon: GiDiamondRing
    }, {
        name: 'Хүнс',
        icon: MdFastfood
    }, {
        name: 'Тоглоом',
        icon: IoLogoGameControllerB
    }, {
        name: 'Бусад',
        icon: BsQuestion
    }
];

const NavLink = ({children, link} : {
    children: ReactNode,
    link: string
}) => (< NextLink href = {
    link
} > <Link px = {
    2
}
py = {
    1
}
rounded = {
    'md'
}
_hover = {{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }} > {
    children
}</Link></NextLink>);

export default function SidebarWithHeader({children} : {
    children: ReactNode;
}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (< Box minH = "100vh" bg = {
        useColorModeValue('gray.100', 'gray.900')
    } > <SidebarContent onClose = {
        () => onClose
    }
    display = {{ base: 'none', md: 'block' }}
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
          <SidebarContent onClose={onClose} / > </DrawerContent></Drawer> {/* mobilenav */
    } < MobileNav onOpen = {
        onOpen
    } /> <Box ml = {{ base: 0, md: 60 }}p = "4" > {
        children
    }</Box></Box>);
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({
    onClose,
    ...rest
} : SidebarProps) => {
    return (< Box transition = "3s ease" bg = {
        useColorModeValue('white', 'gray.900')
    }
    borderRight = "1px" borderRightColor = {
        useColorModeValue('gray.200', 'gray.700')
    }
    w = {{ base: 'full', md: 60 }}
    pos = "fixed" h = "full" {
        ...rest
    } > <Flex h = "20" alignItems = "center" mx = "8" justifyContent = "space-between" > <Text fontSize = "2xl" fontFamily = "monospace" fontWeight = "bold" > Logo</Text> < CloseButton display = {{ base: 'flex', md: 'none' }}onClick = {
        onClose
    } /> </Flex> {
        LinkItems.map((link) => (< NavItem key = {
            link.name
        }
        icon = {
            link.icon
        } > {
            link.name
        }</NavItem>))
    }</Box>);
};

interface NavItemProps extends FlexProps {
    icon: IconType;
}
const NavItem = ({
    icon,
    children,
    ...rest
} : NavItemProps) => {
    return (
        < Link href = "#" style = {{ textDecoration: 'none' }}_focus = {{ boxShadow: 'none' }} > <Flex align = "center" p = "4" mx = "4" borderRadius = "lg" role = "group" cursor = "pointer" _hover = {{
          bg: 'cyan.400',
          color: 'white',
        }}
        {
            ...rest
        } > {
            icon && (
                < Icon mr = "4" fontSize = "16" _groupHover = {{
              color: 'white',
            }}
                as = {
                    icon
                } />
            )
        } {
            children
        }</Flex></Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({
    onOpen,
    ...rest
} : MobileProps) => {
    return (< Flex ml = {{ base: 0, md: 60 }}
    px = {{ base: 4, md: 4 }}
    height = "20" alignItems = "center" bg = {
        useColorModeValue('white', 'gray.900')
    }
    borderBottomWidth = "1px" borderBottomColor = {
        useColorModeValue('gray.200', 'gray.700')
    }
    justifyContent = {{ base: 'space-between'}}
    gap = '2' {
        ...rest
    } > <IconButton display = {{ base: 'flex', md: 'none' }}
    onClick = {
        onOpen
    }
    variant = "outline" aria-label = "open menu" icon = { < FiMenu />
    } /> <NavLink link = '/ad' > Сурталчилгаа</NavLink><Spacer/> < HStack spacing = {{ base: '0', md: '6' }} > <Flex alignItems = {
        'center'
    } > <Menu> < MenuButton py = {
        2
    }
    transition = "all 0.3s" _focus = {{ boxShadow: 'none' }} > <HStack> < Avatar size = {
        'sm'
    }
    src = {
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=' +
                '80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
    } /> <VStack display = {{ base: 'none', md: 'flex' }}
    alignItems = "flex-start" spacing = "1px" ml = "2" > <Text fontSize = "sm" > Justina Clark</Text> < Text fontSize = "xs" color = "gray.600" > Admin</Text></VStack> < Box display = {{ base: 'none', md: 'flex' }} > <FiChevronDown /> </Box></HStack></MenuButton> < MenuList bg = {
        useColorModeValue('white', 'gray.900')
    }
    borderColor = {
        useColorModeValue('gray.200', 'gray.700')
    } > <MenuItem> Profile</MenuItem> < MenuDivider /> <MenuItem> Sign out</MenuItem></MenuList></Menu></Flex></HStack></Flex>);
};