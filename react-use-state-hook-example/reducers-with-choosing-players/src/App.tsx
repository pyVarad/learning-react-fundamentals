import { useReducer } from 'react'
import { Props } from './models/models'
import { PlayersComponent } from './components/players'
import { SquadComponent } from './components/squad'
import { Box, Grid } from '@mui/material'

const players: {players: Props[], squad: Props[]} = {
  players: [
  {
    "name": "Lionel Messi",
    "title": "Mr",
    "club": "Inter Miami",
    "image": "https://media.architecturaldigest.com/photos/637949b3407644b8cdc8947f/1:1/w_2896,h_2896,c_limit/1442809583",
    "price": 100000
  },
  {
    "name": "Cristiano Ronaldo",
    "club": "Al-Nassr",
    "title": "Mr",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
    "price": 125000
  },
  {
    "name": "Neymar Jr.",
    "club": "Al-Hilal",
    "title": "Mr",
    "image": "https://i.pinimg.com/550x/ec/19/8f/ec198fcf32a824dfe8965ab879cfe5f3.jpg",
    "price": 125000

  },
  {
    "name": "Kylian Mbappe",
    "club": "Paris Saint-Germain",
    "title": "Mr",
    "image": "https://images.wsj.net/im-678978/?width=1278&size=1",
    "price": 150000

  },
  {
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "title": "Mr",
    "image": "https://static.independent.co.uk/2022/10/23/19/1435606233.jpg",
    "price": 75000
  }
], 
squad: []
}

const manageSquad = (state: any, action: any) => {
  const newState = {...state}
  let payload = {...action.payload}
  switch (action.type) {
    case "ADD":
      newState.squad = [...addToSquad(state.squad, payload)]
      newState.players = [...removeFromPlayers(state.players, payload)]
      state = {...newState}
      return state
    case "REMOVE":
      newState.players = [...addToPlayers(state.players, payload)]
      newState.squad = [...removeFromSquad(state.squad, payload)]
      state = {...newState}
      return state
    default:
      return state
  }
}


const addToPlayers = (players: Props[], payload: Props) => {
  players.push(payload)
  return players;
} 

const removeFromPlayers = (players: Props[], payload: Props) => {
  const updatedPlayerList = players.filter(playerInfo => playerInfo.name !== payload.name)
  return updatedPlayerList
}

const addToSquad = (squad: Props[], payload: Props) => {
  squad.push(payload)
  return squad;
} 

const removeFromSquad = (squad: Props[], payload: Props) => {
  const updatedSquadList = squad.filter(squadInfo => squadInfo.name !== payload.name)
  return updatedSquadList
}


function App() {
  const [state, dispatch] = useReducer(manageSquad, players)

  return (
    <Grid container>
      <Grid
      container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={6}
      >
        <Box>
          <PlayersComponent players={state.players} controller={dispatch} />
        </Box>
      </Grid>

      <Grid
      container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={6}
      >
        <Box>
          <SquadComponent players={state.squad} controller={dispatch}/>
        </Box>
      </Grid>
    </Grid>

  )
}

export default App
