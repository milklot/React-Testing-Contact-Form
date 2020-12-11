import React from "react";
import {fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "./components/ContactForm";
import userEvent from '@testing-library/user-event';


test('renders ContactForm without issues', () => {
	render(<ContactForm/>);
});

test("fill out and submit the form by user", async () => {
	render(<ContactForm/>);


	//assign our fields and submit button to the variables
	const fName = screen.getByPlaceholderText(/Edd/i);
	const lName = screen.getByPlaceholderText(/Burke/i);
	const email = screen.getByPlaceholderText(/test@test.com/i);
	const submitBtn = screen.getByRole('button');

	//add some input in our fields
	fireEvent.change(fName, {target: {value: "Eli"}});
	fireEvent.change(lName, {target: {value: "Ted"}});
	fireEvent.change(email, {target: {value: "testreact@test.com"}});

	// test input values of fields
	expect(fName.value).toBe("Eli");
	expect(lName.value).toBe("Ted");
	expect(email.value).toBe("testreact@test.com");

	//click submit button
	userEvent.click(submitBtn);

	expect(fName).toBeInTheDocument();
	expect(lName).toBeInTheDocument();
	expect(email).toBeInTheDocument();
});
