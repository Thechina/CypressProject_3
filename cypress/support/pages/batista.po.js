import BatistaElements from '../elements/batista.elements'

const batistaElements = new BatistaElements

class BatistaPageObjects {

  clickFormulario() {
    batistaElements.inputFormulario().click();
  }

  clickUsuarios() {
    batistaElements.inputUsuarios().click();
  }

  typeName(Marcelo) {
    batistaElements.inputName().type(Marcelo);
  }

  typeLastname(Medeiros) {
    batistaElements.inputLastname().type(Medeiros);
  }
 
   typeEmail() {
    batistaElements.inputEmail().type('suguiomarcelo@gmail.com');
  }

   typeEndereco() {
    batistaElements.inputEndereco().type('rua dos macucos ');
  }

   typeUniversidade() {
    batistaElements.inputUniversidade().type('maringa');
  }

  typeProsissao() {
   batistaElements.inputProfissao().type('teste');
  }

  typeGenero() {
    batistaElements.inputGenero().type('masculino');
  }

  typeIdade() {
    batistaElements.inputIdade().type('45');
  }

  clickCriar() {
    batistaElements.inputCriar().click();
  }

}
  
export default BatistaPageObjects 