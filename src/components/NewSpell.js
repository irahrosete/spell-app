import React, { useState } from 'react'

const NewSpell = (props) => {
  const { categories, nextId, history, createNewSpell } = props
  // console.log(categories, nextId)

  const initialFormState = {
    name: "",
    description: "",
    category: "death"
  }

  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (event) => {
    setFormState(formState => {
      return {
        ...formState,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newSpell = {
      id: nextId,
      ...formState,
      date_modified: new Date()
    }
    console.log(newSpell)
    createNewSpell(newSpell)
    history.push("/")
  }

  const divStyles = {
    display: "grid",
    width: "100vh"
  }

  const inputStyles = {
    width: "70vw",
    margin: "0.5em"
  }

  const textAreaStyles = {
    height: "200px",
    margin: "0.5em",
    width: "70vw"
  }

  const labelStyles = {
    fontSize: "1.2em"
  }

  return (
    <div>
      <h2>Create new spell</h2>
      <form onSubmit={handleSubmit}>
        <div style={divStyles}>
          <label style={labelStyles}>Name:</label>
          <input style={inputStyles} type="text" name="name" value={formState.name} onChange={handleChange} />
        </div>
        <div style={divStyles}>
          <label style={labelStyles}>Category</label>
          <select style={inputStyles} name="category" value={formState.category} onChange={handleChange}>
            {categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
          </select>
        </div>
        <div style={divStyles}>
          <label style={labelStyles}>Description</label>
          <textarea style={textAreaStyles} type="text" name="description" value={formState.description} onChange={handleChange}/>
        </div>
        <button type="submit">Create new spell</button>
      </form>
    </div>
  )
}

export default NewSpell