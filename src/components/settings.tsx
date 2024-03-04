import {useNavigate } from "react-router"
function Settings() {

  const navigate:any =useNavigate()

  const Public = () => {
    navigate('/public-profile');
  };
  const AccountSettings = () => {
    navigate('/account-settings');
  };
  const Notification = () => {
    navigate('/notifications');
  };
  


  return (
    <div className="fixed w-[30%] h-fit flex flex-col items-center mt-40 border-r-2 border-[#EFEFFF]">
        <h2 className="font-bold text-3xl mb-10">Settings</h2>
        <ul className="flex flex-col gap-6">
            <li className="cursor-pointer" onClick={Public}>Public profile</li>
            <li className="cursor-pointer" onClick={AccountSettings}>Account settings</li>
            <li className="cursor-pointer" onClick={Notification}>Notifications</li>
            <li className="cursor-pointer">PRO Account</li>
        </ul>
    </div>
  )
}

export default Settings