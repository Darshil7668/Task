import Form from "../Form/Form";

function Table({ data, setData, setSelectedRowData }) {

    const handleDeleteRow = (id) => {
        const updatedData = data.filter((row) => row.id !== id);
        setData(updatedData);

    }
    const handleEdit = (...index) => {
        setSelectedRowData(index)
       
    }
    return (
        <>
            <div>
                <table className="rounded-lg">
                    <thead className=" bg-light-blue-400 text-white text-center text-lg rounded-md">
                        <tr className="p-2 ">
                            <td className="">Id</td>
                            <td className="">Name</td>
                            <td className="">Age</td>
                            <td className="">Gender</td>
                            <td className="">Address</td>
                            <td className="">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.address}</td>
                                        <button className="bg-light-blue-500 p-1 m-1 rounded-md text-white" onClick={() => handleEdit(item.id, item.name, item.age, item.gender, item.address)}>Edit</button>
                                        <button className="bg-red-500 p-1 m-1 rounded-md text-white" onClick={() => handleDeleteRow(item.id)}>Delete</button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;