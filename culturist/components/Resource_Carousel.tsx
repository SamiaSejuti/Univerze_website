import Image from 'next/image';
export default function Resource_Carousel() {
  return (
    <div className="carousel carousel-center w-full p-4 space-x-4 bg-neutral"
      style={{
        overflowX: 'scroll',
        display: 'flex',
        backgroundColor: '#EED6D3',
        position: 'relative',
        paddingTop: '45px',

      }}>

      <div style={{
        fontFamily: 'LeagueSpartan',
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '0 10px'
      }}>
        RESOURCES
      </div>

      <div className="carousel-item relative transform transition duration-500 hover:scale-105" style={{ width: '25%' }}>
        <a href="#link1" className="block">
          <div
            className="transition duration-500 transform hover:scale-105"
            style={{ position: 'relative', width: '100%', height: '200px' }}
          >
            <Image
              alt='image1'
              src="/images/phone-res.jpg"
              width={1000}
              height={500}
              style={{ objectFit: 'contain', position: 'relative' }}
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
            <span className="text-white">Service Providers</span>
          </div>
        </a>
      </div>
      <div className="carousel-item relative transform transition duration-500 hover:scale-105" style={{ width: '25%' }}>
        <a href="#link2" className="block">
          <div
            className="transition duration-500 transform hover:scale-105"
            style={{ position: 'relative', width: '100%', height: '200px' }}
          >
            <Image
              alt='image2'
              src="/images/bank-res.jpg"
              width={1000}
              height={500}
              style={{ objectFit: 'contain', position: 'relative' }}
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
            <span className="text-white">Banking</span>
          </div>
        </a>
      </div>
      <div className="carousel-item relative transform transition duration-500 hover:scale-105" style={{ width: '25%' }}>
        <a href="#link3" className="block">
          <div
            className="transition duration-500 transform hover:scale-105"
            style={{ position: 'relative', width: '100%', height: '200px' }}
          >
            <Image
              alt='image3'
              src="/images/accom-res.jpg"
              width={1000}
              height={500}
              style={{ objectFit: 'contain', position: 'relative' }}
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
            <span className="text-white">Accomodation</span>
          </div>
        </a>
      </div>
      <div className="carousel-item relative transform transition duration-500 hover:scale-105" style={{ width: '25%' }}>
        <a href="#link4" className="block">
          <div
            className="transition duration-500 transform hover:scale-105"
            style={{ position: 'relative', width: '100%', height: '200px' }}
          >
            <Image
              alt='image4'
              src="/images/tram-res.jpg"
              width={1000}
              height={500}
              style={{ objectFit: 'contain', position: 'relative' }}
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
            <span className="text-white">Public Transport</span>
          </div>
        </a>
      </div>
    </div>
  )
}
