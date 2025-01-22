import  {Schema} from "mongoose";

const meetingSchema=new Schema(
    {
        meetingCode:{type:String,required:true},
        date:{type:Date, required:true, default:Date.now},
        user_id:{type:String}
    }
)

const Meeting= mongoose.model("Meeting",meetingSchema);

export {Meeting};