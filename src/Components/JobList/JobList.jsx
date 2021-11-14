import styles from './JobList.module.css';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import { JobCard } from '../JobCards/JobCard'
import { useEffect, useState } from 'react';
import axios from 'axios';

export const JobList = () => {

    const [JobList, setJobList] = useState([]);
    const [state, setState] = useState({
        location: "",
        title: ""
    })


    useEffect(() => {
        axios.get("http://localhost:8080/jobs").then((res) => {
            setJobList(res.data.jobs);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handleQuerySearch = () => {
        axios.get(`http://localhost:8080/jobs?title=${state.title}&location=${state.location}`).then((res) => {
            setJobList(res.data.jobs);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.search_field_container}>
                <div className={styles.search_field}>
                    <SearchIcon />
                    <input type="text" placeholder="Job Title or Keyword" value={state.title} onChange={(e) => { setState({ ...state, title: e.target.value }) }} />
                </div>
                <div className={styles.search_field}>
                    <LocationOnIcon />
                    <input type="text" placeholder="Search Location" value={state.location} onChange={(e) => { setState({ ...state, location: e.target.value }) }} />
                </div>
                <Button variant="contained" onClick={() => handleQuerySearch()}>Search</Button>
            </div>

            <div className={styles.JobList_container}>
                {JobList?.map((el) => {
                    return <JobCard image={el.image} title={el.title} description={el.description} />
                })}
            </div>
        </div>
    )
}