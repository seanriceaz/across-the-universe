import * as React from 'react'
import { Link } from 'gatsby'
const Layout = ({ pageTitle, pageName, children }) => {
  return (
    <div>
      <title>{getPageTitle(pageTitle, pageName)}</title>
      <nav id = "siteNav">
        <ul>
          <Link to="/">Across The Universe</Link>
        </ul>
      </nav>
      <main>
        <h1>{pageName}</h1>
        {children}
      </main>
    </div>
  )
}

function getPageTitle(pageTitle, pageName){
  if (typeof(pageTitle) !== "undefined" && pageTitle)  {
    return pageTitle;
  } else if (typeof(pageName) !== "undefined" && pageName) {
    return `${pageName} | AcrossTheUniverse.Fun`;
  } else {
    return "AcrossTheUniverse.Fun";
  }
}

export default Layout