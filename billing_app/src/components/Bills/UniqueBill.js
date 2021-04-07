import { Table, TableHead } from '@material-ui/core'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import swal from 'sweetalert'


export default function UniqueBill(props) {
    const {id} = props.match.params
    const [bill , setBill] = useState({})

    useEffect(()=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api//bills/${id}` , {
            headers : {
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }})
            .then((response)=>{
                const result = response.data 
                if(Object.keys(result).includes('errors')){
                    swal(result.errors)
                } else{
                    setBill(result)
                }
            })
    },[])

    return (
        <div>
            <h2> Bills invoces</h2>
            <Table>
                <TableHead>
                    
                </TableHead>
            </Table>
            <button onClick={()=>{window.print()}}>Download PDF</button>
        </div>
    )
}
