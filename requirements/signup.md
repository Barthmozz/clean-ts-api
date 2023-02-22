# SignUp

> ## Success Cases

- [x] Receive a **POST** request on the **/api/signup** route 
- [x] Validates required data **name**, **email**, **password** and **passwordConfirmation**
- [x] Validates that **password** and **passwordConfirmation** are equals
- [x] Validates that **email** is valid
- [ ] Validates if there is already an user with the provided email
- [x] Generates an **encrypted** password (this password cannot be decrypted)
- [x] **Creates** an account for the user with the provided data, **replacing** the password with the encrypted password
- [x] Generates an access **token** from the user ID
- [x] **Updates** user data with the generated access token
- [x] Returns **200** with the access token and username

> ## Exceptions

- [x] Returns **404** if API does not exist
- [x] Returns **400** if name, email, password or passwordConfirmation are not provided by the client
- [x] Returns **400** if password and passwordConfirmation are not equal
- [x] Returns **400** if email is invalid
- [ ] Returns **403** if email is already in use
- [x] Returns **500** if an error occurs when trying to generate an encrypted password
- [x] Returns **500** if an error occurs when trying to create the user account
- [ ] Returns **500** if an error occurs when trying to generate the access token
- [ ] Returns **500** if an error occurs when trying to update the user with the generated access token
