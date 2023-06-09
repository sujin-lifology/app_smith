export default {
	myFun2: function(myvar) {
		console.log("Inside function");
		
		const name = name_input.text
		const email = email_input.text
		const phone = PhoneInput1.text
		const address = address_input.text
		const image = Image1.image
		
		console.log(name);
		// Validate the input fields
		if (!name || !email || !phone || !address) {
			console.error('Error: Please fill in all the required fields.');
			return;
		}

		try {
			// Make the API call
			const response = fetch('https://api.example.com/endpoint', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(myvar)
			});

			if (response.ok) {
				const data =  response.json();
				console.log('API response:', data);
				return data;
				// Perform further actions with the API response
			} else {
				throw new Error(`API error: ${response.status} ${response.statusText}`);
			}
		} catch (error) {
			console.error('API error:', error.message);
			throw new Error(`API error: ${error.message}`);
		}
	},
	
};
