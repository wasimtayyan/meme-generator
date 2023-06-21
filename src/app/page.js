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
    <main className='flex justify-between'>
      <div className='mx-5'>
        {isLoding ? null : <ImageMeme
          textColor={textColor}
          topText={topText}
          bottomText={bottomText}
          imageUrl={imageUrl} />}
      </div>
      <div className='mx-5'>
        <FormInput
          setTextColor={setTextColor}
          setBottomText={setBottomText}
          setTopText={setTopText}
          topText={topText}
          bottomText={bottomText}
        />
      </div>

    </main>
  )
}
