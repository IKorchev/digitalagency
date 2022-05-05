import React from "react"
import EmailInput from "./EmailInput"
import FormButton from "./FormButton"

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
  }
  return (
    <form onSubmit={handleSubmit} className='mt-12 flex lg:w-3/5'>
      <EmailInput />
      <FormButton onSubmit={handleSubmit} />
    </form>
  )
}

export default Form
