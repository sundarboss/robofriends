import React from 'react';

const Card = (props) => {
    const { id, name, email } = props;
    return (
        <div className='bg-light-green dib br2 pa2 ma2 grow bw2 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;