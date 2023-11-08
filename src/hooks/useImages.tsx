import { useState, useEffect } from 'react'

export const useImages = () => {
  const [images, setImages] = useState<any[]>([])

  const fetchImages = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=2&limit=6')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setImages(data)
    } catch (error) {
      console.error('Error fetching images:', error)
    }
  }

  useEffect(() => {
      fetchImages()
    }, [])

  return { images }
}

