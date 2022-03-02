import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { productContext } from '../../ProductContext/ProductContext';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import './Navbar.css';
import Logo from '../Images/symbol-of-caduceus.jpg'



export default function NavBar() {
    const { cartLength, getCartLength, useAuth, logout } = React.useContext(productContext)
    const [ searchParams, setSearchParams ] = useSearchParams()
    const[ searchVal, setSearchVal ] = React.useState(searchParams.get('q') ? searchParams.get('q') : '')

    const currentUser = useAuth()
    async function handleLogOut(){
      try {
        await logout()
      } catch(error) {
        console.log(error);
      }
    }

    React.useEffect(() => {
        setSearchParams({
            'q': searchVal,
            '_limit': 3,
            '_page': 1
        })
    }, [searchVal])


    React.useEffect(() => {
        getCartLength()
    }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        
      <Link  style={{textDecoration: 'none'}} to={!currentUser ? '/login' : '#' }>
        <MenuItem disabled={currentUser ? true : false}  onClick={handleMenuClose}>Login</MenuItem>
      </Link>
        
      <Link style={{textDecoration: 'none'}} to={!currentUser ? '/register' : '#'}>
        <MenuItem  disabled={currentUser ? true : false} onClick={handleMenuClose}>Register</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    
    >
        <Link to='/cart' style={{color: 'white'}}>
        <IconButton sx={{color: 'black'}} color="inherit">
            <Badge badgeContent={cartLength} color="secondary">
                <ShoppingCartIcon sx={{display: 'flex', justifyContent: 'center'}} />
            </Badge>
        </IconButton>
        </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  
  // const navigate = useNavigate()

  // const returnHomeP age = () => {
  //   navigate('/')
  // }
  
  return (
    <div>
              <Navbar className='navbar' expand="lg">
  <Container fluid>
    <div><img style={{width: '50px', height: '50px'}} src={Logo} alt="" /></div>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      <Nav
        className="me-auto my-2 my-lg-0"
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Box sx={{ flexGrow: 1 }} /> 
                      {currentUser ? (
                      <Button variant='success' disabled={!currentUser} onClick={handleLogOut}>Log Out</Button>
                      ) : null
                    }
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                      <Link to='/cart'>
                            <IconButton>
                                <Badge badgeContent={cartLength} color='secondary' sx={{paddingTop: '10'}}>
                                    <ShoppingCartIcon sx={{color: 'black', marginLeft: '3',marginTop: '5px'}}/>
                                </Badge>
                            </IconButton>
                      </Link>
                        <IconButton
                          size="large"
                          edge="end"
                          aria-label="account of current user"
                          aria-controls={menuId}
                          aria-haspopup="true"
                          onClick={handleProfileMenuOpen}
                          color="inherit"
                        >
                          <AccountCircle sx={{marginTop:'3px'}} />
                        </IconButton>
                      </Box>
                      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                          size="large"
                          aria-label="show more"
                          aria-controls={mobileMenuId}
                          aria-haspopup="true"
                          onClick={handleMobileMenuOpen}
                          color="inherit"
                        >
                          <MoreIcon />
                        </IconButton>
                        {renderMobileMenu}
                        {renderMenu}   
                  </Box>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}

