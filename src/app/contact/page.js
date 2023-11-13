import Globe from '@/components/Globe'
import ShuffleText from '@/components/ShuffleText '
import PixelatedImage from '@/components/Pixelated'


export default function Page() {

    return (
  
      <main>
        <div> Conatact</div>  
        <ShuffleText />
        <Globe />

        {
        [...Array(7).keys()].map( (_, index) => {
          return <PixelatedImage src={`/images/pixelated/${index}.png`} src10={`/images/pixelated/${index}_small.png`}/>
        })
      }
        </main>
      )
  }
   