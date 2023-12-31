import usePhotos from "../hooks/usePhotos"
import Skeleton from "react-loading-skeleton"
import Post from "./Post/Post"
export default function Timeline() {
  const {photos}=usePhotos()
  console.log(photos)
  return (
    <div className=" container col-span-2">
      {!photos ?(
        <>
        {/* {[...new Array(4)].map((_,index)=>
        <Skeleton key={index} count={1} width={320} height={400} />
        )} */}
        <Skeleton count={4} width={640} height={500} className="mb-5" />
        </>
      ):photos?.length >0 ?(
        photos.map((content)=><Post key={content.docId}content={content} />)
      ):(
      <p className=" text-center text-2xl"> Follow people to see photos !</p>)}
    </div>
  )
}
