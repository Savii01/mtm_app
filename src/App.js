import React, {Component} from 'react';
import {  BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import Topbar from './component/topbar';
import './App.css';
import SideBar from './component/sideBar';
import Address from './pages/address/addressList/address';
import NewAddress from './pages/address/newAddress/newAddress';
import AcctDetails from './pages/acctDetails/acctDetailsList/acctDetails';
import NewAcctDetails from './pages/acctDetails/newAcctDetails/newAcctDetails';
import AdminAss from './pages/adminAss/adminAss/adminAss';
import NewAdminAss from './pages/adminAss/newAdminAss/newAdminAss';
import Manager from './pages/manager/manager/manager';
import NewManager from './pages/manager/newManager/newManager';
import Artist from './pages/artist/artist/artist'
import NewArtist from './pages/artist/newArtist/newArtist';
import Expense from './pages/expense/expense/expense';
import NewExpense from './pages/expense/newExpense/newExpense'
import Management from './pages/management/management/management';
import NewManagement from './pages/management/newManagement/newManagement';
import EventOrg from './pages/eventOrg/eventOrg/eventOrg'
import NewEventOrg from './pages/eventOrg/newEventOrg/newEventOrg';
import EventTable from './pages/eventTable/eventTable/eventTable';
import NewEventTable from './pages/eventTable/newEventTable/newEventTable'
import Contract from './pages/contract/contract/contract';
import NewContract from './pages/contract/newContract/newContract';
import Invoice from './pages/invoice/invoice/invoice';
import NewInvoice from './pages/invoice/newInvoice/newInvoice';
import RecArtist from './pages/recArtist/recArtist/recArtist';
import NewRecArtist from './pages/recArtist/newRecArtist/newRecArtist';
import News from './pages/news/news/news';
import NewNews from './pages/news/newNews/newNews';
import AddressUpdate from './pages/address/addressUpdate/addressUpdate';
import AdminUpdate from './pages/adminAss/adminUpdate/adminUpdate';
import ArtistUpdate from './pages/artist/artistUpdate/artistUpdate';
import ContractUpdate from './pages/contract/contractUpdate/contractUpdate';
import EventOrgUpdate from './pages/eventOrg/eventOrgUpdate/eventOrgUpdate';
import EventUpdate from './pages/eventTable/eventUpdate/eventUpdate';
import ExpenseUpdate from './pages/expense/expenseUpdate/expenseUpdate';
import InvoiceUpdate from './pages/invoice/invoiceUpdate/invoiceUpdate';
import ManagementUpdate from './pages/management/managementUpdate/managementUpdate';
import ManagerUpdate from './pages/manager/managerUpdate/managerUpdate';
import NewsUpdate from './pages/news/newsUpdate/newsUpdate';
import RecArtistUpdate from './pages/recArtist/recArtistUpdate/recArtistUpdate';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {apiResponse: ""};
  }

  callAPI(){
    fetch("http://localhost:8080")
    .then(res => res.text())
    .then(res =>this.setState({ apiResponse: res }))
    .catch(err => err)
  }

  componentDidMount(){
    this.callAPI()
  }

 render(){
  return(
    <Router>

    <div className = 'App'>
      <p className= 'App-begins'>{this.state.apiResponse}</p>
    </div>

     <Topbar />
     <div className="container">
     <SideBar/>
    <Routes>
    <Route path="/address" element={<Address />}/>
    <Route path="/newAddress" element={<NewAddress />}/>
    <Route path="/acctDetails" element={<AcctDetails />}/>
    <Route path="/newAcctDetails" element={<NewAcctDetails />}/>
    <Route path="/adminAss" element={<AdminAss />}/>
    <Route path="/newAdminAss" element={<NewAdminAss />}/>
    <Route path="/manager" element={<Manager />}/>
    <Route path="/newManager" element={<NewManager />}/>
    <Route path="/Artist" element={<Artist />}/>
    <Route path="/newArtist" element={<NewArtist />}/>
    <Route path="/expense" element={<Expense />}/>
    <Route path="/newExpense" element={<NewExpense />}/>
    <Route path="/management" element={<Management />}/>
    <Route path="/newManagement" element={<NewManagement />}/>
    <Route path="/eventOrg" element={<EventOrg />}/>
    <Route path="/newEventOrg" element={<NewEventOrg />}/>
    <Route path="/eventTable" element={<EventTable />}/>
    <Route path="/newEventTable" element={<NewEventTable />}/>
    <Route path="/contract" element={<Contract />}/>
    <Route path="/newContract" element={<NewContract />}/>
    <Route path="/invoice" element={<Invoice />}/>
    <Route path="/newInvoice" element={<NewInvoice />}/>
    <Route path="/recArtist" element={<RecArtist />}/>
    <Route path="/newRecArtist" element={<NewRecArtist />}/>
    <Route path="/news" element={<News />}/>
    <Route path="/newNews" element={<NewNews />}/>
    <Route path="/address/:addressID" element={<AddressUpdate />}/>
    <Route path="/adminAss/:adminAssID" element={<AdminUpdate />}/>
    <Route path="/artist/:artistID" element={<ArtistUpdate />}/>
    <Route path="/contract/:contractID" element={<ContractUpdate />}/>
    <Route path="/eventOrg/:eventOrgID" element={<EventOrgUpdate />}/>
    <Route path="/eventTable/:eventID" element={<EventUpdate />}/>
    <Route path="/expense/:expenseID" element={<ExpenseUpdate />}/>
    <Route path="/invoice/:invoiceID" element={<InvoiceUpdate />}/>
    <Route path="/management/:managementID" element={<ManagementUpdate />}/>
    <Route path="/manager/:managerID" element={<ManagerUpdate />}/>
    <Route path="/news/:newsID" element={<NewsUpdate />}/>
    <Route path="/recArtist/:recArtistID" element={<RecArtistUpdate />}/>
    </Routes>
    </div>
     </Router>
  )
 }
} 

export default App;
