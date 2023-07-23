import { useState, useEffect } from 'react'

export const useImages = () => {
  const [images, setImages] = useState<any[]>([])

  const fetchImages = async () => {
    const response = await fetch('https://picsum.photos/v2/list?page=2&limit=6')
    const data = await response.json()
    setImages(data)
  }

  useEffect(() => {
      fetchImages()
    }, [])

  return { images }
}

