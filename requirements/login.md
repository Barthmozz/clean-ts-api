# Login

> ## Success Cases

- [x] Receives a **POST** request on the **/api/login** route 
- [x] Validates required data **email** and **password**
- [x] Validates that **email** is valid
- [x] **Get** the user with the provided email and password
- [x] Generates an access **token** from the user ID
- [x] **Updates** user data with the generated access token
- [x] Returns **200** with the access token and username

> ## Exceptions

- [x] Returns **404** if API does not exist
- [x] Returns **400** if email or password are not provided by the client
- [x] Returns **400** if email is invalid
- [x] Returns **401** if does not find an user with the given data
- [x] Returns **500** if an error occurs when trying to generate the access token
- [x] Returns **500** if an error occurs when trying to update the user with the generated access token
