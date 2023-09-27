const Table=({contacts, deleteName, className})=>{


    return(
        <div>
            <table className={className}>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                </tr>
                {contacts.map((item)=>(
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.number}</td>
                    <button onClick={()=>deleteName(item.id)}>Delete</button>
                    </tr>
                ))}
            </table>
            </div>
        )
}
export default Table;