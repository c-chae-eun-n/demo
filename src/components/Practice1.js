import React from 'react';

const Practice1 = ({radioStyle}) => {
    return (
        <>
            <input style={radioStyle} type='radio' name='pr'>라디오1</input>
            <input style={radioStyle} type='radio' name='pr'>라디오2</input>
        </>
    );
};

export default Practice1;