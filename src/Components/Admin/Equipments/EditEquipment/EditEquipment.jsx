import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import{ Link, useParams } from 'react-router-dom';
import { equipmentContext } from '../../../../ProductContext/EquipmentContext';


export default function EditEquipment  () {
    const [values1, setValues1] = useState({
        title1: '',
        image1: '',
        price1: '',
        type1: '',
        description1: ''
    })

    const { edit1, editEquipment, saveEditedEquipment } = React.useContext(equipmentContext)

    const {id} = useParams()

    React.useEffect(()=>{
        editEquipment(id)
    }, [id])

    React.useEffect(() => {
        if(edit1) {
            setValues1(edit1)
        }
    }, [edit1])

    const handleEditInp = (e) => {
        let obj1 ={
            ...values1,
            [e.target.name]: e.target.value
        }
        setValues1(obj1)
    }

    const handleSave = () => {
        saveEditedEquipment({...values1, id})
    }



    return (
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m:'40px auto',
          maxWidth: 1000,
          height: 'auto',
          padding: '10px'
        },
      }}
    >
        <Paper elevation={3}>
            <h1>Изменить данные</h1>
                <div style={{
                    display: 'flex',
                    justifyContent:'space-around',
                    color: 'black'
                }}>
                    <div>
                        <img width='300' src={values1.image1} alt={values1.title1} />
                    </div>
                    <div style={{
                         width: '450 px',
                         display: 'flex',
                         alignItems:'center',
                         flexDirection: 'column',
                         justifyContent: 'center'
                    }}>
                        <form noValidate
                        autoComplete='off' style={{
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <TextField 
                        style={{padding: '10px'}} name='title1' 
                        onChange={handleEditInp} 
                        value={values1.title1} variant='outlined' 
                        label='Title'/>
                    <TextField 
                        style={{padding: '10px'}} name='image1' 
                        onChange={handleEditInp} 
                        value={values1.image1} variant='outlined' 
                        label='Image'/>
                    <TextField 
                        style={{padding: '10px'}} name='price1' 
                        onChange={handleEditInp} 
                        value={values1.price1} variant='outlined' 
                        label='Price'/>
                    <TextField 
                        style={{padding: '10px'}} name='type1' 
                        onChange={handleEditInp} 
                        value={values1.type1} variant='outlined' 
                        label='Type'/>
                    <TextField 
                        style={{padding: '10px'}} name='description1' 
                        onChange={handleEditInp} 
                        value={values1.description1} variant='outlined' 
                        label='Description'/>
                </form>
                {/* <Link to='/list2'> */}
                    <Button onClick={handleSave} variant='contained' color='warning'>Save</Button>
                {/* </Link> */}
                    </div>
            </div>
      </Paper>
    </Box>
  );
}

