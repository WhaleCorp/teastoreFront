export default function Store(){
    async function SendRequest(){
        fetch('url')
        .then((response)=>response.json())
        .then((data)=>console.log(data))
    }
    return (
        <div>
            <button onClick={SendRequest}>
                Buy
            </button>
        </div>
    )
}