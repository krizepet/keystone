module.exports = {
	before: function (browser) {
		browser.app = browser.page.app();
		browser.signinPage = browser.page.signin();

		browser.url(browser.app.url + 'users');
		browser.app
			.waitForElementVisible('@signinPage')
			.assert.urlEquals(browser.app.url + 'signin?from=/keystone/users');
	},
	after: function (browser) {
		browser.
			end();
	},
	'AdminUI should allow users to login and redirect to custom url': function (browser) {
		browser.signinPage
			.signin();
		browser.app
			.waitForElementVisible('@listPage')
			.assert.urlEquals(browser.app.url + 'users');
	},
};
