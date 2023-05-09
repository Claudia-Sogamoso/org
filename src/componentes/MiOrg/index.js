import { useState } from "react"
import "./MiOrg.css"
 const MiOrg = (props) => {
//Estado - hooks
//useState
//Para declarar se utiliza el useState como funcion - useStare()
//const [nombreVariable,funcion que actualiza]= useState(valorInicial)

//const [mostrar, actualizarMostrar] = useState(true)
 //   const manejarClick = () =>{
 //   console.log("Mostrar/Ocultar elemento", !mostrar)
   //actualizarMostrar(!mostrar)

// }
    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src='/img/add.png' alt="add" onClick={props.cambiarMostrar}/>

    </section>
 }

 export default MiOrg