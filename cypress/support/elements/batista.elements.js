class BatistaElements {

    inputFormulario() {
        return cy.get('a[class="collapsible-header "]');
    }

    inputUsuarios() {
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

}

export default BatistaElements