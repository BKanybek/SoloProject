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

  
  const navigate = useNavigate()

  const returnHomePage = () => {
    navigate('/')
  }
  
  return (
    <Box sx={{ position: 'fixed', flexGrow: 1, width: '100%'}}>
      <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 0, }}  >           
        <Toolbar>  
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchVal}
              onChange={handleValue}
            />
          </Search> */}

          
          <Box sx={{ flexGrow: 1 }} />


          {currentUser ? (
            <Button variant='success' disabled={!currentUser} onClick={handleLogOut}>Log Out</Button>
          ) : null
        }
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           <Link to='/cart'>
                <IconButton>
                    <Badge badgeContent={cartLength} color='secondary' sx={{paddingTop: '10'}}>
                        <ShoppingCartIcon sx={{color: 'white', marginLeft: '3',marginTop: '5px'}}/>
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
          </Box> 
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}     
    </Box>
  );
}
