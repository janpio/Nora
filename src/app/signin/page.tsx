'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col gap-6 border rounded-md p-6'>
        <h1 className='text-2xl font-bold'>Sign in</h1>
        <div className='flex gap-4'>
          <label className='flex flex-col gap-1 text-black font-medium'>
            Email
            <input
              className='rounded-md border border-gray-300 p-1'
              type='text'
              placeholder='username'
            />
          </label>
          <label className='flex flex-col gap-1 text-black font-medium'>
            Password
            <input
              className='rounded-md border border-gray-300 p-1'
              type='password'
              placeholder='password'
            />
          </label>
        </div>
        <span className='h-[0.5px] w-full bg-gray-300'></span>
        <button
          className='flex justify-center items-center gap-2 border p-1 rounded-md'
          onClick={() => signIn('google')}
        >
          <FcGoogle /> Connexion avec google
        </button>
        <button
          className='text-white bg-blue-500 rounded-md p-1'
          onClick={() => signIn('credentials', { redirect: false, mail: 'mail', password: 'password' })}
        >
          Connexion
        </button>
      </div>
    </div>
  )
}
