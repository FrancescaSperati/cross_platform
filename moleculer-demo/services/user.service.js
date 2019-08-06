"use strict";

module.exports = {
	name: "user",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],	

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		login: {
			params: {
				email: "string",
				password: "string",
			},
			handler(ctx) {
				let succ = this.login2(ctx.params.email,ctx.params.password);
				if(succ)
					return `Welcome!!`;
				else
					return `Sto cazzo!!`;

			}
		},
		registration() {
			return "Hello ,registration";
		},

		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			params: {
				email: "string",
				password: "string",
				welcome: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.login}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

		login2(email,password) {
			let isValid = false;
			if((email==="email")&&(password==="pass")){
				isValid=true;
			}
			return isValid;
		}
		
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};