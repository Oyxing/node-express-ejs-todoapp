// 引入mongose 模块

var mongoose = require('mongoose')
//链接数据库
                //           数据库名  数据库密码
mongoose.connect('mongodb://todoapp:todoapp@ds133776.mlab.com:33776/oyxingsql')
// 创建图表
var todoSchema = new mongoose.Schema({
    item:String
})
//往数据库存储数据

var Todo = mongoose.model('Todo',todoSchema)
// Todo({item:'Hello Everyone'}).save(function(err,data){
//     if (err) throw err
//         console.log('data')
// })
var bodyParser = require('body-parser')
var urlencodeParser = bodyParser.urlencoded({extended:false});
// var data = [
//     {item:'欢迎1'},
//     {item:'欢迎2'},
//     {item:'欢迎3'}
// ]
module.exports = function(app){
    app.get('/todo',function(req,res){
        Todo.find({},function(err,data){
            if (err) throw err

            res.render('todo',{todos:data})
        })
    })
    //传输数据
    app.post('/todo',urlencodeParser,function(req,res){
            Todo(req.body).save(function(err,data){
                if (err) throw err;

                res.json(data)
            })   
        
    })
    //删除数据
    app.delete('/todo/:item',function(req,res){
        Todo.find({item:req.params.item}).remove(function(err,data){
            if (err) throw err
                
            res.json(data)
        })
            // data = data.filter(function(todo){
            //      console.log('req.params.item !== todo.item')
            //     console.log(req.params.item !== todo.item)
            //     return req.params.item !== todo.item
            // });
            // res.json(data)
    })
}