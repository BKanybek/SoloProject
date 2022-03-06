import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton, Paper, Skeleton} from '@mui/material';
import {Link} from 'react-router-dom'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import { equipmentContext } from '../../../ProductContext/EquipmentContext';
import { productContext } from '../../../ProductContext/ProductContext';
export default function CommentShow({item}) {
    const {deleteComment} = React.useContext(equipmentContext)
    const {useAuth} = React.useContext(productContext)
    const currentUser = useAuth()




    // let userComments = (
    //     <div>
    //         {currentUser?.email === "admin1@gmail.com" ? (
    //             <Typography gutterBottom variant='h5'>
    //                 {currentUser.email}
    //             </Typography>
    //           ) : null
    //         } 
    //     </div>
    // )   



    let icons = (
        <CardActions disableSpacing>
            <IconButton onClick={() => deleteComment(item.id)}>
                <DeleteOutlineIcon/>
            </IconButton>
            <Link to={`/editcoment/${item.id}`}>
                <IconButton>
                <CreateOutlinedIcon/>
                </IconButton>
            </Link>
        </CardActions>
    )    
  return (
    <Paper elevation={8} sx={{ width: '300px', height: '200px'}} >  
        <CardContent>
            <div style={{display: 'flex',}}>
                <Avatar sx={{ marginRight: '20px', width: 60, height: 60 }} />
                <div>
                    <Typography>
                        Гость
                    </Typography>
                    <Typography sx={{fontSize: '10px'}}>
                        {item.time}
                    </Typography>
                </div>
            </div>
            <Typography sx={{ marginTop: '15px'}}>
                {item.body}
            </Typography>
           
            
        </CardContent> 
        {icons} 
    </Paper>
  );
}