const { Octokit, App } = require("octokit");
require('dotenv').config()

		// TODO: Use .env file to abstract the github token
		// auth: 'Process.Env.GITHUB_TOKEN'
		const token = process.env.GITHUB_TOKEN
		// const token = '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'

function getAuthenticatedUserProfile(){
	const octokit = new Octokit({
		auth: token
	})
	return octokit.request('GET /user', {}).then(userReq => userReq.data)
}
function getSpecificUserProfile(username){
	const octokit = new Octokit({
		auth: token
	})
	return octokit.request('GET /users/{username}', {
	 	 username: username
	}).then(userReq => userReq.data)
}

module.exports = { getAuthenticatedUserProfile, getSpecificUserProfile };