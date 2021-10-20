import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    window.scroll(0,0);
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home