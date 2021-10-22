import React from 'react'
import CategoryCard from '../components/CategoryCard'
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

let categoryData = [
    {
      id: 1,
      breakpoint: {xs:12, sm: 6, md: 4},
      imgUrl: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      bgInit: '60% 0%',
      bgFinal: '70% 20%',
      category: 'HATS',
      linkUrl: 'hats'
    },
    {
      id: 2,
      breakpoint: {xs:12, sm: 6, md: 4},
      imgUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      bgInit: '60% 20%',
      bgFinal:'70% 40%',
      category: 'JACKETS',
      linkUrl: 'jackets'
    },
    {
      id: 3,
      breakpoint: {xs:12, sm: 6, md: 4},
      imgUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      bgInit: '60% 0%',
      bgFinal: '70% 20%',
      category: 'SNEAKERS',
      linkUrl: 'sneakers'
    },
    {
      id: 4,
      breakpoint: {xs:12, sm: 12, md: 6},
      imgUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      bgInit: '60% 0%',
      bgFinal: '70% 20%',
      category: 'MEN',
      linkUrl: 'men'
    },
    {
      id: 5,
      breakpoint: {xs:12, sm: 12, md: 6},
      imgUrl: 'https://images.unsplash.com/photo-1602370463198-086436840055?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
      bgInit: '60% 40%',
      bgFinal: '70% 60%',
      category: 'WOMEN',
      linkUrl: 'women'
    }
  ];

function FullWidthGrid() {
    return (
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
  
          {
            categoryData.map(({ id, ...otherProps }) => {
                return (<CategoryCard 
                    key={id}
                    {...otherProps}
                />)
            })
          }
            
        </Grid>
      </Box>
    );
}


function HomePage() {
    return (
        <FullWidthGrid />
    );
}

export default HomePage;