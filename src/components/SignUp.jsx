import React from 'react'

export default function Signup(){


  return (
   <>
   <form action="submit" >
   <h1>Join</h1>
   
   <label htmlFor="name">Name</label>
   <input type="text" required />
   
   <label htmlFor="email">Email</label>
   <input type="email"  required />
   
   <label htmlFor="password" >Password</label>
   <input type="password"  required />
   
   <label htmlFor="password" >Password Confirmation</label>
   <input type="password"  required />

   

   <button type="submit" disabled>Submit</button>
   </form>
   </>
  )
}

