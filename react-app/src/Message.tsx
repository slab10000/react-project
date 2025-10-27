// .tsx for React Components
// .ts for plain typescript files


// Pascalcase
function Message(){
    // JSX: Javascript XML -> gets compiled to javascript
    // Here we can se how it is compiled: https://babeljs.io

    const name = "";

    if (name){
        return <h1>Hello {name} </h1>;
    } else {
        return <h1>Hello world</h1>
    }

}

export default Message;