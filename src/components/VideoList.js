import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, HStack, Heading, Icon, IconButton, Image, Input, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { BiChat, BiLike, BiShare } from 'react-icons/bi';
import { PiSunDimThin, PiSunFill, PiSunThin, PiVideoFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const VideoList = () => {
    // useState는 화면 랜더링에 반영됨
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(1);                // default 값 1
    const [search, setSearch] = useState(' ');    // default 값 강아지똥

    // useRef는 화면 랜더링 반영되지 않는 참조값
    const pageCount = useRef(1);                  // 1page

    // Chakra UI 에서 제공하는 훅
    const color = useColorModeValue('pink.300', 'pink.100');
    const buttonScheme = useColorModeValue('yellow', 'yellow');

    const fetchVideos = async() => {
        const response = await fetch(
            `https://dapi.kakao.com/v2/search/vclip?query=${search}&page=${page}`, 
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
        pageCount.current = pageCount.current > 15 ? 15 : pageCount.current;        // pageCount가 15가 넘어가면 15 아니면 냅둠 (최대 요청가능 페이지가 15라서)
        console.log(pageCount.current);

        setVideoList(data.documents);
    }

    const changeSearch = e => {
        // 내용 작성
        if(e.target.value.length >= 2)
            setSearch(e.target.value);
    }

    useEffect(() => {
        fetchVideos();
    }, [page, search]);

    return (
        <>
            <Box>
                <Heading color={color} padding={"30px"}>
                    <Icon as={PiVideoFill} boxSize={"1.5em"} />동영상 검색 목록
                </Heading>

                {/* <h1>동영상 검색 목록</h1> */}
                <Input 
                    type="text" 
                    placeholder="검색어 입력" 
                    onChange={changeSearch} 
                    size="lg" 
                    variant="filled" 
                />
                {/* <input type="text" placeholder="검색어 입력" onChange={changeSearch} /> */}
                <HStack justify='space-between' flexWrap='wrap' gap={"10px"} m={"40px 0px"} padding={"50px"}>
                    {videoList.map((video, index) => (
                        <Link to={video.url} key={video.url}>
                            <Card maxW='md'>
                                <CardHeader justify='center'>
                                <Image
                                    w={"400px"}
                                    src={video.thumbnail}
                                    alt={video.title}
                                    borderRadius="lg"
                                />
                                </CardHeader>
                                <CardBody>
                                    <Text
                                    fontWeight={"bold"}
                                    textOverflow={"ellipsis"}
                                    overflow={"hidden"}
                                    lineHeight={"1em"}
                                    height={"2em"}
                                    >
                                    {video.author}
                                    </Text>
                                    {video.title}
                                </CardBody>
                                
                                <CardFooter
                                    justify='space-between'
                                    flexWrap='wrap'
                                    sx={{
                                    '& > button': {
                                        minW: '136px',
                                    },
                                    }}
                                >
                                    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                                    Like
                                    </Button>
                                    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                                    Comment
                                    </Button>
                                    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                                    Share
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </HStack>
                {/* <TableContainer>
                    <Table variant={"striped"} colorScheme='yellow'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Title</Th>
                                <Th>Author</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {videoList.map((video, index) => (
                                <>
                                    <Tr>
                                        <Td>{(page - 1) * 10 + index + 1}</Td>
                                        <Td>
                                            <a href={video.url}>{video.title}</a>
                                        </Td>
                                        <Td>{video.author}</Td>
                                    </Tr>
                                </>
                            ))}
                        </Tbody>
                        <Tfoot></Tfoot>
                    </Table>
                </TableContainer> */}
                <HStack justifyContent={"center"} margin={"50px"}>
                    {Array.from({length: pageCount.current}, (_, index) => (
                        <>
                            <Button 
                                colorScheme={
                                    page === index + 1 ? 
                                    "pink" : buttonScheme
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
// {Array.from({length: pageCount.current}, (_, index))} 
// 배열이 없는데 배열이 있는것 처럼 오브젝트 담아놓고 배열 크기를 pageCount라고 함 그리고 엘리먼트 없으니까 없다는 뜻으로 _ 써줌

//<li onClick={e => { setPage(index + 1) }}>{index + 1}</li>
// 핸들러 따로 정의하지 않고 즉시실행 함수를 넣어줌
export default VideoList;