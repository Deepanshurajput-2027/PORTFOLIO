import React from 'react'

const GithubCard = ({ data }) => {
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

export default GithubCard
