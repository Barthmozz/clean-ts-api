# Survey Result

> ## Success Cases

- [ ] Receives a **GET** request on the **/api/surveys/{survey_id}/results** route 
- [ ] Validates if the request was made by an **user**
- [ ] Returns **200** with survey data

> ## Exceptions

- [ ] Returns **404** if API does not exist
- [ ] Returns **403** if is not an user
- [ ] Returns **500** if an error occurs when trying to load survey result
