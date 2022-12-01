import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/citas/'


const CompShowCitas = () => {
    
    const [citas, setCita] = useState([])
    useEffect( ()=>{
        getCitas()
    },[])

    //procedimineto para mostrar todos los citas
    const getCitas = async () => {
        const res = await axios.get(URI)
        setCita(res.data)
    }

    //procedimineto para eliminar un cita
    const deleteCita = async (id) => {
       await axios.delete(`${URI}${id}`)
       getCitas()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { citas.map ( (cita, index) => (
                                <tr key={ index }>
                                    <td> { cita.title } </td>
                                    <td> { cita.content } </td>
                                    <td>
                                        <Link to={`/edit/${cita._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteCita(cita._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowCitas