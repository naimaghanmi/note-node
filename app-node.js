var fs=require('fs')
/*read*/
const strr = process.argv[2];
if(strr==='list' ){
fs.readFile('./list.js', 'utf8', function (erreur, data)
{
    if (erreur)
    throw erreur; 
    var str = JSON.parse(data);
    console.log(str)
});}
/*ADD*/
else if(process.argv[2].toString()==='add'&&(process.argv[3]==='-title')||(process.argv[3]==='-t')  && 
(process.argv[5]==='-body')
 && process.argv.length ===7) 
 {
    const newtitle=process.argv[4]
    const newbody=process.argv[6];
    var newItem = [{
        title:newtitle,
        body:newbody }]    
fs.readFile('./list.js', 'utf8', function (erreur, data){
        if(erreur)
        throw erreur;
        var item = JSON.parse(data).concat(newItem)

        fs.writeFile('./list.js', JSON.stringify(item), function (err) {
            if (err) return console.log(err);
          });
    });   
}
/*Delete*/
else if(process.argv[2].toString()==='remove' && (process.argv[3]==='-title') 
 && (process.argv[5]==='-body')
 && process.argv.length ===7) 
 {

 const deltitle=process.argv[4];
        fs.readFile('./list.js', 'utf8', function (erreur, data){
            if(erreur)
            throw erreur;
            var srtt = JSON.parse(data)
            var newlist = srtt.filter(el=> el.title!==deltitle)
            fs.writeFile('./list.js', JSON.stringify(newlist), function (err) {
                if (err) return console.log(err);
              });

        })

    }
/*read a specific note*/
else if(process.argv[2].toString()==='read' && (process.argv[3]==='-title') 
&& process.argv.length ===5)
{

    const readtitle=process.argv[4];
    fs.readFile('./list.js', 'utf8', function (erreur, data){
        if(erreur)
        throw erreur;
        var filtred = JSON.parse(data)
        var newlist=filtred.filter(el=> el.title===readtitle)
       console.log(newlist)

    })

}
