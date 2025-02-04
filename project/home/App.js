import { getImageUrl } from './utils.js';
function Profile({profession, awards, awardsNumber, discovered}) {
  return (
    <section>
     
       <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awardsNumber} </b> 
            ({awards})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>

  )
}
function Avatar({name, imageId, size}) {
  return (
    <img 
    className="avatar"
    src={getImageUrl(imageId)}
    alt={name}
    width={size}
    height={size}
    />
  )
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <h2>Maria Skłodowska-Curie</h2>
      <Avatar
      name="Maria Skłodowska-Curie"
      imageId="szV5sdG"
      size={70}
      />
      <Profile 
      profession="geochemist"
      awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
      awardsNumber={4}
      discovered="polonium (chemical element)"
      />

       <h2>Katsuko Saruhashi</h2>
      <Avatar
      name="Katsuko Saruhashi"
      imageId="YfeOqp2"
      size={70}
      />
      <Profile 
      profession="geochemist"
      awards="Miyake Prize for geochemistry, Tanaka Prize"
      awardsNumber={2}
      discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
