import React, { useState } from 'react'
import Modal from './components/modal/Modal'
import Project from './components/pj/Project'

const App = () => {
  const texts = [
    {
      title: "youtube site",
      subTitle: "project1",
      src: "image01.jpg",
      date: 2023,
    },
    {
      title: "react site",
      subTitle: "project2",
      src: "image02.jpg",
      date: 2023,
    },
    {
      title: "next.js site",
      subTitle: "project3",
      src: "image03.jpg",
      date: 2023,
    },
    {
      title: "vue site",
      subTitle: "project4",
      src: "image04.jpg",
      date: 2023,
    },
  ]
  const [modal, setModal] = useState({ active: false, index: 0 })
  return (
    <main className='main'>
      <seciton id='section1'>
        <h1>Gallery Hover Animation</h1>
      </seciton>
      <seciton id='section2' className='contents'>
        <div className='project__wrap'>
          {texts.map((text, index) => {
            return <Project key={index} index={index} text={text} setModal={setModal} />
          })}
        </div>
        <Modal modal={modal} texts={texts} />
      </seciton>
      <seciton id='section3'></seciton>
    </main>
  )
}

export default App