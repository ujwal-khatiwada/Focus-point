import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './mooxy.ttf' })
 
export default function MyApp() {
  return (
    <main className={myFont.className}>
      <h2>Hello</h2>
    </main>
  )
}