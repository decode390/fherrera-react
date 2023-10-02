import { useLayoutEffect, useRef } from "react"

export const Quote = ({quoteItem}) => {
  const {quote, author} = quoteItem
  const pRef = useRef();

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect())
  }, [])

  return (
    <blockquote 
      ref={pRef}
      className="blockquote text-end"
      style={{display: 'flex'}}
    >
      <p role="quote">Quote: {quote}</p>
      <footer className="blockquote-footer" aria-label="author">
        Author: {author}
      </footer>
    </blockquote>
  )
}

