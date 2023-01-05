import React from 'react'

export default function Form({ value, onChange }: Props) {
  return (
    <input 
      placeholder='cari user di github' 
      className='border boder-zinc-100 p-[20px] w-full rounded-[8px]'
      value={value}
      onChange={onChange}
      />
  )
}

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}