import { useState } from "react";
import Navbar from "../components/navbar";
import Settings from "../components/settings";

function AccountSetting() {

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [currentPassword, setCurrentPassword] = useState<string>('');
    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };
    
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Settings/>
    <div className="w-[80%] ml-[40%] pt-44">
        <h2 className='font-bold text-2xl mb-8'>Account settings</h2>
        <h3 className="font-bold text-xl mb-8">Email Settings</h3>
        <div className="w-[50%] flex justify-between border-b-2 border-[#EFEFFF] pb-10">
        <p>Your email address is <a href="mailto:emailis@private.com" className="font-bold">emailis@private.com</a></p>
        <a href="#" className="underline text-[#201CCD]">Change</a>
        </div>
        <div className="w-[50%] flex justify-between">
        <h3 className="font-bold text-xl mb-8 mt-10">Password</h3>
        <button className="underline text-[#201CCD]"
        onClick={handleTogglePassword}>
            {passwordVisible ? "Hide" : "Show"}
            </button>
        </div>
        <div className="w-[50%] flex justify-between">
            <div>
                <label>New password</label> <br />
                <input 
                type={passwordVisible ? 'text' : 'password'} value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border-[1px] h-11 pl-4 border-[#C3C3E4] rounded-[10px]'/>
            </div>
            <div>
                <label>Current password</label> <br />
                <input 
                type={passwordVisible ? 'text' : 'password'} value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className='border-[1px] h-11 pl-4 border-[#C3C3E4] rounded-[10px]'/>
            </div>
        </div>
        <p className="mt-8">Can’t remember your current password? <a href="#" className="underline text-[#201CCD]">Reset your password</a></p>
        <button className="bg-[#202142] text-white rounded-[10px] w-[20%] h-12 mt-8">Save password</button>
        <div className="w-[50%] h-0.5 bg-[#EFEFFF] mt-10"></div>
        <h3 className="font-bold text-xl my-8">Delete account</h3>
        <p className="w-[50%]">Would you like to delete your account? This account contains 1388 posts. Deleting your account will remove all the content associated with it.</p>
        <a href="#" className="block text-red-600 underline my-8">I want to delete my account</a>
    </div>
    </div>
    </div>
  )
}

export default AccountSetting
