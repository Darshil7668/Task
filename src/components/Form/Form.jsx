import { Button, Card, Input, Radio, Textarea, Typography } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import './Form.css'
const Form = ({ setData, data, selectedRowData }) => {
    const [id, setId] = useState(1)
 

    const handleSubmit = (e) => {
        e.preventDefault();

         

        setId(id + 1)
        handleReset()
        const userDetails = {
            id,
            name,
            age,
            gender,
            address
        }
        setData([...data, userDetails])
    }

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")

    const selectRadio = (e) => {
        setGender(e.target.value)
    }

    const handleReset = () => {
        setName('')
        setAge('')
        setGender('')
        setAddress('')
    }


    return (
        <>
            <div className="flex justify-evenly">
                <div className='p-2'>
                    <Card Card color="transparent" shadow={false} onSubmit={handleSubmit} >
                        <Typography variant="h4" color="blue-gray">
                            Enter Your Detail
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Enter your details to register.
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input required={true} size="lg" label="Name" onChange={(e) => setName(e.target.value)} value={name} />
                                <Input required={true} id='age' type="number" size="lg" label="age" className='appearance-none'
                                    onChange={(e) => setAge(e.target.value)} value={age} />
                            </div>
                            <div>
                                <span>Gender:</span>
                                <div className="flex gap-10">
                                    <Radio required={true} checked={gender === 'Male'} id="male" name="type" label="Male" value={'Male'} onChange={selectRadio} />
                                    <Radio required={true} checked={gender === 'Female'} id="female" name="type" label="Female" value={'Female'} onChange={selectRadio} />
                                </div>
                            </div>
                            <div className="w-96">
                                <span>Address:</span>
                                <Textarea required={true} label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className='flex justify-between'>
                                <Button className="mt-6 w-28 bg-blue-600" fullWidth type="submit" >
                                    SUBMIT
                                </Button>
                                <Button color='red' className="mt-6 w-28 bg-red-600" fullWidth onClick={handleReset}>
                                    RESET
                                </Button>
                            </div>
                        </form>
                    </Card >
                </div>
            </div>

        </>
    )
}

export default Form;