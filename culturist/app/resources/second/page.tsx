import ResourceTab from '@/components/ResourceTab'
import Banking from '@/components/WeekOneGuide/Banking'
import Myki from '@/components/WeekOneGuide/Myki'
import Transportation from '@/components/WeekOneGuide/Transportation'
import { Container } from '@mui/material'
import React from 'react'

export default function page() {

  const tabs = [
    { label: "Public Transportation in Melbourne", content: <Transportation /> },
    { label: "What is Myki", content: <Myki /> },
    { label: "Banks", content: <Banking /> }
  ]

  return (
    <Container>
        <ResourceTab tabs={tabs} />
    </Container>
  )
}