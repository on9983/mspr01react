


const NioCartes = (props) => {
    return (
      <div className="NioCard">
        <div className="NioCardBody">
          <img src={props.img} className="NioCardImage" />
          <h2 className="NioCardTitle">{props.title}</h2>
          <p className="NioCardDescription">{props.description}</p>
        </div>
        <button className="NioCardBtn">View Recipe</button>
      </div>
    );
}




export default NioCartes