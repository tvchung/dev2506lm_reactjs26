import React, { useContext } from 'react'
import { ThemeContext } from './ExampleContext'

export default function ExampleInfo() {
    const theme = useContext(ThemeContext)
  return (
    <div>
        <h2>Example Info</h2>
        <p className={theme}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam accusantium repellat, autem ullam explicabo suscipit error nobis commodi quas ipsum doloremque laudantium eius voluptatum provident consectetur, ex quaerat architecto temporibus.
        </p>
    </div>
  )
}
