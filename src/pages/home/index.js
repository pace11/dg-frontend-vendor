import React from 'react'
import Layout from '../../uikit/common/layout'
import Section from '../../uikit/common/section'
import ImportantMenu from './important-menu'

export default function Home() {
  return (
    <Layout>
      <Section>
        <ImportantMenu />
      </Section>
    </Layout>
  )
}
