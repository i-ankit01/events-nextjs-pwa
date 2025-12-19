'use client'
import { signOut } from "@/actions/auth"

export default function SignOut(){
    async function handleSignOut() {
        await signOut()
    }
    return (
        <button onClick={handleSignOut}>Sign Out</button>
    )
}