import { Fragment } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
  Select
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import axios from 'axios';
const ShineBaraa = () => {
  interface ProductProps {
    username: string,
    adress: string,
    email: string,
    productname: string,
    value: string,
    category: string,
    description: string,
    features: string,
    images: string
  }
  const [image, setImage] = useState({});
  const handleSubmit =async () =>{
    const res = axios.post('http://localhost:5000/additem', image)
  }

  const handleImages = (e:any) =>{
    console.log(image);

    const formData = new FormData();
    formData.append('my-image-file', e.target.files[0], e.target.files[0].name );
    setImage(formData);
  }

  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justify="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            Шинэ бараа оруулах
          </Heading>

        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
        </Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel>Хандивлагчийн нэр</FormLabel>
                <Input type="text" placeholder="Балдан" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Цахим хаяг</FormLabel>
                <Input type="email" placeholder="test@test.com" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subjБect">
              <FormLabel>Барааны нэр</FormLabel>
              <Input type="text" placeholder="Жишээ нь 2022 оны шинэ ROLEX" rounded="md" />
            </FormControl>
            <FormControl id="subjБect">
              <FormLabel>Барааны Үнэ</FormLabel>
              <Input type="text" placeholder="1000" rounded="md" />
            </FormControl>
            <FormControl id="category">
            <FormLabel>Барааны төрөл сонгох</FormLabel>
              <Select placeholder='Төрөл сонгоно уу'>
                <option value='option1'>Цахилгаан бараа</option>
                <option value='option2'>Компьютер, дагалдах хэрэгсэл</option>
                <option value='option3'>Гэр ахуйн бараа</option>
                <option value='option3'>Тавилга</option>
                <option value='option3'>Cпорт</option>
                <option value='option3'>Үнэт эдлэл</option>
                <option value='option3'>Хүнс</option>
                <option value='option3'>Тоглоом</option>
                <option value='option3'>Бусад</option>
              </Select>
            </FormControl>
            <FormControl id="message">
              <FormLabel>Барааны дэлгэрэнгүй тайлбар</FormLabel>
              <Textarea size="lg" placeholder="Тайлбар бичих" rounded="md" />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Барааны үзүүлэлтүүд</FormLabel>
              <Textarea size="lg" placeholder="CPU:CORE I9," rounded="md" />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Барааны зураг</FormLabel>
              <Input onChange={handleImages} accept='image/*' type='file' multiple rounded="md" />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="green.300"
              color="white"
              _hover={{
                bg: 'green.500'
              }}
              rounded="md"
              onClick={handleSubmit}
              w={{ base: '100%', md: 'max-content' }}
              >
              Илгээх
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default ShineBaraa;