import { Fragment } from "react"
export default function Friends(){
    var friends=["karan","anurag","arun","chandan","riya","charanjot"]
    return(
        <>
        {friends.map(
            (el,index)=>{
                // console.log(el, index);
                return(
                    <Fragment key={index}>
                        <h1> {index+1} Hello {el}</h1>
                        <p>this is para</p>
                    </Fragment>
                )
            }
        )}
        </>
    )
} 