const mongoose=require("mongoose");

const ListSchema = new mongoose.ListSchema({
    title:{type:String,required:true,unique:true},
    type:{type:String},
   genre:{type:String},
    contact:{ type:Array}
    },
    { timestamps : true}
    );


    module.export = mongoose.model("List",ListSchema);