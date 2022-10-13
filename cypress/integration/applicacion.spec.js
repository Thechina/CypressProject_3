/// <reference types= "cypress" />
import BatistaPageObjects from '../support/pages/batista.po';


const batistaPageObjects = new BatistaPageObjects  

let url = 'https://automacaocombatista.herokuapp.com/treinamento/home'

it('Access application', () => {
   cy.visit(url);
})

it('Preencher  Formulario', () => {
   batistaPageObjects.clickFormulario();
   batistaPageObjects.clickUsuario();
   batistaPageObjects.typeName('Marcelo');
   batistaPageObjects.typeLastname('Medeiros');
   batistaPageObjects.typeEmail('suguiomarcelo@gmail.com');
   batistaPageObjects.typeEndereco('rua dos macucos');
   batistaPageObjects.typeUniversidade('maringa');
   batistaPageObjects.typeProsissao('teste');
   batistaPageObjects.typeGenero('masculino');
   batistaPageObjects.typeIdade('45');
   batistaPageObjects.clickCriar();
})

it('Buscar Elementos Links', () => {
   batistaPageObjects.clickBuscarElementosLinks();
   batistaPageObjects.clickLinks();
})

it('Selecionar Ok200', () => {
   batistaPageObjects.clickOk200();
})

it('Voltar Pagina', () => {
   batistaPageObjects.clickVoltar();
})

it('Selecionar Erro500', () => {
   batistaPageObjects.clickErro500();
})

it('Buscar Elementos Btn', () => {
   batistaPageObjects.clickBuscarElementosBtn();
})

it('Btn Raised', () => {
   batistaPageObjects.clickRaisedBtn();
})