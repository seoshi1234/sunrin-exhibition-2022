import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Contact from './pages/Contact.js';
import Work from './pages/Work.js';
import WorkDetail from './pages/WorkDetail';
import { useEffect, useState } from 'react';
import Profile from './pages/Profile';
import {getStorage,ref,listAll,getDownloadURL} from 'firebase/storage'
import { initializeApp } from '@firebase/app';


function App(props) {
  const app = initializeApp(
    {
      apiKey: "AIzaSyAvI3mDUt0rpeP_Mei6tGQ5U79f45Jmj20",
      authDomain: "sunrin-exhibition-2022.firebaseapp.com",
      projectId: "sunrin-exhibition-2022",
      storageBucket: "sunrin-exhibition-2022.appspot.com",
      messagingSenderId: "24502545684",
      appId: "1:24502545684:web:4b23eb2263e80a5bcd2601",
      measurementId: "G-C13DN5VJNS"
    }
  )
  const storage = getStorage();
  const [workData,setWorkData]=useState([]);
  const [profileData,setProfileData] = useState([]);

  let loadData = async()=>{    
    let workData_raw = await import('./assets/workData.json')
    setWorkData([...workData_raw.data]);

    let profileList = await listAll(ref(storage,'profiles'));     
    let profileData_raw = await Promise.all(profileList.items.map(async (el)=>{
      let path = el._location.path_
      let imageUrl= await getDownloadURL(el)      
      return{name: path.replace(/[^ㄱ-ㅎ|가-힣]/g,''), imageURL:imageUrl};    
    }));     
    setProfileData([...profileData_raw]);
  }

  useEffect(()=>{
    loadData();
  },[])
  

  return (
    <div className="App">
      <Header />
      <div className="app_header-box" />
      <Routes>        
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/work' element={<Work data={workData}/>} />
        <Route exact path='/work/:title' element={<WorkDetail data={workData}/>} />
        <Route exact path='/profile' element={<Profile data={profileData}/>}></Route>
      </Routes>
      <div className="app_footer-box" />
      <Footer />
    </div>
  );
}

export default App;
