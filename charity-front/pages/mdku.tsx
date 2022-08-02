import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

interface Props {
  stars?: string;
}

const Home: NextPage<Props> = ({stars}) => {
  const [text, setText] = useState<String>('');
  return (
    <div>
     <h1>hi</h1>
     <h1>{stars}</h1>
     <a href="http://localhost:8000/auth/google">click here to login</a>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const cookie = ctx.req?.headers['cookie'];
  if(cookie==null){
    return {stars : "no cookie"}
  }
  if(cookie.length > 100 ){
    const res = await fetch('http://localhost:8000/', {
      headers: {
        cookie: cookie!
      },
  
      credentials: 'include'
      
    })
    const json = await res.json()
    return { stars: json.message }
  }
  else{
    return {stars: "not loged in"}
  }
}

export default Home
