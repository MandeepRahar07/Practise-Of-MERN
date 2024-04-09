import {NextResponse} from 'next/server'

export async function GET(req){
    const requestHeaders = new Headers(req.Headers);
    // console.log(requestHeaders);

    //URL Query Params
    const {searchParams} = new URL(req.url);

    // console.log(searchParams);

    //Cookies
    const cook1 = req.cookies
    console.log(cook1);


    return NextResponse.json({"msg" : "heloo this is api"})
}

export async function POST(req){
     
    // const res = await req.json();
    // console.log("ResJson:", res);

    const formData = await req.formData()
    console.log("Form Datta:", formData.get("title"))




    return NextResponse.json({"msg" : "po;st success"}),{status:201}
}