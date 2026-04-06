import React from 'react';

const GithubCard = ({ data }) => {
    return (
        <div className="card">
            <img src={data.image} alt={`${data.title} project image`} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className="tags">
                {data.tags.map((tag, index) => (
                    <p key={index} className='tag'>{tag}</p>
                ))}
            </div>
            <div className="urls">
                <a href={data.repolink} target="_blank" rel="noopener noreferrer" aria-label={`View ${data.title} project repository`}>Repo Link</a>
                {data.livelink && <a href={data.livelink} target="_blank" rel="noopener noreferrer" aria-label={`View ${data.title} live demo`}>Live link</a>}
            </div>
        </div>
    );
};

export default GithubCard;