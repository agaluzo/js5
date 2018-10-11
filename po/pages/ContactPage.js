'use strict';

const BasePage = require("./BasePage");

class ContactPage extends BasePage{
	constructor (){
        super();


        this.Label = element(by.css(".header-content"));
        this.FirstNameField = element(by.css("#fscf_field1_4"));
        this.fnInput = element(by.css("#fscf_field1_4.fscf-input-text"));
        this.fnLabel = element(by.css(".fscf-div-clear:nth-of-type(2) .fscf-div-label"));
        this.lnInput = element(by.css("#fscf_field1_5.fscf-input-text"));
        this.lnLabel = element(by.css(".fscf-div-clear:nth-of-type(3) .fscf-div-label"));
        this.emailInput = element(by.css("#fscf_email1.fscf-input-text"));
        this.emailLabel = element(by.css(".fscf-div-clear:nth-of-type(4) .fscf-label"));

        this.phoneInput = element(by.css("#fscf_field1_8.fscf-input-text"));
        this.phoneLabel = element(by.css(".fscf-div-clear:nth-of-type(5) .fscf-label"));

        this.jobInput = element(by.css("#fscf_field1_6.fscf-input-text"));
        this.jobLabel = element(by.css(".fscf-div-clear:nth-of-type(6) .fscf-label"));
        this.SubmitButton = element(by.css(".fscf-button-submit"));
        this.ErrorMessage = element(by.css("#fscf_form_error1"));



this.mail =  element(by.css(".et_pb_button_0"))

       // div.fscf-input-text#fscf_field1_4

	};
}

module.exports = ContactPage;