import {useState} from 'react'

const AddTask = () => {

const [inputTitle, setinputTitle] = useState("");
const [inputDesc, setinputDesc] = useState("");
const [items, setItems] = useState([
  {
    id: "001",
    name: "Default Task",
    desc: "Default Description",
    status: false,
  }
]);

const handleInputTitle = (e) =>{
    setinputTitle(e?.target.value);
}
const handleInputDesc = (e) =>{
    setinputDesc(e?.target.value);
}

const handleSubmit = (e) =>{
    e.preventDefault();
    if (!inputTitle || inputDesc){
        alert("Fill data");
    } 
    else{
        const allInputData = {
            id: new  Date().getTime.toString,
            name: inputTitle,
            desc: inputDesc,
        }
        setItems([allInputData, ...items]);
    }
}

  return (
    <>
    <div className='container'>
        <div className='col-12 text-end'>
          <button className='btn btn-primary'>
            Add New Task
          </button>
        </div>
    </div>
    <div className='container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded'>
        <div className='row'>
            <div className="text-center">
                {/* <h2></h2> */}
            </div>
            <form className='col-12 p-2' onSubmit={handleSubmit}>
            <label htmlFor='title' className='my-2'>
             Enter Title
            </label>
            <input
            type='text'
            name='title'
            id='title'
            placeholder='title'
            className='w-100 my-1 p-2'
            onChange={handleInputTitle}
            value={inputTitle}
            />
            <label htmlFor="description" className='my-2'>Enter</label>
            <input
            type='text'
            name='description'
            id='description'
            placeholder='Description'
            className='w-100 my-1 p-2'
            onChange={handleInputDesc}
            value={inputDesc}
            />
            <button className='btn btn-primary my-2'>Save</button>
            </form>
            {items.map((elem, index) => {
                return(
                    <div className='row border rounded p-3 mb-3 bg-white rounded p-2 key={elem.id}' >
                      <div className='col-12 d-flex justify-content-between align-items-center'>
                        <div>
                            <h4>{elem.name}</h4>
                            <p>{elem.desc}</p>
                        </div>
                      </div>
                    </div>
                )
            })}
        </div>
    </div>
    </>
    
  )
}

export default AddTask
