import react, {useState} from "react";
import styled from "styled-components";
const rzutKoscia = (ilosc_oczek) => {
    return Math.floor(Math.random() * (ilosc_oczek + 1))
}
const Wygrana = () => {
    return (
        <></>
    )
}

export const Walka = () => {
  
    let [postac, setPostac] = useState({ 
        nick: "dawid",
        zycie: 50,
        siła: 10,
        zrecznosc: 5,
    });
    let [attacks, setAttacks] = useState([
        {
            id:1,
            nazwa: "atak mieczem",
            obrazenia: 10,
            mod_zr: 0.5,
            szybkosc: 5,
        },
        {
            id:2,
            nazwa: "kop",
            obrazenia: 1,
            mod_zr: 1,
            szybkosc: 9
        }
    ]);
    let [przeciwnik, setPrzeciwnik] = useState(
        {
            nazwa: "miecznik",
            zycie: 30,
            siła: 10,
            zrecznosc: 5,
            obrazenia: rzutKoscia(10),
        }   
    )
    let [tura, setTura] = useState(0);
    const writeAttacks = (ataki) => {
        
    }

 
    const turaGry = (atak) => {
        // setPrzeciwnik({
        //     ...przeciwnik,
        // zycie: przeciwnik.zycie - atak
        // })
       
        turaGracza(atak)
        turaPrzeciwnika()
        setTura(tura+1)
           
        
    
        // console.log(przeciwnik)
    }

    const turaGracza = (obrazenia) => {
            setPrzeciwnik({
            ...przeciwnik,
        zycie: przeciwnik.zycie - obrazenia
        })
    }
    const turaPrzeciwnika = () => {
        setPostac({
            ...postac,
            zycie: postac.zycie - przeciwnik.obrazenia
        })
    }
    // const changeTurn = () => {
    //     setTura(!tura)
    // }
    return (
        <div>  
            {attacks.map((atak) => {
                // console.log(atak.nazwa)
                return (
                    <button key={atak.id} onClick={() => { turaGry(atak.obrazenia) }}>{atak.nazwa}</button>            
                )
            })}
            <p>Ilość punktów życia przeciwnika: {przeciwnik.zycie}</p>
            <p>Ilosc punktow zycia gracza : {postac.zycie}</p>
            <p>Tura: {tura}</p>
            {tura > 0 ?
                (
                <>
                    
                    <p>Zadano ci obrazenia w ilości: {przeciwnik.obrazenia}</p>
                 </>
                )
                : ""}
         
        </div>
    )
}