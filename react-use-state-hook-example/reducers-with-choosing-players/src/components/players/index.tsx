import React from 'react'
import { CardComponent } from '../card'
import { Props } from '../../models/models'
import { Grid } from '@mui/material'

export const PlayersComponent: React.FC<{ players: Props[],  controller: any }> = ({ players, controller }) => {
    return (
        <Grid container spacing={4}>
            {players.map((playerInfo: Props, idx: number) => (
                <Grid item xs={3} md={4} key={idx}>
                    <CardComponent
                        name={playerInfo.name}
                        title={playerInfo.name}
                        image={playerInfo.image}
                        club={playerInfo.club}
                        actionType="ADD"
                        controller={controller}
                    />
                </Grid>
            )
            )}
        </Grid>

    )
}