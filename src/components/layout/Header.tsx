
import AccessibleLink from "components/AccessibleLink";
import ThemeToggle from "./ThemeToggle";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  WrapItem,
  Center,
  Image,
} from '@chakra-ui/react';
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Container } from "@chakra-ui/react"

import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon
} from '@chakra-ui/icons';


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  


  return (
    <Box boxShadow="md">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}>
        <Container maxWidth="1300" >
          <Flex align='center'>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
              <NextLink href='/' passHref>
                <Link href='/' >
                  <Image src={useColorModeValue("/logo/logo.png", "/logo/logo-white.png")} maxW="120" />
                </Link>
              </NextLink>

              <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>

            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
              <IconButton aria-label="Cari Produk" icon={<SearchIcon />} />
              <Flex display={{ base: 'none', md: 'flex' }}>
                <ThemeToggle />
              </Flex>

              <Flex align='center' display={{ base: 'none', md: 'flex' }}>
                <Avatar size="sm" src="https://bit.ly/broken-link" />
              </Flex>
            </Stack>
          </Flex>
        </Container>


      </Flex>


      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const router = useRouter()
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                rounded='md'
                bg={router.pathname === navItem.href ? useColorModeValue('gray.200', 'gray.600') : 'transparent'}
                color={useColorModeValue('gray.600', 'gray.200')}
                _hover={{
                  textDecoration: 'none',
                  backgroundColor: useColorModeValue('gray.100', 'gray.900'),
                  color: useColorModeValue('gray.800', 'white'),
                }}>
                <NextLink href={navItem.href ?? '#'}>
                  {navItem.label}
                </NextLink>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}>
      <NextLink href={href ?? '#'}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'blue.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </NextLink>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Produk',
    href: '/produk',
    children: [
      {
        label: 'Networking',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'PC Component',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Mobile Broadband',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Network Storage',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
      {
        label: 'Accessories',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Tentang Kami',
    href: '/tentang',
  },
  {
    label: 'Support',
    href: '/support',
  },
  {
    label: 'Store',
    href: '/toko',
  }


];


