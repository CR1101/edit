export default function DrinkCard({ name, imageURL, description }) {
  return (
    <div className="drink-card">
      <h1>{name}</h1>
      <img src={imageURL} />
      <p>{description}</p>
      <ul>
        {/*
          
        }
        {ingradients.map((item)=>{
          return <li>{item}</li>
        })}
      */}
      </ul>
    </div>
  );
}
