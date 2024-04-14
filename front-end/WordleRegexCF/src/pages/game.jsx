import './game.css'
import { useEffect,useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Game() {
    const [data, setData] = useState([]);
    const [badData, setBadData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [exp, setExp] = useState('');
    const [score, setScore] = useState(0)


    const re = new RegExp(exp);


    function createRegExpFromInput(input) {
        try {
          const escapedInput = escapeRegExp(input);
          const re = new RegExp(escapedInput);
          return re;
        } catch {
          // Fallback RegExp if there's an error in RegExp construction
          return new RegExp(''); // Default regex, matches 'a'
        }
      }

    const testRegex = () => {
        let score = exp.length;
        const userId = Cookies.get('user_id')

        data.forEach(element => {
            if (element.match(re)) {
                score++;
            }
        });

        badData.forEach(element => {
            if (element.match(re)) {
                score--;
            }
        });

        setScore(score)

        axios.post('http://localhost:3000/submit', {
            guessCount: score,
            bestScore: score,
            userId: userId
          })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:3000/find-game', {
                    day: "2024-04-14"
                });
    
                const goodItems = [response.data.goodOne, response.data.goodTwo, response.data.goodThree, response.data.goodFour, response.data.goodFive].filter(item => item);
                const badItems = [response.data.badOne, response.data.badTwo, response.data.badThree, response.data.badFour, response.data.badFive].filter(item => item);
    
                // Update data and badData state in one go
                setData(prevData => [...new Set([...prevData, ...goodItems])]); // Using Set to ensure uniqueness
                setBadData(prevData => [...new Set([...prevData, ...badItems])]);
    
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, []); 

    const signOut = () => {
        Cookies.remove('user_id')
        window.location.reload();
    }

    return(
        <div className='main-card'>
            <div className='input-card'>
                <h1 className='login-header'>Login Portal</h1>
                <input  className='username-field' type="text" name="name" size="10" onChange={(e) => setExp(e.target.value)}/>
                <button onClick={testRegex}>Test</button>
                <button onClick={signOut}>Sign out</button>
                <p className={ score != 0 ?  'display' : 'no-diplay'} >Score: {score}</p>
            </div>

            <div className='game-card'>
                <h1 className='Too match'>Good Matches</h1>
                {data.map((item, index) => (
                    <p className={item.match(re)? 'good' : 'bad' } key={index}>{item}</p>  // Display each item
                ))}


                <h1 className='Bad Matches'>Bad Matches</h1>
                {badData.map((item, index) => (
                    <p className={item.match(re)? 'bad' : 'good' } id='test' key={index}>{item}</p>  // Display each item
                ))}
            </div>
        </div>

    
    )
}

export default Game;