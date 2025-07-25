import React, { createContext, useState } from 'react'
import ExampleContent from './ExampleContent'

export const ThemeContext = createContext<string>('bg-dark')

export default function ExampleContext() {
    const [theme, setTheme] = useState('bg-dark')

    // hàm xử lý sự kiện
    const handleToggle = ()=>{
        setTheme(theme==='bg-dark'?'bg-warning':'bg-dark')
    }
  return (
    <ThemeContext.Provider value={theme}>
        <div>
            <h3>Thay đổi theme</h3>
            <button onClick={handleToggle}>Toggle Theme</button>
            <ExampleContent />
        </div>
    </ThemeContext.Provider>
   
  )
}
