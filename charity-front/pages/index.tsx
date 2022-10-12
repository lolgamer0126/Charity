import {
    Button,
    Flex,
    Heading,
    Icon,
    Image,
    Stack,
    Text,
    useBreakpointValue
} from '@chakra-ui/react';
import React from 'react';
import {useEffect} from 'react';
import LoginWithGoogle from '../components/loginButton';

export default function SplitScreen() {
    const clientId = '411255982749-uem7h7b4j3h8ngone58qs2dnlcvejrql.apps.googleusercontent.com'

    return (
        <Stack
            minH={'100vh'}
            direction={{
                base: 'column',
                md: 'row'
            }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading
                        fontSize={{
                            base: '3xl',
                            md: '4xl',
                            lg: '5xl'
                        }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({base: '20%', md: '30%'}),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'blue.400',
                                zIndex: -1
                            }}>
                            Charity
                        </Text>
                        <br/>{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Туслахад мөнгө хэрэггүй
                        </Text>{' '}
                    </Heading>
                    <Text
                        fontSize={{
                            base: 'md',
                            lg: 'lg'
                        }}
                        color={'gray.500'}>
                        Та өөрөөсөө ямар ч зардал гаргахгүйгээр хүнд нөхцөлд байгаа хүмүүсд тусламж
                        үзүүлэх боломжтой боллоо
                    </Text>
                    <Stack
                        direction={{
                            base: 'column',
                            md: 'row'
                        }}
                        spacing={4}>
                        <LoginWithGoogle/>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={'https://cdn.vox-cdn.com/thumbor/DV1o8xiIvsW4iSz6hukfKAM4SDA=/1400x1400/filters' +
                            ':format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19411688/GettyImages_1' +
                            '060748862.jpg'
}/>
            </Flex>
        </Stack>
    );
}

export async function getServerSideProps(context : any) {
    const cookie = context.req?.headers['cookie'];
    if (cookie == null || cookie.length < 100) {
        return {props: {}};
    } else {
        context
            .res
            .writeHead(303, {Location: "/home"});
        context
            .res
            .end();
        return {props: {}};
    }

}