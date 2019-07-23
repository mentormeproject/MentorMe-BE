# MentorMe Back-End

This is the backend API schema for the MentorMe Team Product.

## Registration

### POST /api/register

Endpoint: `https://mentor-me-application.herokuapp.com/api/register`
Accepts an object of schema

```javascript
{
	"username": "string",
	"password": "string",
	"phone_number": "string",
	"age": "string",
	"location": "string",
	"business_type": "string"
}
```

---

## Login

### POST /api/login

Endpoint: `https://mentor-me-application.herokuapp.com/api/login`
Accepts an object of schema

```javascript
{
	"username": "string",
	"password": "string"
}
```

---

## Questions

### GET /api/questions - restricted - must be logged in to use.

Endpoint: `https://mentor-me-application.herokuapp.com/api/questions`
This gathers a list of all the questions

---

### POST /api/questions - restricted - must be logged in to use.

Endpoint: `https://mentor-me-application.herokuapp.com/api/questions`
This adds a question to the list

Accepts an object of schema

```javascript
{
	"title": "string",
  "question": "string",
  "business_type": "string",
  "user_id": "string" // this is converted to an integer in the backend
}
```

---

### PUT /api/questions/{id} - restricted - must be logged in to use.

Endpoint: `https://mentor-me-application.herokuapp.com/api/questions/:id`
This updates an existing question

to update, simply pass in any key/value pair listed in the original POST question to overwrite it.

---

### DELETE /api/questions{id} - restricted - must be logged in to use.

Endpoint: `https://mentor-me-application.herokuapp.com/api/questions/:id`
This deletes an existing question by identifying it by the questions id number.
