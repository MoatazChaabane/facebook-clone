import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import ForumIcon from '@mui/icons-material/Forum';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@mui/material';
function Header() {
  return (
    <div className='header'>
    <div className='header__left'>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png' alt='logo facebook'/>
<div className='header__input'>
  <SearchIcon/>
  <input type='text' placeholder='Search Facebook'/>

  
</div>

    </div>
    <div className='header__middle'>

<div className='header__option header__option__active'>
<HomeIcon fontSize='large'/>
</div>
<div className='header__option'>
<OndemandVideoIcon fontSize='large'/>
</div>
<div className='header__option'>
<StorefrontIcon fontSize='large'/>
</div>


<div className='header__option'>
<SupervisedUserCircleIcon fontSize='large'/>
</div>

<div className='header__option'>

<VideogameAssetIcon fontSize='large'/>
</div>
</div>
    <div className='header__right'>

<IconButton>
<AppsIcon/>
</IconButton>
<IconButton>
<ForumIcon/>
</IconButton>
<IconButton>
<NotificationsIcon/>
</IconButton>
<Avatar/>
    </div>
    

   
    </div>
    )
}

export default Header