import { Box, Button, HStack, Heading, Icon, IconButton, Image, Input, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { GiSpellBook } from 'react-icons/gi';
import { PiSunFill } from 'react-icons/pi';
import { RiMoonClearFill } from 'react-icons/ri';

const BookList = () => {

    const [bookList, setBookList] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(' ');

    const pageCount = useRef(1);

    const color = useColorModeValue('yellow.400', 'yellow.100');
    const buttonScheme = useColorModeValue('green', 'green');

    const fetchBooks = async() => {
        const response = await fetch(
            `https://dapi.kakao.com/v3/search/book?query=${search}&page=${page}`,
            {
                method: "GET",
                headers: {
                    Authorization : `KakaoAK ${process.env.REACT_APP_API_KEY}`,
                },
            }
        );
        const data = await response.json();
        console.log(data);

        pageCount.current = data.meta.pageable_count % 10 > 0 ? data.meta.pageable_count / 10 + 1 : data.meta.pageable_count / 10;
        pageCount.current = Math.floor(pageCount.current);
        pageCount.current = pageCount.current > 15 ? 15 : pageCount.current;

        setBookList(data.documents);
    }

    const changeSearch = e => {
        if(e.target.value.length >= 2)
            setSearch(e.target.value);
    }

    useEffect(() => {
        fetchBooks();
    }, [page, search]);

    return (
        <>
            <Box>
                <Heading color={color} margin={"30px"}>
                    <Icon as={GiSpellBook} boxSize={"1.5em"} />도서 검색 목록
                </Heading>

                <Input 
                    type="text"
                    placeholder='검색어 입력'
                    onChange={changeSearch}
                    size='lg'
                    variant='filled'
                />

                <TableContainer>
                    <Table variant={"striped"} colorScheme='green'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Image</Th>
                                <Th>Title</Th>
                                <Th>Author</Th>
                                <Th>Publisher</Th>
                                <Th>Price</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {bookList.map((book, index) => (
                                <>
                                    <Tr>
                                        <Td>{(page - 1) * 10 + index + 1}</Td>
                                        <Td>
                                        <Image
                                            w={"150px"}
                                            src={book.thumbnail}
                                            alt={book.title}
                                        />    
                                        </Td>
                                        <Td><a href={book.url}>{book.title}</a></Td>
                                        <Td>
                                            {book.authors.length === 0 ? "저자 미상" : book.authors}
                                        </Td>
                                        <Td>{book.publisher}</Td>
                                        <Td>{book.price}</Td>
                                    </Tr>
                                </>
                            ))}
                        </Tbody>
                        <Tfoot></Tfoot>
                    </Table>
                </TableContainer>
                <HStack justifyContent={"center"} margin={"50px"}>
                    {Array.from({length: pageCount.current}, (_, index) => (
                        <>
                            <Button
                                colorScheme={
                                    page === index + 1 ?
                                    "yellow" : buttonScheme
                                }
                                onClick={e => {
                                    setPage(index + 1);
                                }}
                            >
                                {index + 1}
                            </Button>
                        </>
                    ))}
                </HStack>
            </Box>
        </>
    );
};

export default BookList;