
import  Todo from "./type"


async  function data(): Promise<Todo[]>{
  const data1 = await fetch("http://localhost:8000");
  const data2 = await data1.json();
  return data2;
}