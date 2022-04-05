import React, { useEffect , useState } from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableData =() =>{
    
    const [ dataFile ,setDataFile] = useState([]);

    useEffect(() =>{
        getData();
    },[]);
    

    const getData = async () =>{
        const res = await fetch('http://localhost:4000/file/data');
        const fileData = await res.json();
        setDataFile(fileData.files);
    }


    return (
        <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
                </tr>
            </thead>
            <tbody>  
            {dataFile.map((e,index) => {
                return(
                    <tr key={index}>
                    <td>{e.file}</td>
                    <td>{e.text}</td>
                    <td>{e.number}</td>
                    <td>{e.hex}</td>   
                    </tr> 
                )
                })                 
            }
            </tbody>
        </Table> 
        </div>
      )  
}

export default TableData;
