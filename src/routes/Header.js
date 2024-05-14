import { Button, HStack, Heading, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { PiSunFill } from 'react-icons/pi';
import { RiMoonClearFill } from 'react-icons/ri';
import { TbMoodSearch } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <header>
                <Heading textAlign={"center"} size={"2xl"} mb={"20px"} margin={"50px"}>
                    <Icon as={TbMoodSearch} /> 검색 서비스
                </Heading>
                <HStack justifyContent={"space-between"} margin={"50px"}>
                    <HStack>
                    <Button>
                        <Link to={"/"}>Home</Link>
                    </Button>
                    <Menu>
                        {({ isOpen }) => (
                        <>
                            <MenuButton isActive={isOpen} as={Button}>
                            Video
                            </MenuButton>
                            <MenuList>
                            <MenuItem>
                                <Link to={"/video/list"}>추천 영상</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to={"/video/search"}>영상 검색</Link>
                            </MenuItem>
                            </MenuList>
                        </>
                        )}
                    </Menu>
                    <Menu>
                        {({ isOpen }) => (
                        <>
                            <MenuButton isActive={isOpen} as={Button}>
                            Book
                            </MenuButton>
                            <MenuList>
                            <MenuItem>
                                <Link to={"/book/list"}>추천 도서</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to={"/book/search"}>도서 검색</Link>
                            </MenuItem>
                            </MenuList>
                        </>
                        )}
                    </Menu>
                    </HStack>
                    {colorMode === "light" ? (
                    <IconButton
                        icon={<RiMoonClearFill />}
                        onClick={toggleColorMode}
                        size={"lg"}
                    />
                    ) : (
                    <IconButton
                        icon={<PiSunFill />}
                        onClick={toggleColorMode}
                        size={"lg"}
                    />
                    )}
                </HStack>
            </header>
        </>
    );
};

export default Header;