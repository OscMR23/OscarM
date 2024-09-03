const App = ()=>{
    useEffect(() =>{
        fetch("http://localhost:5000/",{method : "post"})
        .then((res) =>res.json())
        .then((data) => console.log(data));
    },[]);
    return <div>App</div>
};
export default App