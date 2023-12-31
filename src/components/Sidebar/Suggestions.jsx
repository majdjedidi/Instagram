import { useState,useEffect } from "react"
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";
import {getSuggestedProfiles} from '../../services/services'
import SuggestedProfile from "./SuggestedProfile";
export default function Suggestions({userId,following,loggedInUserDocId}) {
  const [profiles,setProfiles]=useState(null)
  useEffect(()=>{
    async function suggestedProfiles(){
      const response = await getSuggestedProfiles(userId,following)
      setProfiles(response);
    }
    if(userId)
    {suggestedProfiles()}
  },[userId])
  
  return (!profiles ? (
    <Skeleton count={5} height={50} className="mt-5" />
  ) :(
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
      {profiles.map(profile=>(
        <SuggestedProfile
        key={profile.docId}
        profileDocId={profile.docId}
        username={profile.username}
        profileId={profile.userId}
        userId={userId}
        loggedInUserDocId={loggedInUserDocId}
         />
         
      ))}
      </div>
    </div>
  )
  )
}
