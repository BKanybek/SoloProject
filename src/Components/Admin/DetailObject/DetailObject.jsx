import { ShoppingBag, ShoppingCart } from '@mui/icons-material';
import { IconButton, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import ImgCard from '../ImgCard/'

const ProductDetail = () => {
    const {id} = useParams()
    const { detail, getDetail, checkProductInCart, addToCart } = useContext(productContext)
    console.log(detail, 'detail')
    useEffect(() => {
        getDetail(id)
    }, [id])

    return (
        <>
            <div style={{width: '100', height: '81px', backgroundColor: 'grey'}}></div>
            <div>
                <img style={{width: '100%'}} src="https://623a6e1cd70c9dbd3d3c-7dcd1a1af7ff1e866416ef4f946f2c74.ssl.cf3.rackcdn.com/rolex/landing-page-2019/banner_img_1680x260.jpg" />
            </div>
            <Paper sx={{width: '100%', height: '100%', padding: "100px 0", boxShadow: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
                <Typography variant='h2' style={{textAlign: 'center'}}>ROLEX</Typography>
                {
                    detail ? (
                        <div  style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'start', padding: 20,  flexWrap: 'wrap'}}>
                            <div>
                                <img width='320' src={detail.image}/>
                            </div>
                            <div style={{
                                width: '450px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex=start',
                                textAlign: 'start',
                                justifyContent: 'center'
                            }}>
                                <Typography variant='h5'>{detail.type}</Typography>
                                <Typography variant='h3' sx={{py: 2}}>{detail.title}</Typography>
                                <Typography variant='h5'>{detail.description}</Typography>
                                <div style={{display: 'flex'}}>
                                    <Typography variant='h4' sx={{py: 2}}>$ {detail.price}</Typography>
                                    <IconButton sx={{paddingLeft: '50px'}} onClick={() => {
                                        addToCart(detail)  
                                        }} 
                                        color = {checkProductInCart(detail.id) ? 'success' : 'primary'}  
                                        >
                                        <ShoppingBag />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    ): (<h1> Loading . . .</h1>)
                }
            </Paper>
        </>
    );
};

export default ProductDetail;








