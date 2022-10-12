import { Avatar, Box, Stack, Text, useColorModeValue, Image } from '@chakra-ui/react';

export default function MyText() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Бидний ихэнх нь маш их азтай хүмүүс. Гэвч энэ аз бас хүн болгонд тохиолдоод байдаггүй. 
        Хамгийн гайхалтай нь энэ зөвхөн бурханы шийдэл биш таны ч бас шийдэл байж болно. Та үнэхээр өөрийн сайн сайхныг бусдад түгээх хүсэлтэй байвал заавал шууд мөнгө төгрөг гэхгүйгээр сурталчилгаа үзээд, эсвэл өөрт хэрэггүй зүйлсээ хандивлаад бусдад бага ч болов туслах бүрэн боломжийг олгож байна.
      </Text>
      <Box textAlign={'center'}>
        <Image
          src={
            'smile.jpg'
          }
          mb={2}
          maxW={'400px'}
          maxH={'300px'}
          borderRadius={'full'}

        />

        <Text fontWeight={600}>Эрдэнэ-Оч</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Вэб хөгжүүлэгч
        </Text>
      </Box>
    </Stack>
  );
}