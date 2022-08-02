import Simple from "../components/Navbar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import SidebarWithHeader from '../components/NavbarTwo'

const adPage = () =>{
    return(
        <div>
            <Simple/>

            <Box p={4}>Сурталчилгаанууд</Box>
            
            <Grid
              height='500px'
              templateRows='repeat(3, 2fr)'
              templateColumns='repeat(, 1fr)'
              gap={4}
              >
              <GridItem rowSpan={2} colSpan={1} bg='tomato' />
              <GridItem colSpan={2} bg='papayawhip' />
              <GridItem colSpan={2} bg='papayawhip' />
              <GridItem colSpan={4} bg='tomato' />
              <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            </Grid>
        </div>
    )
}

export default adPage;