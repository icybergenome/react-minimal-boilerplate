import React from 'react'
import Fetch from './FetchData'
import Display from './DisplayData'

import {FetchProvider} from './FetchContext'

function FetchAndDisplay() {
    return (
        <FetchProvider>
            <Fetch />
            < Display/>
        </FetchProvider>
    )
}

export default FetchAndDisplay
