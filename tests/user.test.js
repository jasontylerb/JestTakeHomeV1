const help = require('../helpers/asyncAwait');
const userStructure = require('./requirements_schema/user');
const user = require('../data/user')

test(`User's profile contains login *requried field`, async () => {
	expect.assertions(1);
	const data = await user.getAuthenticatedUserProfile();
	expect(
		data
	).toEqual(
		expect.objectContaining(
			{login: expect.any(String)}
		)
	)
});

test(`User's profile contains id *requried field`, async () => {
	expect.assertions(1);
	const data = await user.getAuthenticatedUserProfile();
	expect(
		data
	).toEqual(
		expect.objectContaining(
			{id: expect.any(Number)}
		)
	)
});

test(`User id is an integer and not a string`, async () => {
	const data = await user.getAuthenticatedUserProfile();
	expect(
		data.id
	).toBeGreaterThan(0)
});

test(`User's profile contains avatar_url *requried field`, async () => {
	expect.assertions(1);
	const data = await user.getAuthenticatedUserProfile();
	expect(
		data
	).toEqual(
		expect.objectContaining(
			{avatar_url: expect.any(String)}
		)
	)
});

test(`Destination path for user's avatar_url`, async () => {
	expect.assertions(1);
	const data = await user.getAuthenticatedUserProfile();
	expect(
		data.avatar_url
	).toEqual(
		expect.stringContaining(
			`${userStructure.avatar_url.pathPrefix}`
		)
	)
});

test(`File type for user's avatar_url is NOT of invalid, unallowed type`, async () => {
	expect.assertions(1);
	const data = await user.getAuthenticatedUserProfile();
	expect(
		data.avatar_url
	).not.toEqual(
		expect.stringContaining(`.txt`)
	)
});

test(`File type for user's avatar_url is of valid, allowed type`, async () => {
	expect.assertions(1);
	const data = await user.getAuthenticatedUserProfile();
	expect(
		data.avatar_url
	).toMatch(
		new RegExp(userStructure.avatar_url.pathSufix.join('|'))
	)
});

test(`User is set up under under the 'Free' plan`, async () => {
	expect.assertions(1);
	const data = await user.getAuthenticatedUserProfile();
		expect(
			data.plan.name
		).toBe('free');
});

test(`Free plan user's type is 'User'`, async () => {
	expect.assertions(1);
	const data = await user.getAuthenticatedUserProfile();
			expect(
				data.type
		).toBe('User');
});

test(`'Free' plan user is not a vendor contractor, company name is not 'Github'`, async () => {
	expect.assertions(1);
	const data = await user.getAuthenticatedUserProfile();
	expect(
		data.company
	).not.toBe('Github');
});

test(`Non-employee user is not site admin`, async () => {
	expect.assertions(2);
	const data = await user.getAuthenticatedUserProfile();
	function checkForEmployeePlan(){
		expect(
			data.plan.name
		).not.toBe('Employee');
	}
	function checkForSiteAdmin(){
		expect(
			data.site_admin
		).toBeFalsy()
	}

	help.twoAssertions(checkForEmployeePlan, checkForSiteAdmin)
});

test(`Non-employee user may have zero to many private repos`, async () => {
	expect.assertions(2)
	const data = await user.getAuthenticatedUserProfile();
	function checkForEmployeePlan(){
		expect(
			data.plan.name
		).not.toBe('Employee');
	}
	function checkForSiteAdmin(){
		expect(
			data.plan.private_repos
		).toBeGreaterThanOrEqual(0)
	}

	help.twoAssertions(checkForEmployeePlan, checkForSiteAdmin)
});
