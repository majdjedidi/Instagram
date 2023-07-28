import useUser from "../hooks/useUser"
import User from './Sidebar/User' 
import Suggestions from './Sidebar/Suggestions'
export default function Sidebar() {
  const {user:{docId,fullName, username,userId,following}}= useUser();
  return (
    <div className="p-4">
      <User username ={username} fullName={fullName}/>
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId}/>
    </div>
  )
}
