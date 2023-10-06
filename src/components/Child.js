function Child(props) {
    function onClickHandler(e) {
        console.log(`clicked ${props.name || props.obj.name}` , e.target);}
     return (
      <div className={props.className ? props.className : "default-class"}>
        {/* <h2>Child component</h2> */}
        {props.name ? (
          <h3 onClick={onClickHandler}> Name: {props.name} </h3>
        ) : (
          <h3> no name passed</h3>
        )}
        {props.obj ? (
          <h3 onClick={onClickHandler}>
            {props.obj.id} - {props.obj.name}
          </h3>
        ) : (
          <h3> no object passed</h3>
        )}
      </div>
    );
}
export default Child;