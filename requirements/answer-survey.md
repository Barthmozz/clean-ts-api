# Answer Survey

> ## Success Cases

- [ ] Receives a **PUT** request on the **/api/surveys/{survey_id}/results** route 
- [ ] Validates if the request was made by an **user**
- [ ] Validates the **survey_id** param
- [ ] Validates if **answer** is valid
- [ ] **Creates** a survey result with the given data if there is no record
- [ ] **Updates** a survey result with the given data if there is a record
- [ ] Returns **200** with survey data

> ## Exceptions

- [ ] Returns **404** if API does not exist
- [ ] Returns **403** if is not an user
- [ ] Returns **403** if the survey_id in the URL is invalid
- [ ] Returns **403** if the answer is invalid
- [ ] Returns **500** if an error occurs when trying to create the survey result
- [ ] Returns **500** if an error occurs when trying to update the survey result
- [ ] Returns **500** if an error occurs when trying to load the survey result

