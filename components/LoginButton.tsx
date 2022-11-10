import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
    const { data: session } = useSession()
    if (session) {
      return (
        <>
          <button 
          onClick={async () => {
            await signOut();
            location.href='/';
          }} 
          className="bg-red-700 p-2 rounded-lg mx-2"
          >Log Out</button>
        </>
      )
    }
    return (
        <button className='bg-secondary mx-2 p-2 rounded-lg' onClick={() => signIn()}>Login</button>
    )
  }