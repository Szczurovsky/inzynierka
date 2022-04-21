import react from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import {LoadingChar} from "./LoadingChar"




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
         
                {props.loading ? <LoadingChar/>


                    : <>
                        {console.log(props.statystyki.imie)}
                        <p>{props.statystyki.imie}</p>
                    <button onClick={() => props.statystykiSave({
                        id: 1, imie: "Michał", profesja: "Wojownik tary", klan: {
                            jarl: props.klany.jarl,
                            nastepca: props.klany.nastepca,
                            nazwa: props.klany.nazwa,
                            opis: props.klany.opis,
                            polozenie: props.klany.polozenie,
                            premie: {
                                sila: props.klany.statystyki[0].sila,
                                sila_woli: props.klany.statystyki[0].sila_woli,
                            },
                            stolica: "Nidergheim"
                        },
                    })}>sss</button>
                    </>
                }
         
    
        </>
    )

}


