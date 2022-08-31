import NavBar from "features/navbar"
import Footer from "features/footer"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
