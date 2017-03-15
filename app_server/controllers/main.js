/**
 * Created by CraigFox on 16/03/17.
 */
const index = function(req, res){
    res.render('index', {title: 'Pony Express'});
}

module.exports = {
    index
}