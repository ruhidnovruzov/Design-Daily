import Check from "../UI/switch"
import Navbar from "../components/navbar";
import Settings from "../components/settings";

function Notifications() {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Settings/>
  <div className="w-[80%] ml-[40%] pt-44">
        <h2 className='font-bold text-2xl mb-8'>Notifications</h2>
        <h3 className="font-bold text-xl mb-8">Email notifications</h3>
        <div className="flex justify-between w-[50%]">
            <h3 className="font-bold mb-4">Weekly newsletter</h3>
            <Check />
        </div>
        <p>A small text about what the newsletters <br /> might contain.</p>
        <div className="flex justify-between w-[50%] mt-8">
            <h3 className="font-bold mb-4">Account summary</h3>
            <Check />
        </div>
        <p>A small text about what the newsletters <br /> might contain.</p>
        <h3 className="font-bold text-xl my-8">Website notifications</h3>
        <div>
            <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" defaultChecked={true} className="h-6 w-6 bg-[#1677FF] rounded-[5px]" />
            <label>New follower</label>                
            </div>
            <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" className="h-6 w-6 bg-[#1677FF] rounded-[5px]" />
            <label>Post like</label>                
            </div>
            <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" defaultChecked={true} className="h-6 w-6 bg-[#1677FF] rounded-[5px]" />
            <label>Someone you followed posted</label>                
            </div>
            <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" className="h-6 w-6 bg-[#1677FF] rounded-[5px]" />
            <label>Post added to collection</label>                
            </div>
            <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" className="h-6 w-6 bg-[#1677FF] rounded-[5px]" />
            <label>Post downloaded</label>                
            </div>

        </div>
        </div>
    </div> 
  </div>
  )
}

export default Notifications