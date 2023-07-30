import { useState } from "react"
import { formatDistance } from "date-fns"
import { Link } from "react-router-dom"
export default function Comments({docId,comments:allComments,posted,commentInput}) {
    const [comments,setComments]=useState(allComments)
  return (
    <>
    <div className=" p-4 pt-1 pb-4">
        {comments.length}
    </div>
    </>
  )
}
