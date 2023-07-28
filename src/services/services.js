
import { firebase,FieldValue} from '../lib/firebase';
import {arrayUnion, arrayRemove } from "firebase/firestore";
export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username.toLowerCase())
    .get();

  return result.docs.length > 0;
}
export async function getUserByUserId(userId){
  const result = await firebase.firestore().collection('users').where('userId','==',userId).get()
  const user = result.docs.map((item)=>({
    ...item.data(),
    docId:item.id
  }))
  return user;
}

export async function getSuggestedProfiles(userId,following){
  const result =await firebase.firestore().collection('users').limit(10).get();
  
  return result.docs
        .map((user)=>({...user.data(),docId:user.id}))
        .filter((profile)=>profile.userId !==userId && !following.includes(profile.userId))
  
}
export async function updateLoggedInUserFollowing(loggedInUserDocId,profileId,isFollowingProfile){
  console.log(profileId)
  return firebase.firestore().collection('users').doc(loggedInUserDocId).update({
    following : isFollowingProfile ? arrayRemove(profileId) : arrayUnion(profileId)
  })
}
export async function updateFollowedUserFollowers(profileDocId,loggedInUserDocId,isFollowingProfile){
  return firebase.firestore().collection('users').doc(profileDocId).update({
    followers : isFollowingProfile ? arrayRemove(loggedInUserDocId) : arrayUnion(loggedInUserDocId)
  })
}
export async function getPhotos(userId, following) {
 
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', following)
    .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id
  }));
console.log(userFollowedPhotos)
  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
    
      const user = await getUserByUserId(photo.userId);
    
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );

  return photosWithUserDetails;
}