import { useState } from "react";
import "./FichaCadastro.css";
import {api} from '../services/api.js';

export function FichaCadastro( ){

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState(""); 

    function cadastrarUsuario(){
        if(nome == '' || cpf == '' || email == '' || celular == ''){
            alert("Preenchimento incompleto")
            return
        }
        const pessoa = {nome: nome, cpf: cpf, email: email, celular: celular}
        api.post('/pessoas', pessoa).then((response) => {
            alert('Pessoa cadastrada com sucesso');
            window.location.reload(true);
            setNome("")
            setCpf("")
            setEmail("")
            setCelular("")
        })
    }

    function alterarValorNome(input){
        setNome(input.target.value);
    }

    function alterarValorCpf(input){
        setCpf(input.target.value);
    }

    function alterarValorEmail(input){
        setEmail(input.target.value);
    }

    function alterarValorCelular(input){
        setCelular(input.target.value);
    }

    return(
        <form>
            <h1>FICHA DE CADASTRO </h1>
            <div className="input-group">
                <label htmlFor="nome"> Nome:</label>
                <input value={nome} type="text" id="nome" onChange={alterarValorNome} />
            </div>
            <div className="input-group">
                <label htmlFor="CPF">CPF:</label>
                <input value={cpf} type="text" id="CPF" onChange={alterarValorCpf}/>
            </div>
            <div className="input-group">
                <label htmlFor="email">E-mail:</label>
                <input value={email} type="text" id="email" onChange={alterarValorEmail}/>
            </div>
            <div className="input-group" >
                <label htmlFor="celular">Celular:</label>
                <input value={celular} type="text" id="celular" onChange={alterarValorCelular}/>
            </div>
            <div className="input-group" >
                <button type="button" onClick={cadastrarUsuario}> + Adicionar pessoa</button>
            </div>
            
                            
        </form>      
    );
}