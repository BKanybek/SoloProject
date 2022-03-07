import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { equipmentContext } from '../../../ProductContext/EquipmentContext';

export default function CommentsEdit({handleClose}) {
    const [values, setValues] = React.useState({
        body: "",
    })
    const {editStream, editComment, saveEditedComment} = React.useContext(equipmentContext)
    const {id} = useParams()

    React.useEffect(() => {
        editComment(id)
    }, [id])

    React.useEffect(() => {
        if(editStream){
            setValues(editStream)
        }
    }, [editStream])


    const handleEditCommentInp = (e) => {
        let obj ={
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSaving = () => {
        saveEditedComment(values)
    }

    function toSave(){
        handleClose()
        handleSave()
    }

    return(
        <div>
        {/* <img src="" alt="" 
            name='userimg'
            onChange={handleInp}
            value={values.image}
            /> */}
        <form action="">
            
            <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            size='small'
            type='text'
            name='username'
            onChange={handleEditCommentInp}
            value={values.username}
            />
            <TextField
            name='image'
            onChange={handleEditCommentInp} 
            value={values.image} 
            variant='outlined' 
            label='Фото
            '
            />
            <textarea
            // className="comment-form-textarea"   
            style={{width: '100%',
                height: '80px',
                marginBottom: '8px',
                marginTop: '8px',
                border: '1px solid rgb(107, 114, 12)'}}
            type="text"
            placeholder="Write new comment about our Agency" 
            name='body'
            onChange={handleEditCommentInp}
            value={values.body}
            />

            <button onClick={toSave}> 
                redy to post
            </button>

            
        </form>
    </div>
    );
}