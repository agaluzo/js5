'use strict';

const HomePage = require('./pages/HomePage');
const ContactPage = require('./pages/ContactPage');
// const baseUrl = browser.baseUrl;

class World {
	constructor (){
		this.HomePage = new HomePage();
		this.ContactPage = new ContactPage();

		this.HomeUrl = `^${browser.baseUrl}$`;
	}
}

module.exports = new World();