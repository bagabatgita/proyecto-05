
import { useDispatch, useSelector } from 'react-redux';
import { setPokePerPage } from "../store/slices/pokemonPerPage.slice";
import { setTheme } from "../store/slices/theme.slice";
import "./styles/Config.css"

const Config = ({}) => {

    const dispatch = useDispatch()

    const themes = useSelector((store) => store.themes);
    const handleChangeSelectPage = (e) => {
        e.preventDefault();
        const poke = Number(e.target.value)
        dispatch(setPokePerPage(poke))
    };


    const handleChangeTheme  = (e) => {
        e.preventDefault();
        const theme = e.target.value
        dispatch(setTheme(theme))
    };


  return (
    <section className={`config  ${themes} linear-${themes} `  }>
        <h2 className='config__title'>Configurations</h2>
        
        <div className='config__content'>
            <div > 
                <label> Pokemons per Page : </label>
                <select className='config__select' onChange={handleChangeSelectPage}>
                <option value="">Select</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
                <option value="20">20</option>
                </select>
            </div>

            <div>
                <label>Theme : </label>
                <select className='config__select' onChange={handleChangeTheme}>
                <option value="">Select Theme </option>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
               
                </select>
            </div>      

        </div>
        
    </section>
  )
}

export default Config