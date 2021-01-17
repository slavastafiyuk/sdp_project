import React from 'react';
import {useState, useEffect} from 'react';

function Entregas(){
    const [entregas,setEntregas]=useState([]);
    useEffect(()=> {
        fetch('http://localhost:8080/entrega/')
            .then(res=> res.json())
            .then(
                (result) => {
                    setEntregas(result)
                }
            )
    })
    return(
        <div>
            <h2>Entregas Planeadas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Primeiro Nome</th>
                        <th>Apelido</th>
                        <th>Cidade</th>
                        <th>Codigo Postal</th>
                        <th>Morada</th>
                        <th>Telemovel</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {entregas.map(ent=>(
                        <tr key={ent.id}>
                            <td>{ent.primeiroNome}</td>
                            <td>{ent.apelido}</td>
                            <td>{ent.cidade}</td>
                            <td>{ent.codigoPostal}</td>
                            <td>{ent.morada}</td>
                            <td>{ent.telemovel}</td>
                            <td>{ent.nome}</td>
                            <td>{ent.quantidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Entregas