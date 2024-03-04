import logo from '../assets/logo.svg'
import notification from '../assets/notification.svg'
import avatar from  '../assets/avatar.png'
import upload from '../assets/upload.svg'

function Navbar() {
  return (
    <div className='flex h-20 items-center justify-between px-4 bg-[#FCFCFF] border-b-2 border-b-[#EFEFFF] fixed w-full'>
    <div className="w-[30%]">
      <img src={logo} alt="Logo" />
    </div>
    <div className="w-[50%]">
      <ul className='flex gap-12'>
        <li>Free Designs</li>
        <li>License</li>
        <li>Articles</li>
        <li>Contributors</li>
        <li>About</li>
      </ul>
    </div>
    <div className="w-[20%] flex gap-10 items-center">
      <img src={notification} alt="notification" />
      <img src={avatar} alt="avatar"  className='size-10'/>
      <button className='h-12 w-[70%] bg-[#202142]  flex items-center justify-center gap-2 text-white rounded-[10px]'><img src={upload} alt="upload" /><span>Upload</span></button>
    </div>
   </div>
  )
}

export default Navbar