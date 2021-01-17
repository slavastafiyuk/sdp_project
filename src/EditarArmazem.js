import React from 'react';
import {useState, useEffect} from 'react';

function EditarArmazem(props) {
    const [armazem, setArmazem]=useState({});
    useEffect(()=>{
        fetch('http://localhost:8080/armazem/' + props.match.params.id)
            .then(res=> res.json())
            .then(
                (result) => {
                    setArmazem(result)
                }
            )
    });
    function MudarArmazem(a) {
        
    }
    return(
        <div>
            <h2>Armazem Details..</h2>
            <p>
                <label>Armazem Nome: <input type="text" name="id" value={armazem.nome} onChange={MudarArmazem}></input> </label>
            </p>
            <p>
                <label>Armazem Quantidade: <input type="text" name="id" value={armazem.quantidade} onChange={MudarArmazem}></input> </label>
            </p>
            <p>
                <label>Armazem Tipo: <input type="text" name="id" value={armazem.tipo} onChange={MudarArmazem}></input> </label>
            </p>
            <p>
                <label>Armazem Descrição: <input type="text" name="id" value={armazem.descricao} onChange={MudarArmazem}></input> </label>
            </p>
            <button>Atualizar</button>
        </div>
    )
}
export default EditarArmazem