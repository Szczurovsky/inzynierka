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
         
                {props.loading ? <p>sssaa</p>


                    : <>
                        {console.log(props.postac)}
                        <p>{props.postac.imie}</p>
                        <button onClick={() => props.saveStats("klan")}>sss</button>
                    </>
                }
         
    
        </>
    )

}


