/*
import React from 'react';


export default class CreatePlacePanel extends React.Component {

    constructor(){
        super();
        this.state = { atributes : [{   name: '',
                                    description : '',
                                    categories : ['Sala de Aula', 'Cantina', 'Biblioteca', 'Departamento', 'Restaurante Universitário'],
                                    areas : ['Geral', 'ICE', 'Engenharia']
        }]};
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
                                <td><input id="name" type="text" class="form-control"/></td>
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
                                <td><textarea rows="4" cols="40"></textarea></td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </section>
        );
    }
}
*/
//export default CreatePlacePanel;

