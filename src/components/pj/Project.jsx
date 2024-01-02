import React from 'react'

const Project = ({ text, index, setModal }) => {
    return (
        <div className='project__wrap'>
            <div className='project'
                onMouseEnter={() => { setModal({ active: true, index: index }) }}
                onMouseLeave={() => { setModal({ active: false, index: index }) }}
            >
                <div className='left'>
                    <span>{text.subTitle}</span>
                    <h2>{text.title}</h2>
                </div>
                <div className='right'>
                    <span>{text.date}</span>
                </div>
            </div>
        </div>
    )
}

export default Project