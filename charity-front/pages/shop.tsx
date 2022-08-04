import {Heading, Box, SimpleGrid} from "@chakra-ui/react";
import SidebarWithHeader from "../components/NavbarTwo";
import ProductSimple from "../components/ProductPreview";
import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect, useState} from "react";

interface Product {
    name: string;
    image: string;
    description: string;
    id: number;
    price: number;
    quantity: number;
    category: string;
    brand: string;
};

const Shop = () => {
    const [items, setItems] = useState<Product[]>([]);
    const fetchMoreData = () => {

        setItems([
            ...items, {
                name: "Nice Chair, pink",
                image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ix' +
                        'id=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&' +
                        'q=80',
                description: "test",
                id: 1,
                price: 14000,
                quantity: 1,
                category: "test",
                brand: "test"
            }, {
                name: "Nice Chair, pink",
                image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ix' +
                        'id=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&' +
                        'q=80',
                description: "test",
                id: 1,
                price: 14000,
                quantity: 1,
                category: "test",
                brand: "test"
            }, {
                name: "Nice Chair, pink",
                image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ix' +
                        'id=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&' +
                        'q=80',
                description: "test",
                id: 1,
                price: 14000,
                quantity: 1,
                category: "test",
                brand: "test"
            }, {
                name: "Nice Chair, pink",
                image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ix' +
                        'id=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&' +
                        'q=80',
                description: "test",
                id: 1,
                price: 14000,
                quantity: 1,
                category: "test",
                brand: "test"
            }, {
                name: "Nice Chair, pink",
                image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ix' +
                        'id=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&' +
                        'q=80',
                description: "test",
                id: 1,
                price: 14000,
                quantity: 1,
                category: "test",
                brand: "test"
            }, {
                name: "Nice Chair, pink",
                image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ix' +
                        'id=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&' +
                        'q=80',
                description: "test",
                id: 1,
                price: 14000,
                quantity: 1,
                category: "test",
                brand: "test"
            }, {
                name: "Nice Chair, pink",
                image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ix' +
                        'id=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&' +
                        'q=80',
                description: "test",
                id: 1,
                price: 14000,
                quantity: 1,
                category: "test",
                brand: "test"
            }, {
                name: "Nice Chair, pink",
                image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ix' +
                        'id=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&' +
                        'q=80',
                description: "test",
                id: 1,
                price: 14000,
                quantity: 1,
                category: "test",
                brand: "test"
            }, {
                name: "Nice Chair, pink",
                image: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ix' +
                        'id=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&' +
                        'q=80',
                description: "test",
                id: 1,
                price: 14000,
                quantity: 1,
                category: "test",
                brand: "test"
            }
        ]);
    };

    useEffect(() => {
        fetchMoreData();
    }, []);
    return (
        <SidebarWithHeader>
            <Box>
                <Heading>Shop</Heading>
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4> Loading ...</h4>}>
                    <SimpleGrid minChildWidth='220px' spacing='40px'>
                        {/* <ProductSimple /> */}
                        {
                            items.map(item => {
                                return <ProductSimple key={item.id} {...item}/>
                            })
                        }
                    </SimpleGrid>
                </InfiniteScroll>
            </Box>
        </SidebarWithHeader>

    );
}
export default Shop;