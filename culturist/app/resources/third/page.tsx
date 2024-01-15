import ResourceTab from '@/components/ResourceTab'
import AccommodationPrivate from '@/components/WeekTwoGuide/AccommodationPrivate'
import AccommodationStudent from '@/components/WeekTwoGuide/AccommodationStudent'
import Bonds from '@/components/WeekTwoGuide/Bonds'
import RentalAgreements from '@/components/WeekTwoGuide/RentalAgreements'
import TFN from '@/components/WeekTwoGuide/TFN'
import { Container } from '@mui/material'
import React from 'react'

export default function page() {

  const tabs = [
    { label: "Tax File Number", content: <TFN /> },
    { label: "Accommodation: Student", content: <AccommodationStudent />},
    { label: "Accommodation: Private", content: <AccommodationPrivate /> },
    { label: "Rental Agreements", content: <RentalAgreements /> },
    { label: "Bond Payments", content: <Bonds /> }
  ]

  return (
    <Container>
        <ResourceTab tabs={tabs} />
    </Container>
  )
}
