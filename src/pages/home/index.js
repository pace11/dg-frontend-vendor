import React from 'react'
import Layout from '../../uikit/common/layout'
import Section from '../../uikit/common/section'
import ImportantMenu from './important-menu'
import dataJson from '../../__json__/data.json'

export default function Home() {
  const { homepage } = dataJson

  return (
    <Layout>
      <Section>
        <ImportantMenu data={homepage} />
      </Section>
    </Layout>
  )
}
