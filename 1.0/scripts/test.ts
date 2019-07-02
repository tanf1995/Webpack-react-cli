interface Props{
    name: string
}
class O{
    props: Props = {
        name: "tt"
    }
}

let o = new O();

console.log(o.props.name);