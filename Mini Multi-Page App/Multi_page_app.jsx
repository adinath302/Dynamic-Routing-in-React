import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import ContactDetails from './pages/ContactDetails.jsx'
const Multi_page_app = () => {
    return (
        <div className='flex flex-col w-full items-center justify-between p-6'>
            <div className='flex '>
                <div className='flex flex-col'>
                    <h1>Multi-Page App</h1>
                    <p>This is a simple multi-page application using React Router.</p>
                </div>
                <div className='flex '>
                    <nav className='flex gap-4 cursor-pointer'>
                        <Link to='/'>Home</Link>
                        <Link to='/About'>About</Link>
                        <Link to='/Products'>Products</Link>
                        <Link to='/Contact'>Contact</Link>
                    </nav>
                </div>
            </div>
            <Routes className='flex w-full'>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Contact/:contactId' element={<ContactDetails />} />
            </Routes>
        </div>
    )
}

export default Multi_page_app;