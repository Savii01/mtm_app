import './sideBar.css'
import{LocationSearching,AccountBalanceWallet, Person,Payment, Receipt,AttachMoney,Event} from '@material-ui/icons'
import{Link} from "react-router-dom"

export default function SideBar() {
  return (
    <div className='sidebar'>    
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">

                    <Link to="/address" className='link'>
                        <li className="sidebarListItem">
                        <LocationSearching className='sidebarIcon' />
                        Address
                        </li>
                    </Link>
                    
                    <Link to="/acctDetails" className='link'>
                        <li className="sidebarListItem">
                        <AccountBalanceWallet className='sidebarIcon' />
                        Account Details
                        </li>
                    </Link>
                    <Link to="/manager" className='link'>
                        <li className="sidebarListItem">
                        <Person className='sidebarIcon' />
                        Manager
                        </li>
                    </Link>
                    <Link to="/AdminAss" className='link'>
                        <li className="sidebarListItem">
                        <Person className='sidebarIcon' />
                        Administrative Assistant
                        </li>
                    </Link>
                    <Link to="/artist" className='link'>
                        <li className="sidebarListItem">
                        <Person className='sidebarIcon' />
                        Artist
                        </li>
                    </Link>
                    <Link to="/recArtist" className='link'>
                        <li className="sidebarListItem">
                        <Person className='sidebarIcon' />
                        Recommended Artist
                        </li>
                    </Link>
                    <Link to="/eventOrg" className='link'>
                        <li className="sidebarListItem">
                        <Person className='sidebarIcon' />
                        Event Organiser
                        </li>
                    </Link>
                    <Link to="/expense" className='link'>
                        <li className="sidebarListItem">
                        <Payment className='sidebarIcon' />
                        Expense
                        </li>
                    </Link>
                    <Link to="/management" className='link'>
                        <li className="sidebarListItem">
                        <Payment className='sidebarIcon' />
                        Management
                        </li>
                    </Link>    
                    <Link to="/eventTable" className='link'>
                        <li className="sidebarListItem">
                        <Payment className='sidebarIcon' />
                        Events
                        </li>
                    </Link>
                    <Link to="/contract" className='link'>
                        <li className="sidebarListItem">
                        <Payment className='sidebarIcon' />
                        Contracts
                        </li>
                    </Link>
                    <Link to="/invoice" className='link'>
                        <li className="sidebarListItem">
                        <Payment className='sidebarIcon' />
                        Invoice
                        </li>
                    </Link>
                    <Link to="/news" className='link'>
                        <li className="sidebarListItem">
                        <Payment className='sidebarIcon' />
                        News
                        </li>
                    </Link>
                </ul>
            </div>
            
        </div>
    </div>
  )
}
