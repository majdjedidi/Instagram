import { getUserPhotosByUserId } from "../../services/services"
import Header from "./Header"
import Photos from "./Photos"
import { useReducer,useEffect } from "react"

export default function UserProfile({user}) {
    const reducer=(state,newState)=>({...state, ...newState})
const initialState={
    profile:{},
    photosCollection:[],
    followerCount:0
}

    const[{profile,photosCollection,followerCount},dispatch]=useReducer(reducer,initialState)

    useEffect(() => {
        async function getProfileInfoAndPhotos() {
          const photos = await getUserPhotosByUserId(user.userId);
          dispatch({ profile: user, photosCollection: photos, followerCount: user.followers });
        }
        getProfileInfoAndPhotos();
      }, [user.username]);
  return (
    <>
    <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
    <Photos photos={photosCollection} />
    </>
  )
}
