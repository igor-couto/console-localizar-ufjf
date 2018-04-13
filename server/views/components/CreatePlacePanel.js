import React from 'react';

exports default class CreatePlacePanel extends React.Component {

    constructor(){
        super();
        this.state = { atributes : [{   name: '',
                description : '',
                categories : ['Sala de Aula', 'Cantina', 'Biblioteca', 'Departamento', 'Restaurante Universitário'],
                areas : ['Geral', 'ICE', 'Engenharia']
            }]};
        // Fazer os bind para o this da funcao ser o this da classe
        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
    }

    // componentMount()
    // componentDidMount()
    componentWillMount(){
        // Pega os dados desejados
        //this.setState(novosDados); quando chama o setState ele chama o render
        // .bind(this) no fim da funcao
    }

    addMarker(event){
        event.preventDefault();
    }

    doneAdd(event){
        event.preventDefault();
        $.ajax({
            url: 'http://',
            contentType:'json',
            type:'post',
            data:'{}',
            success: function(response){
            },
            error: function(response){
            }
        });
    }

    setName(event){
        this.setState({name:event.target.value});
        console.log(this.state);
    }

    setDescription(event){
        this.setState({description:event.target.value});
        console.log(this.state);
    }

    render(){
        let name = "";
        let description="";
        let categories = [
            "Sala de Aula",
            "Cantina",
            "Biblioteca",
            "Departamento",
            "Restaurante Universitário"
        ];
        let areas = [
            "Geral",
            "ICE",
            "Engenharia"
        ];
        return(
            <section id="add-place">
                <div id="add-place-form">
                    <form method="post">
                        <table className="table">
                            <tbody>
                            <tr>
                                <td><label for="name">Nome: </label></td>
                                <td><input id="name" type="text" class="form-control" value={this.state.name} onChange={this.setName}/></td>
                            </tr>
                            <tr>
                                <td><label for="area">Area: </label></td>
                                <td>
                                    <select name="area" class="form-control">
                                        {areas.map( area => <option value={area}>{area}</option>)}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="categoria">Categoria: </label></td>
                                <td>
                                    <select name="categoria" class="form-control">
                                        {categories.map( category => <option value={category}>{category}</option>)}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label for="description">Descrição: </label></td>
                                <td><textarea rows="4" cols="40" value={this.state.description} onChange={this.setDescription}></textarea></td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </section>
        );
    }
}