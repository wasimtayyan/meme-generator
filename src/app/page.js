"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ImageMeme from './ImageMeme'
import FormInput from './FormInput'
import axios from 'axios'

export default function Home() {
  const [imageUrl, setImageUrl] = useState('')
  const [isLoding, setIsloding] = useState(false)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [textColor, setTextColor] = useState({
    top: '000000',
    bottom: '000000'
  })
  const [font, setFont] = useState('font-sans')
  const [fontSize, setFontSize] = useState('20')
  const [textShadow, setTextShadow] = useState(false)


  useEffect(() => {
    setIsloding(true)
    getMemes()
  }, [])

  //

  const getMemes = async () => {
    try {
      const res = await axios.get('https://api.imgflip.com/get_memes');
      setImageUrl(res.data.data.memes)
      setIsloding(false)
    } catch (error) {
      console.error('Error fetching memes:', error);
    }
  }
  //


  return (
    <main >
      <h1 className='text-3xl text-center md:my-12 font-bold'>Welcome to Meme maker</h1>
      
      <div className='flex flex-col md:flex-row justify-around container mx-auto '>

        <div className='mx-5'>
          {isLoding ? <h1>Loading......</h1>: <ImageMeme
            setFontSize={setFontSize}
            textShadow={textShadow}
            fontSize={fontSize}
            font={font}
            textColor={textColor}
            topText={topText}
            bottomText={bottomText}
            imageUrl={imageUrl} />}
        </div>
        <div className='mx-5'>
          <FormInput
            font={font}
            fontSize={fontSize}
            textColor={textColor}
            textShadow={textShadow}
            setTextShadow={setTextShadow}
            setFontSize={setFontSize}
            setFont={setFont}
            setTextColor={setTextColor}
            setBottomText={setBottomText}
            setTopText={setTopText}
            topText={topText}
            bottomText={bottomText}
          />
        </div>
      </div>

    </main>
  )
}
