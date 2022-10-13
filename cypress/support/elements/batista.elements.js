class BatistaElements {

    inputFormulario() {
        return cy.get('a[class="collapsible-header "]');
    }

    inputUsuario() {
        return cy.get('a[href="/users/new"]');
    }

    inputName() {
        return cy.get('input[id="user_name"]');
    }

    inputLastname() {
        return cy.get('input[name="user[lastname]"');
    }

    inputEmail() {
         return cy.get('input[id="user_email"]');
    }

    inputEndereco() {
         return cy.get('input[id="user_address"]');
    }

    inputUniversidade() {
         return cy.get('input[id="user_university"]');
    }

    inputProfissao() {
         return cy.get('input[id="user_profile"]');
    }

    inputGenero() {
        return cy.get('input[id="user_gender"]');
    }

    inputIdade() {
        return cy.get('input[id="user_age"]');
    }

    inputCriar() {
        return cy.get('input[value="Criar"]');
    }

    inputBuscarElementosLinks() {
        return cy.get('a').contains('Busca de elementos');
    }

    inputLinks() {
        return cy.get('a[href="/buscaelementos/links"]');
    }

    inputOk200() {
        return cy.get('a').contains('Ok 200 - Sucess');
    }

    inputVoltar() {
        return cy.get('a[class="btn waves-light red"]');
    }

    inputErro500() {
        return cy.get('a').contains('Erro 500 - Internal Server Error');
    }

    inputBuscarElementosBtn() {
        return cy.get('a').contains('Botões');
    }

    inputRaisedBtn() {
        return cy.get('a[class="waves-light btn"]');
    }

}

export default BatistaElements