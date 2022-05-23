import react,{useEffect,useState} from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { LoadingChar } from "./LoadingChar"
import axios from "axios"





export const Characters = props => {
 
    // const [data, setData] = useState(null);
    // const [stats, setStats] = useState(null);
    // // const [loading, setLoading] = useState(true);
    // // const [error, setError] = useState(null);
    const [user, setUser] = useState({id:false});
    // const staty = {siła: 1}

    // async function fetcha() {
    //     const response = await fetch('https://backinz.herokuapp.com/api/v1/klans');
    //     const movies = await response.json();
    //     setData(movies)
    // }
    // window.sessionStorage.setItem("user", response.data.user.id)
    const updatePostRequest = () => {
        let users = JSON.stringify(user)
        // fetch(`https://inzynierkatest.herokuapp.com/users/${window.sessionStorage.getItem("user")}/characters/${window.sessionStorage.getItem("user")}`, {
        //     method: 'put',
        //     body: JSON.stringify(user),
        //     headers: { 'Content-Type': 'application/json' }
        // })
        axios
            .patch(`https://inzynierkatest.herokuapp.com/users/${window.sessionStorage.getItem("user")}/characters/${window.sessionStorage.getItem("user")}`, user, {
                withCredentials: true,
            })
            .then(response => { console.log("udalo ise?", response) })
    
        
   
    }
    

    useEffect(() => {
        axios.get(`https://inzynierkatest.herokuapp.com/users/${window.sessionStorage.getItem("user")}/characters`)
            .then((response) => { setUser(response.data) })
   
            
    }, []);
    // const [usera] = user;
    return (
     //pytanie czy bede to wyslac w sposob obiektu w tablicy
        <>   
            {console.log(user)}
            {user.id === false ? "Trwa ładowanie twojej postaci" : (
                // Object.keys(user).map((item, i) => (
                //     <p key={i}>{item}:{user[item]}</p>
                //     // <p key={i}>{item}</p>

                // ))
                // user.map((atak) => {
                //     return (
                //            <p>{atak.id}</p>

                //     )
              
                // })
                // <p>{user[0].id}</p>
                
                <>
                    {/* <p>Nick: {user.nick}</p> */}
                    {/* <p>Siła: {user.statystyki[0].sila}</p> */}
                    {/* <p>Statystyki: {console.log(usera.statystyki[0])}</p> */}
                    {/* <p>Staty: <br/> Siła:{usera.statystyki.sila} Zręczność:{usera.statystyki.zrecznosc}</p> */}
                </>
            )}
            <button onClick={() => setUser({
                ...user,
               nick:"adrian",
                staty:"miko",
                statystyki:[{siła:1}]
                
  
                
            })}>abcdsesfa</button>
            <button onClick={()=>updatePostRequest()}>Przetestujmy</button>
            {/* <button onClick={updateUser}></button> */}
        {/* {Object.keys(user).map((item, i) => (
            <p key={i}>a</p>
        ))
        } */}
            {/* {console.log(props.postac)}
                {props.loading ? <LoadingChar/>


                    : <>
                       
                      
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
                    })}>abcdsesfa</button>

                    
                    </>
                } */}
         
    
        </>
    )

}


