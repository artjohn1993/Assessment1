import React from 'react';

const FlagCard = (props) => {

    const flag = require('country-code-emoji');
    return (
        <div className="ui items">
            <div class="ui clearing divider"></div>
            <div className="item">
                <div className="image">
                    <img src={"https://www.countryflags.io/"+props.countryCode+"/flat/64.png"} />
                </div>
                <div className="content">
                    <div className="meta" style={{margin: 0,position: 'absolute',top: '50%' }} >
                        <span>{props.content}</span>
                    </div>
                </div>
            </div>
        </div>   
    );

}

export default FlagCard;