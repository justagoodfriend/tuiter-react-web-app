import React from "react";
const PostSummaryItem = (
{
    post = {
        topic: "Space",
        userName: "SpaceX",
        time: "2h",
        title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        image: "tesla.png"   
    }
}
) => {
    return (
        <div  className="list-group-item py-2 border bordersecondary">
            <div className="row">
                <div className="col-9">
                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-3" >
                    <img width={100} className= "float-end rounded-3" alt="" src={`/images/${post.image}`} />
                </div>
            </div>
        </div>
    )
}

export default PostSummaryItem;