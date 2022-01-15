import * as React from "react"

import Layout from "../components/layout"

import "../styles/page.scss"

// markup
const IndexPage = () => {
  return (
    <Layout 
      pageTitle = "AcrossTheUniverse.Fun - How to have some fun in the real world, separately together"
      pageName = "Across The Universe .Fun">
      <h2 className="accent">Ways to enjoy time with your loved ones at a distance.</h2>
      <h2>Merry Christmas, Dad.</h2>
      <p>
        In just a few days, we blast off into the unknown. At first, we'll only be miles apart--good enough for simultaneous video links.<br />
        After a short while, we will see a noticeable lag in our conversations as the speed of light becomes more tangible.<br /><br />
        It's mere seconds as we get close to the moon... <br />
        Then minutes as we reach our closest neighboring planets... <br />
        Then it might be hours...
      </p>
      <p>
        How do you stay connected to those you love when you’re dealing with distance like this? When the speed of light isn't fast enough?
      </p>  
      <p>
        These games can be played on a video call, or through photos, or even audio or text message.
        <br /><br />
        Every game here has a real-world aspect. No videogames or VR headsets needed.
        <br /><br />
        They're perfect for kids to play with grandparents, or distant friends. They're good, clean, free, fun.
      </p>
    </Layout>
  )
}

export default IndexPage
