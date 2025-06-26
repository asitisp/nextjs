import {useSession,signIn,signOut} from 'next-auth/react'

export default function SignInPage() {
    const {data:session}=useSession();
    
        if(session){
            return(
        <>
            <h1>Sign In</h1>
           
            <button onClick={() => signOut()}>Sign out</button>
        </>)
        }else{
            return(
        <>
            <h1>Sign In</h1>
            <button onClick={() => signIn()}>Sign in</button>
        </>)
        }
        
}