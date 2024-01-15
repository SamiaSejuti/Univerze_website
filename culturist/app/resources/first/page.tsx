import { AirportSimCards } from '@/components/DayOneGuide/AirportSimCards';
import { DocumentRequirements } from '@/components/DayOneGuide/DocumentRequirements';
import { TempHousing } from '@/components/DayOneGuide/TempHousing';
// import { DocumentRequirements } from '@/components/DayOneGuide/DocumentRequirements';
import { PhoneProviders } from '@/components/DayOneGuide/PhoneProviders';
import ResourceTab from '@/components/ResourceTab'
import { Container } from '@mui/material'
import React from 'react'

export default function page() {

    // tab and component definition for day 1 guide
    // - Service Providers and Mobile Plans
    // - Airport SIM Cards / Required Documents as a did you know notice
    // - Unlocking Your Phone
    const tabs = [
        { label: "Documents Required", content: <DocumentRequirements /> },
        { label: "Communication", content: <PhoneProviders /> },
        { label: "SIM Cards at the Airport", content: <AirportSimCards /> },
        { label: "Temporary Accommodation", content: <TempHousing /> },
    ];

    return (
        <Container>
            <ResourceTab tabs={tabs} />
        </Container>
    )
}