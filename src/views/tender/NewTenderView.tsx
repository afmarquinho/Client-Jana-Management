import HeadingForm from "../../components/tender/HeadingForm"
import TenderNav from "../../components/tender/TenderNav"

const NewTenderView = () => {
  
  return (
    <div className="my-5 flex gap-5">
      <TenderNav/>
      <HeadingForm/>
    </div>
  )
}
export default NewTenderView