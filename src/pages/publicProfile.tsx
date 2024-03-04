import avatar from '../assets/avatar.png'
import { useState } from 'react';
import dribbble from '../assets/dribbble.svg'
import instagram from '../assets/instagram.svg'
import Settings from '../components/settings';
import Navbar from '../components/navbar';


function PublicProfile() {

    const [showProfileSettings, setShowProfileSettings] = useState<boolean>(false);
    const [profileImage, setProfileImage] = useState<string>(avatar);

    // const deletePicture = () =>{
    // }
    const handleProfileClick = () => {
      setShowProfileSettings(!showProfileSettings);
    }
  
    const handleFileChange = (e:any) => {
      const file: File = e.target.files[0];
      const reader: FileReader = new FileReader();
  
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
    };    
  
      if (file) {
        reader.readAsDataURL(file);
      }
    }

  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Settings/>
    <div className="w-[70%] ml-[40%] pt-44">
        <h2 className='font-bold text-2xl mb-8'>Public profile</h2>
        <div className="flex gap-9 items-center">
        <img src={profileImage} alt="Profil"  className='size-52 rounded-full'/>
        <div className='flex items-center gap-5'>
          <button onClick={handleProfileClick} className='h-12 px-4 bg-[#202142]  flex items-center justify-center gap-2 text-white rounded-[10px]'>Change Picture</button>
          {showProfileSettings && (
            <div>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
          )}
          </div>
        </div>
        <div className="form w-[45%] pt-16">
            <form>
                <div className="flex gap-4 justify-between">
                    <div>
                        <label>First name</label> <br />
                        <input type="text" placeholder='First name' className='border-[1px] h-11 pl-4 border-[#C3C3E4] rounded-[10px]'/>
                    </div>
                    <div>
                        <label>Last name</label> <br />
                        <input type="text" placeholder='Last name' className='border-[1px] h-11 pl-4 border-[#C3C3E4] rounded-[10px]'/>
                    </div>
                </div>
                <div className='mt-6'>
                    <label>Email</label> <br />
                    <input type="email" placeholder='Email' className='border-[1px] h-11 pl-4  border-[#C3C3E4] rounded-[10px] w-full'/>
                </div>
                <div className='mt-6'>
                    <label>Profession</label> <br />
                    <input type="text" placeholder='Profession' className='border-[1px] h-11 pl-4 border-[#C3C3E4] rounded-[10px] w-full'/>
                </div>
                <div className='mt-6'>
                    <label>Bio</label> <br />
                    <textarea placeholder='Bio' className='border-[1px] h-52 pl-4 pt-2 border-[#C3C3E4] rounded-[10px] w-full'/>
                </div>
            </form>
        </div>
        <div className='mt-16 w-[45%]'>
            <h2  className='font-bold text-2xl mb-4'>Online presence</h2>
            <a href="https://dribbble.com/uidesigndaily" className=' border-[1px] border-[#C3C3E4] rounded-[10px] h-12 flex items-center pl-3 gap-2 mb-6'><img src={dribbble} alt="" /> https://dribbble.com/uidesigndaily</a>
            <a href="https://instagram.com/uidesigndaily" className=' border-[1px] border-[#C3C3E4] rounded-[10px] h-12 flex items-center pl-3 gap-2'><img src={instagram} alt="" /> https://instagram.com/uidesigndaily</a>
        </div>
        <div className='mt-8'>
            <button className='text-[#201CCD] font-bold flex items-center gap-1 h-3'><span className='text-2xl'>+</span><span>Add other</span></button>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default PublicProfile