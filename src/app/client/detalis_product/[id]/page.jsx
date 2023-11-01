
import ProductDetail from "@/components/DetailsProduct"
export default function DetailsProductPage({ params }) {

  const {id} = params

  return (
    <div className="mb-8">
      <ProductDetail _id={id}/>
    </div>
  )
}