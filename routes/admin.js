// app.get('/', function(req, res){
//     // res.write("<b>Quynh</b>")
//     // res.end();
//     let param = {
//         ten: 'quynh',
//         tuoi: '21',
//         html: '<i>quynhahihi</i>'
//     }
//     res.render('home', param);
// })

// app.post('/submit', function(req, res){
//     let nhandc = req.body.nhap;

//     res.render('submit', {
//         name:nhandc
//     })
// })
module.exports =function(app) {
    app.get('/', function(req, res){
        // res.write("<b>Quynh</b>")
        // res.end();
        let param = {
            ten: 'quynh',
            tuoi: '21',
            html: '<i>quynhahihi</i>'
        }
        res.render('home', param);
    })

    app.post('/submit', function(req, res){
        let nhandc = req.body.nhap;

        res.render('submit', {
            name:nhandc
        })
    })
}