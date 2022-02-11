import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import InfoIcon from '@mui/icons-material/Info';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useState } from 'react';

const MobileMenu = (props) =>{
    let toggleDrawer = props.toggleDrawer
    let state = props.state
 
    // const [state, setState] = useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    //   });
    
    //   const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }
    
    //     setState({ ...state, [anchor]: open });
    //   };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider /> */}
          <List>
            {['SHOP', 'ABOUT', 'REVIEWS'].map((text, index) => (
              <ListItem>
                <ListItemIcon>
                    {text == 'SHOP' ?  <AddBusinessIcon /> : text == 'ABOUT' ? <InfoIcon/> :text == 'REVIEWS' ?<ReviewsIcon/>:"" }
                  {/* {index % 1 !== 0 ? <AddBusinessIcon /> : <MailIcon />} */}
                </ListItemIcon>
              <a href={text == 'SHOP' ? "#product_buy_sec" :text == 'ABOUT' ? "#aboutus_section":text == 'REVIEWS' ? "#reviews_section":""}><ListItemText primary={text} /></a>
              </ListItem>
         ))}
          </List>
        </Box>
      );
    return(
        <div>
       
          <React.Fragment key={'right'}>
            {/* <Button onClick={toggleDrawer('right', true)}>{'right'}</Button> */}
            <Drawer
              anchor={'right'}
              open={state['right']}
              onClose={toggleDrawer('right', false)}
              style={{    zIndex: '9999999999 !important'}}
            >
              {list('right')}
            </Drawer>
          </React.Fragment>
      </div>
    )

}
export default MobileMenu;
