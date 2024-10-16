useEffect(() =>{
    fetch("http://localhost:8001/cliente", { method: "post" })
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);
