import useUser from "../hooks/useUser"
import User from './Sidebar/User' 
import Suggestions from './Sidebar/Suggestions'
export default function Sidebar() {
  const {user:{fullName, username,userId}}= useUser();
  return (
    <div className="p-4">
      <User username ={username} fullName={fullName}/>
      <Suggestions userId={userId} />
    </div>
  )
}
