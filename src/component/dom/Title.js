import React,{useEffect} from 'react'
export const SITE_TITLE = "test site"
const Title = ({headerTitle}) => {
    useEffect(() => {
        document.title = headerTitle  +"|"+' '+ SITE_TITLE
    },[headerTitle])
    return (
        <div>
        
        </div>
    )
}

export default Title
