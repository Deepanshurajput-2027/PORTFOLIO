import React from 'react'
import MacWindow from './MacWindow'
import './Github.css'
import githubData from '../../assets/github.json'

const GitCard = ({ data }) => {
    return (
        <div className="card">
            <img src={data.image} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className="tags">
                {data.tags.map((tag, index) => (
                    <p key={index} className='tag'>{tag}</p>
                ))}
            </div>
            <div className="urls">
                <a href={data.repolink} target="_blank" rel="noopener noreferrer">Repo Link</a>
                {data.livelink && <a href={data.livelink} target="_blank" rel="noopener noreferrer">Live link</a>}
            </div>
        </div>
    );
};

const Github = () => {
    return (
        <MacWindow>
            <div className="cards">
                {githubData.map((project) => {
                    return <GitCard key={project.id} data={project} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github
