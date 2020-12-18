/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
const got = require('got');

async function solution() {
  var array_todo = [];
  var array_user = [];
  var final = [];
  var str = "";
  try {
    const response_todo = await got('https://jsonplaceholder.typicode.com/todos');
    const response_user = await got('https://jsonplaceholder.typicode.com/users');

    var obj_todo = JSON.parse(response_todo.body);
    var obj_user = JSON.parse(response_user.body);

    array_todo.push(obj_todo);
    array_user.push(obj_user);
    array_todo = array_todo[0];
    array_user = array_user[0];

    for (let i=0;i<array_user.length;i++) {
      var counter = 0;
      for(let j=0;j<array_todo.length;j++) {
        if((array_todo[j].id == array_user[i].id) && array_todo[j].completed == true) {
          counter++;
        }
        if((array_todo[j].id == array_user[i].id)) {
          str = '"{username: '+array_user[i].username+', completed: '+counter+'}"';
          var obj = JSON.parse(str);
          final.push(obj);
        }
      }
    }
    return final;

  } catch(error) {
    console.log(error.response.body);
  }

}

module.exports = solution
