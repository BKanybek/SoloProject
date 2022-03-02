   
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from '@mui/material/styles'
import {Box, Grid, Paper, FormControl, FormLabel, RadioGroup,    FormControlLabel, Radio, Slider, Button 
} from '@mui/material'
import { productContext } from '../../../../ProductContext/ProductContext';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Filter = () => {
    const search = new URLSearchParams(window.location.search)
    const navigate = useNavigate()
    const { getProducts } = useContext(productContext)
    const [type, setType] = useState(search.get('type') || '') 
    const [price, setPrice] = useState(search.get('price_lte') || 0)
    
    const [searchParams, setSearchParams] = useSearchParams()

    const filterProducts = (key, value) => {
        search.set(key, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '')
        setPrice(+search.get('price_lte' || 0))
        getProducts()
    }

    const handleChangeType = (e, value) => {
        search.set(e, value)
        let newPath = `${window.location.pathname}?${search.toString()}`
        navigate(newPath)
        setType(search.get('type') || '')
        getProducts()
    }

    const resetFilter = () => {
        navigate('/')
        setPrice(0)
        setType('')
        setSearchParams({
            '_limit': 6,
            "_page": 1
        })
        getProducts()
    }
    
    
    return (
        <Box sx={{ flexGrow: 1, display: 'flex', paddingTop: '10px'}}>
            <Grid container spacing={1} sx={{display: 'flex', justifyContent: 'center', paddingTop: '50px', boxShadow: 'none', margin: '0 10px'}}>
                <Grid>
                    <Paper sx={{boxShadow: 'none', display: 'flex', flexDirection: 'column'}}>
                        <FormControl component='fieldset'>
                            <RadioGroup    
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                aria-label='gender' 
                                // name='gender1' 
                                value={type} 
                                onChange={(e) => handleChangeType("type", e.target.value)}
                            >
                                <FormControlLabel 
                                    value='men'
                                    control={<Radio/>}
                                    label="Men's"
                                />
                                <FormControlLabel
                                    value='women'
                                    control={<Radio/>}
                                    label="Women's"
                                />
                                <FormControlLabel
                                    value='accessories'
                                    control={<Radio/>}
                                    label="Accessories"
                                />
                            </RadioGroup>
                        </FormControl>
                        
                        <Grid sx={{display: 'flex', justifyContent: 'center'}}> 
                            <Slider sx={{color: 'black'}}
                                onChange={(e) => filterProducts('price_lte', e.target.value)} valueLabelDisplay='auto' max={1000000}
                                value={price}
                                step={500}
                            />
                        </Grid>
                        <Button sx={{background: 'black'}} onClick={resetFilter}
                            variant='contained'>
                            Сбросить
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            
        </Box>
    );
};

export default Filter;
