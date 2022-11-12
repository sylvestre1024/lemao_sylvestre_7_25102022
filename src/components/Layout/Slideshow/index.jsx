import { useState } from "react"
import styled from 'styled-components'
import colors from '../../../utils/style/colors'

function Slideshow({photosArray}) {
    console.log(photosArray)
    const numberOfphotos = photosArray.length
    const firstPhoto = photosArray[0]
    console.log(firstPhoto)
    const lastPhoto = photosArray[numberOfphotos-1]
    console.log(lastPhoto)
    const [actualPhoto, setActualPhoto] = useState(firstPhoto)
    console.log(actualPhoto)

    const previousPhoto = function (actualPhoto) {
        if (actualPhoto===firstPhoto) {
            console.log(actualPhoto)
            setActualPhoto(lastPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex-1])
        }
    }
    const nextPhoto = function (actualPhoto) { 
        if (actualPhoto===lastPhoto) {
            setActualPhoto(firstPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex+1])
        }
    }

    return (
        <div>
            <div>              
                <img src={actualPhoto} alt="product" />                 
            </div>
            {numberOfphotos !== 1 &&
            <div>
                <span onClick={() => previousPhoto(actualPhoto)}>Previous</span>
                <span> - </span>
                <span onClick={()=>nextPhoto(actualPhoto)}>Next</span>
                <div>
                    {photosArray.indexOf(actualPhoto)+1}/{numberOfphotos}
                </div>
            </div>
            }
        </div>
    )
}


export default Slideshow