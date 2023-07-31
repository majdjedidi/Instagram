import { useState,useContext } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import { arrayUnion } from "firebase/firestore";

export default function AddComment({docId,comments,setComments,commentInput}) {
    const [comment,setComment]=useState('')
    const {firebase} =useContext(FirebaseContext)
    const {
        user:{displayName}
    }=useContext(UserContext)

    const handleSubmitComment=(event)=>{
        event.preventDefault();
        setComments([{displayName,comment}, ...comments])
        setComment('')
        return firebase 
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                comments: arrayUnion({displayName,comment})
            })

    }
  return (
    <div className=" border-t border-gray-primary ">
        <form className=" flex justify-between pl-0 pr-5" method="POST" onSubmit={(event)=>comment.length >=1 ? handleSubmitComment(event):event.preventDefault()}>
            <input type="text" aria-label="Add a comment" autoComplete="off" className=" text-sm text-gray-base w-full mr-3 py-5 px-4" name="add-comment" placeholder="Add a comment..." value={comment} onChange={({target})=>setComment(target.value)}
            ref={commentInput}/>
            <button className={`text-sm font-bold text-blue-medium ${!comment && 'opacity-25'}`} type="button" disabled={comment.length<1} onClick={handleSubmitComment}>Post</button>
        </form>
    </div>
  )
}
