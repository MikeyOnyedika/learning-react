import React, { useEffect, useState } from 'react'

const basics = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(false)
    
    useEffect(() => {
        fetch(url).then(response => {
            return response.json()

        }).then(user => console.log(user)).catch(err => console.log(err))
    })

    if (isLoading){
        return (
            <Loading />
        )
    }

    if (isUserFound){
        return (
            <User {...user} />
        )
    }
}

export default basics