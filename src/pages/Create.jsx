import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import supabase from "../config/supabaseClient"
import './Create.css'

const Create = () => {
  const navigate = useNavigate()

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [rating, setRating] = useState('')
    const [formError, setFormError] = useState(null)

const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !desc || !rating){
        setFormError('Please fill all details before submitting!')
        return
    }

    const {data, error } = await supabase.from('smoothies').insert([{name, desc, rating}]).select()

    if (error){
        console.log(error)
        setFormError(error)
    }

    if (data){
        console.log(data)
        setFormError(null)
        navigate("/")
    }

    console.log(name, desc, rating)
}

  return (
    <div className="sform">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
        <label htmlFor="desc">Description: </label>
        <input type="text" id="desc" value={desc} onChange={(e) => {setDesc(e.target.value)}}/>
        <label htmlFor="desc">Rating: </label>
        <input type="number" id="rating" value={rating} onChange={(e) => {setRating(e.target.value)}}/>

        <button>Add Smoothie!</button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  )
}

export default Create
