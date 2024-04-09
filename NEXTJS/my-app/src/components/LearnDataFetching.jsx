
async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    return res.json();
}
const LearnDataFetching = async() => {
    const data = await getData();
  return (
    <div>LearnDataFetching

        {
            data.map((e)=>{
                return(
                    <div>{e.title}</div>
                )
            })
        }
    </div>
  )
}

export default LearnDataFetching