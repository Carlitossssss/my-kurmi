import DetailsProducer from "@/components/DetailsProducer"

export default function DetailsProducerPage({ params }) {
  const { id } = params;

  return (
    <div>
      <DetailsProducer _id={id} />
    </div> 
  );
}