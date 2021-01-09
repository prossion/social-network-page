import React from 'react'
import Preloader from "../common/Preloader/Preloader";


export const withSuspence = (Component) => {

    return (props) => {
        return <React.Suspense fallback={<div>Download...<Preloader /></div>}>
            <Component {...props}/>
        </React.Suspense>
    }
}