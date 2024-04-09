// export const GET = async(req,context)=>{
//    console.log(context.params.id);
   
//     return NextResponse.json({"msg" : "heloo this is api"})
// }

export const GET = async(req,{params})=>{
    console.log(params.id);
    
     return NextResponse.json({"msg" : "heloo this is api"})
 }