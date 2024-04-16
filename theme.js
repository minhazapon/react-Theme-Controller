import { useEffect, useState } from 'react'

const Nav = () => {
    const [theme, setTheme] = useState('light')
  
    // update state on toggle
    const handleToggle = e => {
      if (e.target.checked) {
        setTheme('synthwave')
      } else {
        setTheme('light')
      }
    }
  
    // set theme state in localStorage on mount & also update localStorage on state change
    useEffect(() => {
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem('theme')
  
      // add custom data-theme attribute
      document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

}



