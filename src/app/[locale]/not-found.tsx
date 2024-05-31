import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex gap-4 justify-center items-center text-xl">
      <h2>Page not found:</h2>
      <Link href="/" className='underline'>Return Home</Link>
    </div>
  )
}