
import './App.css'
import MainFunc from './components/main-part/MainFunc';
import Sidebar from './components/sidebar/Sidebar'
import { FaRegUserCircle } from "react-icons/fa";

function App() {
  return (
    <div className='relative'>
      {/* navbar  */}
      <header className=' z-40 sticky top-0 left-0'>
        <div className="  navbar rounded-2xl bg-slate-300 container  mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Home</a></li>
                <li><a>Recipe</a></li>
                <li><a>About</a></li>
                <li><a>Search</a></li>

              </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-bold space-x-0 ">
              My Kitchen</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>Recipe</a></li>
              <li><a>About</a></li>
              <li><a>Search</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <label className=" text-xl lg:text-lg  lg:flex bg-gray-50 lg:bg-gray-200 p-3 lg:p-0 lg:input flex items-center gap-2 rounded-full mr-2 ">
              <input type="text" className="grow hidden lg:block" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <a className="btn text-xl rounded-full bg-green-500"><FaRegUserCircle></FaRegUserCircle></a>
          </div>
        </div>
      </header>
      {/* banner section  */}
      <section className=' w-[90%] lg:container mx-auto my-5'>
        <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: 'url(./src/assets/pexels-prince-photos-3054690.jpg)' }}>
          <div className="hero-overlay bg-black bg-opacity-80 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-2xl lg:text-5xl font-bold ">Discover an exceptional cooking
                <br />
                class tailored for you!</h1>
              <p className="mb-5 mx-auto max-w-sm lg:w-full">Assalamualaikum Everyone welcome to our kitchen.
              <br />
              in this page you will learn how to cook some of our best deserts .  
              </p>
              <div className='flex flex-col lg:flex-row justify-center gap-3'>
              <button className=" mx-auto lg:mx-0 text-center justify-center w-36 btn border-none bg-[#0BE58A]">Explore more </button>
              <button className=" mx-auto lg:mx-0 text-center justify-center w-36 btn btn-ghost border border-white">Our Feedback</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=' flex container mx-auto'>
        <MainFunc></MainFunc>
        <Sidebar></Sidebar>
      </div>
    </div>
  )
}

export default App
