export default function If(props){
    if(props.teste === true){
        return props.children
    } else {
        return null
    }
}