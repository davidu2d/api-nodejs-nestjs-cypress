
/// <reference types="cypress" />

const url = Cypress.config('baseUrl')


export class GeraDoc {

    getNome() {
        let nome = null
        cy.request({
            url: 'https://www.4devs.com.br/ferramentas_online.php',
            method: 'POST',
            form: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: {
                'acao': 'gerar_pessoa',
                'sexo': 'I',
                'pontuacao': 'N',
                'idade': 0,
                'cep_estado': '',
                'txt_qtde': 1,
                'cep_cidade': ''
            }
        }).then((response) => {
            nome = response.body.nome
            cy.log("Name: " + nome)
        })

        return nome
    }

    randomiza(n) {
        var ranNum = Math.round(Math.random() * n);
        return ranNum;
    }

    mod(dividendo, divisor) {
        return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
    }

    gerarCpf() {
        var comPontos = true; // TRUE para ativar e FALSE para desativar a pontuação.
        var cpf;
        var randomiza = Math.round(Math.random() * 9);
        var randomiza1 = Math.round(Math.random() * 9);
        var randomiza2 = Math.round(Math.random() * 9);
        var randomiza3 = Math.round(Math.random() * 9);
        var randomiza4 = Math.round(Math.random() * 9);
        var randomiza5 = Math.round(Math.random() * 9);
        var randomiza6 = Math.round(Math.random() * 9);
        var randomiza7 = Math.round(Math.random() * 9);
        var randomiza8 = Math.round(Math.random() * 9);
        //var n = 9;
        var n1 = randomiza;
        var n2 = randomiza1;
        var n3 = randomiza2;
        var n4 = randomiza3;
        var n5 = randomiza4;
        var n6 = randomiza5;
        var n7 = randomiza6;
        var n8 = randomiza7;
        var n9 = randomiza8;
        var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
        d1 = 11 - (Math.round(d1 - (Math.floor(d1 / 11) * 11)));
        if (d1 >= 10) d1 = 0;
        var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
        d2 = 11 - (Math.round(d2 - (Math.floor(d2 / 11) * 11)));
        if (d2 >= 10) d2 = 0;
        var retorno = '';
        if (comPontos) cpf = '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2;
        else cpf = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;

        return cpf
    }

    geraCnpj() {
        var comPontos = true; // TRUE para ativar e FALSE para desativar a pontuação.
        var n = 9;
        var cnpj;
        var randomiza1 = Math.round(Math.random() * 9);
        var randomiza2 = Math.round(Math.random() * 9);
        var randomiza3 = Math.round(Math.random() * 9);
        var randomiza4 = Math.round(Math.random() * 9);
        var randomiza5 = Math.round(Math.random() * 9);
        var randomiza6 = Math.round(Math.random() * 9);
        var randomiza7 = Math.round(Math.random() * 9);
        var randomiza8 = Math.round(Math.random() * 9);
        var n1 = randomiza1;
        var n2 = randomiza2;
        var n3 = randomiza3;
        var n4 = randomiza4
        var n5 = randomiza5;
        var n6 = randomiza6;
        var n7 = randomiza7;
        var n8 = randomiza8;
        var n9 = 0;//gera_random(n);
        var n10 = 0;//gera_random(n);
        var n11 = 0;//gera_random(n);
        var n12 = 1;//gera_random(n);
        var d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
        d1 = 11 - (Math.round(d1 - (Math.floor(d1 / 11) * 11)));
        if (d1 >= 10) d1 = 0;
        var d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
        d2 = 11 - (Math.round(d2 - (Math.floor(d2 / 11) * 11)));
        if (d2 >= 10) d2 = 0;

        if (comPontos)
            cnpj = '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + d1 + d2;
        else cnpj = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + d1 + d2;

        return cnpj;
    }

    getSenha() {
        var stringAleatoria = '';
        var caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()_-=+.?/';
        for (var i = 0; i < 10; i++) {
            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        cy.log('Password: ' +stringAleatoria)
        return stringAleatoria;
    }

    getEmail() {
        let email = null
        cy.request({
            url: 'https://www.4devs.com.br/ferramentas_online.php',
            method: 'POST',
            form: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: {
                'acao': 'gerar_pessoa',
                'sexo': 'I',
                'pontuacao': 'N',
                'idade': 0,
                'cep_estado': '',
                'txt_qtde': 1,
                'cep_cidade': ''
            }
        }).then((response) => {
            email = response.body.email
            cy.log("Username: " + email)
        })

        return email
    }

}