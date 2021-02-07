import React from "react";
const Publication = (prop) => {
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="avatar">{prop.avatar}</div>
                <div className="info-wrapper">
                <div className="main-wrapper">
                <div className="name">{prop.name}</div>
                <div className="nickname">{prop.nickname}</div>
                <div className="date">{prop.date}</div>
                </div>
                <div className="descr">{prop.content}</div>
                </div>
            </div>
            <div className="img">{prop.image}</div>
            </div>

    )

}

export default Publication;