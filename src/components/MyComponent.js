import Home from "./Home"; // MyComponent 에 홈 종속 발생하는 것
// import Practice1 from "./Practice1";

// props ({key-value})
// ㄴ 자식 요소가 부모에게 전달하는 정보(값)

function MyComponent({message}) {   // {}안에 key 이름
    return (
        <>
            <h1>Hello world</h1>
            {/* <p>This is my first React App.</p> */}
            <p>{message}</p>
            <Home style={{
                "color": "black",
                "backgroundColor": "pink",
                "height": "60px",
                "width": "200px",
                "border": "none",
                "borderRadius": "10px",
                "cursor": "pointer"
            }}/> 
            {/* <Practice1 style={{
                "color": "pink"
            }}/> */}
        </>
    );
}

// const MyComponent = () => (     // 익명함수

// )

export default MyComponent;