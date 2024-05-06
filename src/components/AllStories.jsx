
import { useEffect, useState } from 'react';
import { fetchStoriesData } from '../api';
import Storie from './Storie';

const AllStories = () => {
    const [stories, setStories] = useState([]);
    // const data = [
    //     {
    //         _id: "1",
    //         Image: "https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714867200&semt=sph",
    //         Title: 'The Galaxy Time Travelers',
    //         Status: 'New'
    //     },
    //     {
    //         _id: "2",
    //         Image: "https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714867200&semt=sph",
    //         Title: 'The Galaxy Time Travelers',
    //         Status: 'In Progress'
    //     },
    //     {
    //         _id: "2",
    //         Image: "https://img.freepik.com/free-photo/glowing-spaceship-orbits-planet-starry-galaxy-generated-by-ai_188544-9655.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714867200&semt=sph",
    //         Title: 'The Galaxy Time Travelers',
    //         Status: 'Completed'
    //     }
    // ]
    useEffect(() => {
        async function fun() {
            // fetching stories 
            const data = await fetchStoriesData();
            setStories(data);
        }

        fun();
    }, []);
    return (
        <div className="container">
            <div className=" row">

                {
                    stories.length && stories.map((value, index) => {
                        return value?.Title && value?.Status && value?.Image?.[0] && (
                            <div key={index} className='col-12 col-sm-6 col-md-3 h-100 d-flex justify-content-center align-items-center  p-2'>
                                <Storie {...value} />
                            </div>)
                    })
                }
            </div>

        </div>
    )
}

export default AllStories