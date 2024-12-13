import React from 'react'

function Video() {
  return (
   <>
     <section className="flex flex-col items-center bg-white">
      <div className="relative w-4/5 max-w-4xl aspect-video rounded-lg overflow-hidden border shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/KdWCDoqNHnA?si=xEZ0w2pHgvxQOThb"
          title="Video Player"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-lg font-medium">Akshaya History</p>
    </section>

   </>
  )
}

export default Video