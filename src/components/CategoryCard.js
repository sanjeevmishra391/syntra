import * as React from 'react';
import { withRouter } from 'react-router';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';


const CategoryCard = ({breakpoint, imgUrl, bgInit, bgFinal, category, linkUrl, history, match}) => {
    return (
        <Grid item xs={breakpoint.xs} sm={breakpoint.sm} md={breakpoint.md} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <Box sx={{ 
                backgroundImage: `url(${imgUrl})`,
                backgroundPosition: `${bgInit}`,
                height: 250,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: '0.3s ease-out',
                ':hover': { 
                backgroundPosition: `${bgFinal}`,
                }
            }}>
                <Box sx={{
                backgroundColor: 'white',
                opacity: '0.9',
                textAlign: 'center',
                padding: '10px'
                }}>
                <h1 style={{margin: '5px'}}>{category}</h1>
                <span style={{fontWeight: '500'}}>SHOP NOW</span>
                </Box>
            </Box>
        </Grid>
    );
}

export default withRouter(CategoryCard);