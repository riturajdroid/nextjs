"use client"
{/*read return statement first */}
{/*But why every component cant be made client component then??
    fast navigation and performance compromised and is more like react then*/}
import Button from "@/components/Button"

export default function Sheriyans() {
    return(
        <>
        <main>
            <h1>Hellow </h1>
            <p>some page</p>
            {/* This button gives an error */}
            {/*this is because nextjs by default uses server side rendering and we have added an event listener here which part of DOM(client side ) and hence we are getting an error here.
            we need to make this a client side component so that the event listener works properly.
            
            "use client" on top of this file tells nextjs that this component needs to be rendered on the client's side*/}
            <button onClick={()=>{
                alert("Button Clicked")
            }}>Click Me!</button> 
            <br />

            {/*instead of converting the entire page to client page , we just convert one component to client side like this below. here we dont have to write "use client" on the entire page file */}
            <Button/>
        </main>
        </>
    )
    
}