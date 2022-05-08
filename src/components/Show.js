function Show(props) {
  return (
    <div className="showCont">
      <h4 id="showd" onClick={() => {
          props.onSelect(props.id);
        }} >{props.name}</h4>
      
    </div>
  );
}
export default Show;
