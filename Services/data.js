const tasks = [
  {
      "id": "123456",
      "title": "outsite the dog",
      "isCompleted": false,
      "description": "Walk the dog"
  },
  {
      "id": "789012",
      "title": "task 2",
      "isCompleted": true,
      "description": "Buy groceries"
  },
  {
      "id": "345678",
      "title": "task 3",
      "isCompleted": false,
      "description": "Clean the house"
  },
  {
      "id": "901234",
      "title": "task4",
      "isCompleted": true,
      "description": "Finish homework"
  }
];
const users = [
  { 
    "nombre": "Usuario1", 
    "tipo": "admin", 
    "email": "usuario1@example.com", 
    "password": "123456"
  },
  { 
    "nombre": "Usuario2", 
    "tipo": "user", 
    "email": "usuario2@example.com", 
    "password": "random123"
  },
  { 
    "nombre": "Usuario3", 
    "tipo": "user", 
    "email": "usuario3@example.com", 
    "password": "password123"
  }
];

module.exports = {tasks, users};