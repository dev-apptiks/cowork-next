var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.di8rr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Mongo DB Connected successfully from reg js");
});

export default async function Register(req, res) {

    if (req.method === 'POST') {
        console.log('------------------frm POST call-----------------------')
        console.log(req.body)
      
//we need to check above log first in cosole, then need to build schema & model before writing below code

        //below lines should write aftr schema build-------------
           const appUserMod= new AppUser(req.body.abc)

           try{
            await appUserMod.save();
          }
          catch(err){
            console.log("Issue from Mongo db save call");
            res.send(500).send("Db issue");
          }
        //-------------------------------------------------------
        res.status(200).json( {appResponse:"contact added successfully " })


    } else if (req.method === 'GET') {
        console.log('from GET cl')
        res.status(200).json({ status: 'frm GET cl' })

    }
    res.status(200).json({ status: 'frm Others cl' })


}

const AppUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password:{
      type:String,
      required:true
    },
    age:{
      type:String,
      required:true
    },
    lastname:{
      type:String,
      required:true
    }


});
const AppUser = mongoose.model('AppUser', AppUserSchema)

