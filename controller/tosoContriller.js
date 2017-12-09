var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({extended:false});
var data = [
    {item:'欢迎1'},
    {item:'欢迎2'},
    {item:'欢迎3'}
]
module.exports = function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data})
    })
    //传输数据
    app.post('/todo',urlencodeParser,function(req,res){
            data.push(req.body)
    })
    //删除数据
    app.delete('/todo/:item',function(req,res){
            data = data.filter(function(todo){
                return req.params.item !== todo.item
            });
            res.json(data)
    })
}