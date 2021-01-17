import React from 'react';
import {useState, useEffect} from 'react';

function EditarEntrega(props) {
    const [entrega, setEntrega]=useState({});
    useEffect(()=>{
        fetch('http://localhost:8080/entrega/' + props.match.params.id)
            .then(res=> res.json())
            .then(
                (result) => {
                    setEntrega(result)
                }
            )
    });
    function MudarEntrega(a) {
        
    }
    return(
        <div>
            <h2>Entrega Details..</h2>
            <p>
                <label>Primeiro Nome: <input type="text" name="id" value={entrega.primeiroNome} onChange={MudarEntrega}></input> </label>
            </p>
            <p>
                <label>Apelido: <input type="text" name="id" value={entrega.apelido} onChange={MudarEntrega}></input> </label>
            </p>
            <p>
                <label>Cidade: <input type="text" name="id" value={entrega.cidade} onChange={MudarEntrega}></input> </label>
            </p>
            <p>
                <label>Codigo Postal: <input type="text" name="id" value={entrega.codigoPostal} onChange={MudarEntrega}></input> </label>
            </p>
            <p>
                <label>Morada: <input type="text" name="id" value={entrega.morada} onChange={MudarEntrega}></input> </label>
            </p>
            <p>
                <label>Telemovel: <input type="text" name="id" value={entrega.telemovel} onChange={MudarEntrega}></input> </label>
            </p>
            <p>
                <label>Produto: <input type="text" name="id" value={entrega.nome} onChange={MudarEntrega}></input> </label>
            </p>
            <p>
                <label>Quantidade: <input type="text" name="id" value={entrega.quantidade} onChange={MudarEntrega}></input> </label>
            </p>
            <button>Atualizar</button>
        </div>
    )
}
export default EditarEntrega