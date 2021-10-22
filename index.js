const  express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send(' WOW Hello From My Second Node Server..........');
});
const users=[
    {id:0,name:'sabana', email: 'sabana@gmail.com', phone:'01788888888'},
    {id:1,name:'srabony', email: 'srabony@gmail.com', phone:'01788888888'},
    {id:2,name:'sreya', email: 'sreya@gmail.com', phone:'01788888888'},
    {id:3,name:'soniya', email: 'soniya@gmail.com', phone:'01788888888'}
]
app.get('/users',(req,res)=>{
    //use query parameter
    const search = req.query.search;
    if(search){
const searchResult = users.filter(user=>user.name.toLocaleLowerCase().includes(search));
res.send(searchResult);
    }
    else{
        res.send(users);
    }
    res.send(users);
})
// add.METHOD
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id= users.length;
    users.push(newUser);
    console.log('hiting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})
//dynamic api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)   
})
app.get('/fruits',(req,res)=>{
    res.send(['mango','oranges','banana','apple'])
})
app.get('/fruits/mangoes/fazli',(req,res)=>{
    res.send('yummy yummy tok marka fazli');
})
app.listen(port,()=>{console.log('LIstening to Port',port)});