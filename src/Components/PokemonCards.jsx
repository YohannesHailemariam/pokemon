import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import download  from '../assets/download.jpg'

const PokemonCards = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results); 
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };

    fetchPokemon();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemon = pokemon.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='grid place-items-center mt-[30px] mb-[30px] text-gray-800'>
        <input 
            type="text" 
            placeholder="Search Pokémon..." 
            value={searchTerm}
            onChange={handleSearch}
            className="relative mb-4 w-[300px] p-2 border border-gray-300 rounded-lg"
        /> 
      </div>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:ml-[10px] lg:grid-cols-4 gap-4">
        {filteredPokemon.map((item, index) => (
          <div key={index} className='mb-8'>
            <PokemonCard 
              imgSrc={download}
              title={item.name}
              text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolores neque quis quae, magni numquam facilis quod optio perferendis? Dolorum fugiat alias distinctio praesentium minima soluta culpa esse sint adipisci?'}
              date={'10/10/2024'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonCards;
