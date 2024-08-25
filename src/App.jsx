// import './App.css'
import PostListProvider from './store/Post-List-Stor'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Login from './components/Login'
import Postlist from './components/Postlist'
import { useState } from 'react'
import CreatePost from './components/Create Post'
import Privacy from './components/Privacy'
import Feedback from './components/Feedback'

function App() {

const [SelectedTab,SetSelectedTab]=useState('Home');


  return (
    <PostListProvider>

<Navbar/>
<div className="app-content">
<Sidebar setTab={SetSelectedTab} active={SelectedTab}/>
{SelectedTab ==='Home' &&<Postlist/>}
{SelectedTab ==='Login' &&<Login/>}
{SelectedTab ==='Create Post' &&<CreatePost/>}
{SelectedTab ==='Privacy' &&<Privacy/>}
{SelectedTab ==='Feedback' &&<Feedback/>}
</div>
<Footer/>
    </PostListProvider>
   )
}

export default App
