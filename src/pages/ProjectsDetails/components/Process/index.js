import { useParams } from 'react-router-dom'
import { projectsData } from '@data/projectsData'
import { processData } from '@data/processData'
import ProcessMessage from './ProcessMessage'
import ProcessChoice from './ProcessChoice'
import viewProcess1 from './images/view-process1.jpg'
import viewProcess2 from './images/view-process2.jpg'
import work1 from './images/work1.jpg'
import work2 from './images/work2.jpg'

import './process.scss'

const Process = () => {
  const { id } = useParams()

  return (
    <>
      {projectsData.map(item => {
        if (id === item.id) {
          return (
            <div className="process" key={item.id}>
              <div className="container">
                <div className="process__inner">
                  <ProcessChoice {...processData[0]} style={item.style} />
                  <ProcessMessage author={processData[0].customer} text={processData[0].textCustomer} />
                </div>
            
                <div className="process__images">
                  <img className="process__img" src={viewProcess1} alt="" />
                  <img className="process__img--small" src={viewProcess2} alt={item.title} />
                </div>

                <div className="process__inner">
                  <ProcessChoice {...processData[1]} style={item.style} />
                  <ProcessMessage author={processData[1].customer} text={processData[1].textCustomer} />
                  <ProcessMessage author={processData[1].executor} text={processData[1].textExecutor} darkFone='process__message-dark' />
                </div>

                <div className="process__images">
                  <img className="process__img--middle" src={item.photo[4]} alt={item.title} />
                  <img className="process__img--middle" src={item.photo[5]} alt={item.title} />
                  <img className="process__img--middle" src={item.photo[7]} alt={item.title} />
                </div>

                <img className="process__img--big" src={item.photo[0]} alt={item.title} />

                <div className="process__inner">
                  <ProcessChoice {...processData[2]} style={item.style} />
                  <ProcessMessage author={processData[2].customer} text={processData[2].textCustomer} />
                  <ProcessMessage author={processData[2].executor} text={processData[2].textExecutor} darkFone='process__message-dark' />
                </div>

                <div className="process__images">
                  <img className="process__work" src={work1} alt={item.title} />
                  <img className="process__work" src={work2} alt={item.title} />
                </div>

                <div className="process__inner">
                  <ProcessChoice {...processData[3]} style={item.style} />
                  <ProcessMessage author={processData[3].customer} text={processData[3].textCustomer} />
                  <ProcessMessage author={processData[3].executor} text={processData[3].textExecutor} darkFone='process__message-dark' />
                </div>

                <div className="process__images">
                  <img className="process__work" src={item.photo[1]} alt={item.title} />
                  <img className="process__work" src={item.photo[2]} alt={item.title} />
                </div>
                <img className="process__img--big" src={item.photo[3]} alt={item.title} />

                <div className="process__inner">
                  <ProcessChoice {...processData[4]} style={item.style} />
                  <ProcessMessage author={processData[4].customer} text={processData[4].textCustomer} />
                  <ProcessMessage author={processData[4].executor} text={processData[4].textExecutor} darkFone='process__message-dark' />
                </div>
              </div>
            </div>
          )
        } else {
          return null
        }
      })}
    </>
  )
}

export default Process