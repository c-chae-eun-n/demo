// rsc 라고 치면 설치한 앱이 알아서 파일명 정의 하고 export해줌
import React, { useState } from 'react';

const Home = ({style}) => {
    // State : Component에 제공하는 상태 값
    // ㄴ 화면 랜더링에 영향을 끼친다
    //    getter↓  setter↓
    const [count, setCount] = useState(1);
    console.log(count);

    const countUp = (e) => {
        console.log(e.target);
        setCount(count + 1);
    }

    return (
        <>
            <button style={style} onClick={countUp}>{count}</button>
        </>
    );
};

export default Home;