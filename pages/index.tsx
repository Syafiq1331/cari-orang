import React from 'react'
import Head from 'next/head'
import Form from '../components/Form'
import Button from '../components/Button'
import UserList from '../components/UserList'
import Header from '../components/Header'
import { User } from '../types/User'
import { SearchRes } from '../types/SearchRes'

export default function Home() {
  const [isLoading,setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [result, setResult] = React.useState<SearchRes | null>(null);

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(search) {
      setIsLoading(true)
      fetch(`https://api.github.com/search/users?q=${search}&per_page=20`)
        .then(res => res.json())
        .then(data => {
          const users : User[] = data.items;
          const searchRes : SearchRes = {
            search : search,
            users : users 
          }
          setResult(searchRes)
        }).finally(() => {
          setIsLoading(false)
        })
    }
  }


  return (
    <div className='space-y-5 py-10'>
      <Head>
        <title>Cari Orang Github</title>
      </Head>
      <Header />
      <form className='flex place-self-center space-x-3' onSubmit={onSearchSubmit}> 
        <Form value={search} onChange={(e) => setSearch(e.target.value)}/>
        <Button type='submit' isLoading={isLoading}/>
      </form>
      {
        result && <UserList result={result}/>
      }
    </div>
  )
}
