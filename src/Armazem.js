import React from 'react';
import {useState, useEffect} from 'react';

function Armazem(){
    const [armazem,setArmazem]=useState([]);
    useEffect(()=> {
        fetch('http://localhost:8080/armazem/')
            .then(res=> res.json())
            .then(
                (result) => {
                    setArmazem(result)
                }
            )
    })
    return(
        <div>
            <h2>Produtos no armazem</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>quantidade</th>
                        <th>tipo</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {armazem.map(arm=>(
                        <tr key={arm.id}>
                            <td>{arm.nome}</td>
                            <td>{arm.quantidade}</td>
                            <td>{arm.tipo}</td>
                            <td>{arm.descricao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Armazem
