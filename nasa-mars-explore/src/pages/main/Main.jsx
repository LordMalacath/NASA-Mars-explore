import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export default function Main() {
    return (
        <Box
            height={"calc(100vh - 56px)"}
            width={"100vw"}
            p={4}
            mt={7}
        >
            <Stack
                width={{ desktop: "50%", mobile: "100%" }}
            >
                <Typography fontSize={{ desktop: '3rem', mobile: '1.2rem' }} gutterBottom color={'#eff1ed'}>
                    “We are all … children of this universe. Not just Earth, or Mars, or this system, but the whole grand fireworks. And if we are interested in Mars at all, it is only because we wonder over our past and worry terribly about our possible future.”
                </Typography>
                <Box alignSelf={"end"}>
                    <Typography variant="body1" color={'#eff1ed'}>
                        — Ray Bradbury,
                    </Typography>
                    <Typography variant="body1" color={'#eff1ed'}>
                        Mars and the Mind of Man, 1973.
                    </Typography>
                </Box>
            </Stack>
        </Box>
    )
}
