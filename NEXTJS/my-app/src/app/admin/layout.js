import Adminheader from "../../components/Adminheader";

export default function Adminlayout({children}){
    return(
        <>
        <Adminheader/>
        {children}
        </>
    )
}