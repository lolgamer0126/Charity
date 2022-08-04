import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

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
        <Avatar
          src={
            'https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/293457464_144207431605426_7335646401258207402_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zZJhr5yLihQAX8xSnzx&_nc_oc=AQkb1A0e-aryajrNhE4IdtEVgWKQm8ACDkQWRi_V5QC4OPaM-V0D1-k0Qix70DnrFFU&_nc_ht=scontent.fuln8-1.fna&oh=00_AT_7453LYXCyVy3c-AqPB2D4psPTXWsxwL2wN7yPemcA7g&oe=62EF87BE'
          }
          mb={2}
          size={'xl'}
        />

        <Text fontWeight={600}>Эрдэнэ-Оч</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Вэб хөгжүүлэгч
        </Text>
      </Box>
    </Stack>
  );
}