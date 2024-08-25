function ErrorMsg({hsp}){
    return (<center className="warn-empt"><h1>NO post have been created </h1>
    <button className="btn btn-success" onClick={hsp}>Get posts from Server</button></center>
    );
}
export default ErrorMsg