import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { productContext } from '../../../ProductContext/ProductContext';
import { useNavigate } from 'react-router-dom';

const OjectAdd = () => {
    const [values, setValues] = React.useState({
        title: '',
        image: '',
        price: '',
        type: '',
        description: '',
    })

    const { addProduct } = React.useContext(productContext)
    const navigate = useNavigate()

    const handleInp = (e) => {
      let obj = {
          ...values,
          [e.target.name]: e.target.value
      }
      setValues(obj)
  }

    const handleSave = () => {
        if(!values.image) values.image = ''
        addProduct({...values, price: +values.price})
        navigate('/')
    }

    return (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: '40px auto',
          maxwidth: 1000,
          height: 'auto',
        },
      }}
    >
      <Paper elevation={3}>
        <h1 style={{textAlign: 'center'}}>Добавить Товар</h1>
        <div style={{display: 'flex', justifyContent: 'space-around', color: 'black'}}>
            <div style={{margin: '10px'}}>
                <img width='300' src={values.image ? values.image : 'https://content.onliner.by/news/1100x5616/472baa6904f365c4bae96d6b77c13010.jpeg' } />
            </div>
            <div style={{
                width: '450px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <form  autoComplete='off' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextField style={{padding: '10px'}} name='title' onChange={handleInp} value={values.title} variant='outlined' label='Title'/>
                    <TextField style={{padding: '10px'}} name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image'/>
                    <TextField style={{padding: '10px'}} name='price' onChange={handleInp} value={values.price} variant='outlined' label='Price'/>
                    <TextField style={{padding: '10px'}} name='type' onChange={handleInp} value={values.type} variant='outlined' label='Type'/>
                    <TextField style={{padding: '10px'}} name='description' onChange={handleInp} value={values.description} variant='outlined' label='Description'/>
                </form>
                <Button onClick={handleSave} variant="contained" color='warning'>Добавить</Button>
            </div>
        </div>
      </Paper>
    </Box>
    );
};

export default ObjectAdd;