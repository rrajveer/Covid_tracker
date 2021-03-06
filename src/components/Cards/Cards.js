import React from 'react'
import { Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
const Cards = ({data:{ confirmed, recovered, deaths, lastUpdate}}) => {
   
    if(!confirmed) return <div>Loading...</div>
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
            <CardContent>
                <Typography color="textSecondary">INFECTED</Typography>
                <Typography  variant="h5">
                    <CountUp start={0} end={confirmed.value} separator="," duration={2.5}/>
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography  variant="body2">No of people infected by COVID-19</Typography>
            </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary">RECOVERED</Typography>
                <Typography  variant="h5">
                    <CountUp start={0} end={recovered.value} separator="," duration={2.5}/>
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography  variant="body2">No of people recovered from COVID-19</Typography>
            </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.death)}>
            <CardContent>
                <Typography color="textSecondary">DEATHS</Typography>
                <Typography  variant="h5">
                    <CountUp start={0} end={deaths.value} separator="," duration={2.5}/>
                </Typography>
                
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography  variant="body2">No of death by COVID-19</Typography>
            </CardContent>
            </Grid>
        </Grid>
        </div>
    )
}

export default Cards
