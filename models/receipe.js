const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "ingredients":String,
        "image":String
    }
)
let receipemodel=mongoose.model("receipes",schema);
module.exports={receipemodel}