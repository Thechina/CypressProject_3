/// <reference types= "cypress" />
import BatistaPageObjects from '../support/pages/batista.po';


const batistaPageObjects = new BatistaPageObjects  

let url = 'https://automacaocombatista.herokuapp.com/treinamento/home'

it('Access application', () => {
   cy.visit(url);
})

it('Formulario', () => {
   batistaPageObjects.clickFormulario();
})

it('Usuarios', () => {
   batistaPageObjects.clickUsuarios();
})

it('Name', () => {
   batistaPageObjects.typeName('Marcelo');
})

it('Lastname', () => {
   batistaPageObjects.typeLastname('Medeiros');
})

it('Email', () => {
   batistaPageObjects.typeEmail('suguiomarcelo@gmail.com');
})
  
it('Endereco', () => {
   batistaPageObjects.typeEndereco('rua dos macucos');
})

it('Universidade', () => {
   batistaPageObjects.typeUniversidade('maringa');
})

it('Profissao', () => {
   batistaPageObjects.typeProsissao('teste');
})

it('Genero', () => {
   batistaPageObjects.typeGenero('masculino');  
})

it('Idade', () => {
   batistaPageObjects.typeIdade('45');
})

it('Criar', () => {
   batistaPageObjects.clickCriar();
})
