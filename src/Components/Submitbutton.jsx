import { useNavigation } from "react-router-dom"

const Submitbutton = ({text}) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  return (
    <button className="btn btn-primary btn-block" disabled ={isSubmitting}>
      {
        isSubmitting? <>
         <span className="loading loading-bars loading-s"></span>
         Sending...
        </>:text  || 'Submit'
      }
    </button>
  )
}

export default Submitbutton
