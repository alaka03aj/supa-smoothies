import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'
import SmoothieCard from '../components/SmoothieCard';
import './Home.css'

const Home = () => {
    const [fetchError, setFetchError] = useState(null);
    const [smoothies, setSmoothies] = useState(null)

    useEffect(() => {
        const fetchSmoothies = async () => {
            const {data, error} = await supabase
            .from('smoothies')
            .select()

            if (error) {
                setFetchError('Could not fetch')
                console.log(error)
                setSmoothies(null)
            }

            if (data){
                setSmoothies(data)
                console.log(smoothies)
                setFetchError(null)
            }
        }
        fetchSmoothies();
    }, [])

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className='smoothie-display'>
            {smoothies.map(smoothie =>(
                <SmoothieCard key = {smoothie.id} smoothie = {smoothie} />
            ))}
        </div>
      )}
    </div>
  )
}

export default Home;
