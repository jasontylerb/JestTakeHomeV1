async function twoAssertions(callFirstAssertion, callSecondAssertion){
	try{
		await Promise.all([ callFirstAssertion(), callSecondAssertion() ]); // wait until the promise resolves (*)
	} catch(err) {
		console.log('One or more assertions failed')
		// log.write(err);
	}

  // return results;
}
async function threeAssertions(callFirstAssertion, callSecondAssertion, callThirdAssertion){
	try{
		await Promise.all([ callFirstAssertion(), callSecondAssertion() ]); // wait until the promise resolves (*)
	} catch(err) {
		console.log('One or more assertions failed')
		// log.write(err);
	}

  // return results;
}

module.exports = { twoAssertions, threeAssertions }