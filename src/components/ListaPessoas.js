import { api } from '../services/api';
import './ListaPessoas.css';

export function ListaPessoas(props){
  

    function deletarPessoa(pessoaId){
        api.patch('/pessoas', {pessoaId:pessoaId}).then((response) => {
            alert("Usuário deletado com sucesso.");
            window.location.reload(true);
        });
    }

    return(
        <div id="tabela-pessoas">
            <h1>PESSOAS CADASTRADAS</h1>
            <table>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>CPF</th>
                        <th>E-MAIL</th>
                        <th>CELULAR</th>
                        <th>DELETAR</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    props.pessoas.length > 0 ?
                        props.pessoas.map((pessoa) => { 
                            return(
                                <tr key={pessoa.id}>
                                    <td>{pessoa.nome}</td>
                                    <td>{pessoa.cpf}</td>
                                    <td>{pessoa.email}</td>
                                    <td>{pessoa.celular}</td>
                                    <td>
                                        <button type="button" onClick={() => {deletarPessoa(pessoa.id)}}> 🗑️ </button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td id="sem-registro" colSpan={5}>Não há pessoas registradas</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}