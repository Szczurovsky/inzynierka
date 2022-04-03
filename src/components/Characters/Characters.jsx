import react from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";





export const Characters = props => {
 
    // const [data, setData] = useState(null);
    // const [stats, setStats] = useState(null);
    // // const [loading, setLoading] = useState(true);
    // // const [error, setError] = useState(null);

    // const staty = {siła: 1}

    // async function fetcha() {
    //     const response = await fetch('https://backinz.herokuapp.com/api/v1/klans');
    //     const movies = await response.json();
    //     setData(movies)
    // }

    // useEffect(() => {
    //     // fetch("https://backinz.herokuapp.com/api/v1/klans")
    //     //     .then((response) => response.json())
    //     //     .then(response_items => {
    //     //         setData(response_items);
    //     //     })
    //         fetcha()
    // }, []);
    
    return (
    
        <>   
            <p>sssss</p>
            {/* {console.log(props)} */}
            {console.log(props.aktstat)}
            {console.log(props)}

            <p>testuje branche</p>
            <button onClick={()=>props.saveStats({siła:3, sila_woli:5})}>sss</button> 
         
    
        </>
    )

}


