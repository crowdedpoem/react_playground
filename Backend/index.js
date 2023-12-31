const express = require('express');
const { restart } = require('nodemon');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


const users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Mac',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});      


app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;

    if (name || job){
        let result = users;
        if (name){
            result = findUserByName(name);
            result = {users_list: result};
        }
        if (job){
            result = findUserByJob(job);
            result = {users_list: result}
        }
        
        
        
        res.send(result);
    }
    else {
        res.send(users);
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});

function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id); // or line below
    //return users['users_list'].filter( (user) => user['id'] === id);
}

const findUserByName = (name) => { 
    return users['users_list'].filter( (user) => user['name'] === name); 
}

const findUserByJob = (job) => { 
    return users['users_list'].filter( (user) => user['job'] === job); 
}

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    res.status(200).end();
});

function addUser(user){
    users['users_list'].push(user);
}

// app.delete('/users', (req, res) => {
//     const id = req.params['id']; //or req.params.id
//     res.send("id is " + id).end();
//     // let result = findUserById(id);
//     // if (result === undefined || result.length == 0)
//     //     res.status(404).send('Resource not found.');
//     // else {
//     //     // find index of post 
//     //     const index = users.users_list.findIndex( element => {
//     //         if (element.id = id)
//     //             return true
//     //     })

//     //     users.users_list.splice(index, 1)
//     //     res.status("202").send("Delete");
//     // }
// });

app.delete('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
         // find index of post 
         const index = users.users_list.findIndex( element => {
             if (element.id == id){
                return true
             }
                 
         });

         users.users_list.splice(index, 1);
         res.status("202").send("Delete index:" + index + " id:" + id);
    }
});