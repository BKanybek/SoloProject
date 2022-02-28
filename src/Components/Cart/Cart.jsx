import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { productContext } from '../../ProductContext/ProductContext';
import { calcTotalPrice } from './CalcPrice/CalcPrice';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Cart() {
    const { cart, getCart, changeProductCount, deleteCartProduct } = React.useContext(productContext)
    React.useEffect(() => {
        getCart() 
    }, [])
    console.log()


  return (
    <>
      <div style={{backgroundColor: 'grey', height: '70px'}}></div>
      <TableContainer  sx={{paddingTop: '50px', display: 'flex', flexWrap: 'wrap'}} component={Paper}>
        <Table sx={{  }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Image</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Count</StyledTableCell>
              <StyledTableCell align="left">SubPrice</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {cart.products ? (
                  <>
                  {cart.products.map((elem) => (
                    <StyledTableRow key={elem.item.id}>
                          <StyledTableCell align='center' component='th' scope='row'>
                              <img width="150" src={elem.item.image} />
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                              {elem.item.title}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            $  {elem.item.price}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                              <input style={{width: '70px'}}
                                  type='number'
                                  value={elem.count}  
                                  onChange={(e) => changeProductCount(e.target.value, elem.item.id)}
                              />
                          </StyledTableCell>
                          <StyledTableCell align='left'>
                              {elem.subPrice}
                          </StyledTableCell>
                          <StyledTableCell align="center" onClick={() => deleteCartProduct(elem.item.id)}>
                              <DeleteIcon/>
                          </StyledTableCell>
                    </StyledTableRow> 
                  ))}
                  </>
              ) : (null)} 
              <TableRow>
                  <TableCell rowSpan={3}/>
                  <TableCell colSpan={2}>
                      <Typography variant='h4'>Total:</Typography>
                  </TableCell>
                      {
                          cart.products ? (
                              <TableCell align='right'>
                                  <Typography variant='h5'>$ {calcTotalPrice(cart.products)}</Typography>
                              </TableCell>
                          ) : (null)
                      }
              </TableRow>
              <TableRow>
                  <TableCell colSpan={2} align='right'>
                    <Link to='/list'>
                        <Button variant='contained' color='success'>
                            Back
                        </Button>
                      </Link>
                    <Link to='/pay'>
                      <Button variant='contained' color='success'>
                          Buy
                      </Button>
                    </Link>
                    
                  </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

