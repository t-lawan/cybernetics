import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Main from "../components/main/main";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />
  </Layout>
)

export default IndexPage
