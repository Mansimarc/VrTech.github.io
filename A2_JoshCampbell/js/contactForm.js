document.getElementById('contactForm').addEventListener('submit', function(event) {
	event.preventDefault();

	/*
	// Here you would typically handle the form data, e.g., send it to a server
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;
	*/

	/*
	// For demonstration purposes, we'll just log the data to the console
	console.log('Contact Form Submitted:');
	console.log('Name:', name);
	console.log('Email:', email);
	console.log('Message:', message);
	*/

	// Resets the form after it is submitted
	this.reset();

	// Shows a success message
	alert('Thank you for your message! We will get back to you shortly.');
});
