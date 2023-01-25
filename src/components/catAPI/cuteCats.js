import * as React from "react";

const url = 'https://api.thecatapi.com/v1/images/search?api_key=live_UweMfrzSM2e7FIOrnuuAoqITdzSAtinRhuDshfxiNspFbMeMK6or8xAwqaSeUnIL'



const Cat = () => {
    const [cat, setCat] = React.useState(null);
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
         
        const  fetchData = async () => {await fetch(url)
        .then(response => {
            if (response.ok){
                return response.json();
            }
            throw response
        }).then(data =>{
            setCat(data[0])
        }).catch(error=> {

        });}
        fetchData();
    }, [count])
    return (
        <div className="container text-black flex flex-col content-center flex-wrap">
            <img src={cat? cat.url : ''} width={1000} height={500}></img>
            <button className="btn btn-orange" onClick={() => {setCount(count + 1)}}>Get new one</button>
        </div>
    )
}

export default Cat