import Nav from "./nav"

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="layout-parent w-1/2 md:w-full mx-auto">
        {children}
      </div>
    </>
  )
}
