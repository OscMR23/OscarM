const App = ()=>{
    useEffect(() =>{
        fetch("http://localhost:3002/",{method : "get"})
        .then((res) =>res.json())
        .then((data) => console.log(data));
    },[]);
    //return <div>App</div>
};
export default App