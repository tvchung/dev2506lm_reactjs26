import React from 'react'
import FuncMember from './FuncMember'

export default function FuncListMember() {
  return (
    <div className='border p-2'>
        <h2>Danh sách thành viên</h2>
        <FuncMember name="Chung 1" age="40" />
        <FuncMember name="Chung 2" age="41" />
        <FuncMember name="Chung 3" age="44" />
        <FuncMember name="Chung 4" age="42" />
    </div>
  )
}