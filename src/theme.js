// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,        // 시스템 모드에 따라 자동설정 : true
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme