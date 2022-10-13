import BatistaElements from '../elements/batista.elements'

const batistaElements = new BatistaElements

class BatistaPageObjects {

  clickFormulario() {
    batistaElements.inputFormulario().click();
  }

  clickUsuario() {
    batistaElements.inputUsuario().click();
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

  clickBuscarElementosLinks() {
    batistaElements.inputBuscarElementosLinks().click();
  }

  clickLinks() {
    batistaElements.inputLinks().click();
  }

  clickOk200() {
    batistaElements.inputOk200().click();
  }

  clickVoltar() {
    batistaElements.inputVoltar().click();
  }

  clickErro500() {
    batistaElements.inputErro500().click();
  }

  clickBuscarElementosBtn() {
    batistaElements.inputBuscarElementosBtn().click();
  }

  clickRaisedBtn() {
    batistaElements.inputRaisedBtn().click();
  }

}
  
export default BatistaPageObjects 