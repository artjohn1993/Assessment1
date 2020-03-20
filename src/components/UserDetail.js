import React from 'react';

const UserDetails = (props) => {

    return (
        <div className="ui comments">
            <div className="comment">
                <a className="avatar">
                    <img src={props.avatar} />
                </a>
                <div className="content">
                    <a className="author">{props.email}</a>
                    <div className="text">
                        {props.jobTitle}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;