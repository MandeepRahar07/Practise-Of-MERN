import axios from 'axios';
import React, { useState } from 'react'


function Multer() {
    const [file, setFile] = useState();

    const upload = ()=>{
        const formdata = new FormData()
        formdata.append('file',file)
    axios.post('http://localhost:8080/upload',formdata)
    .then(res => {})
    .catch(er => console.log(er));
    }
  return (
    <div>Multer
        <div>
            <input type="file" onChange={(e)=> setFile(e.target.files[0])} />
            <button type='button' onClick={upload}>Upload</button>
        </div>
    </div>
  )
}

export default Multer