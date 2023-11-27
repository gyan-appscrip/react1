import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './index.css'

const logo = "https://trulyfreehome.com/img/logo-new.png";

function Header() {
    return ( 
        <div className='header'>
            <div className='left'>
                {/* <div className='menuIcon'><MenuIcon/></div> */}
                <div className='logo'><img src={logo} alt="Logo" /></div>
            </div>
            <div className='right'>
                <div className='header-search'>   
                    <input placeholder='Find truly free product' />
                    <span><SearchIcon/></span>
                </div>
                <PermIdentityIcon/>
                <ShoppingCartOutlinedIcon/>
            </div>
        </div>
     );
}

export default Header;