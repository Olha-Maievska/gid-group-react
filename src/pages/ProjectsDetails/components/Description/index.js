import { useParams } from 'react-router-dom'
import { projectsData } from '@data/projectsData'

import './description.scss'

const Description = () => {
  const { id } = useParams()
  
  return (
    <>
      {projectsData.map(item => {
        const { photo, title, complex, square, designer, style, id: itemId} = item
        if (itemId === id) {
          return (
            <div className="description" key={itemId}>
              <div className="description__img">
                <img className="description__img--big" src={photo[0]} alt={title} />
                <div className="description__img-content">
                  <h4 className="description__img-title">{title}</h4>
                  <div className="description__img-subtitle">ЖК - {complex}</div>
                  <div className="description__img-square">{square} м2</div>
                  <div className="description__img-author">Дизайнер -<span> {designer}</span></div>
                </div>
              </div>

              <div className="container">
                <div className="description__content">
                  <div className="description__content-desc">
                  <h5 className="description__content-title">{title}</h5>
                  <div className="description__content-sub">Стиль - {style}</div>
                  <div className="description__content-square">{square} м2</div>
                  </div>
                  <div className="description__content-text">
                    <p>
                      Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений. Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении,
                      допускает внедрение своевременного выполнения сверхзадачи.
                    </p>
                  </div>
                </div>
              </div>

              <div className="description__img__content">
                  <img className="description__img--middle" src={photo[1]} alt={title} />
                  <img className="description__img--middle" src={photo[2]} alt={title} />
              </div>
              <img className="description__img--big" src={photo[3]} alt={title} />

              <div className="container">
                <div className="description__content">
                  <div className="description__content-desc">
                    <h5 className="description__content-title">Современная кухня в лучшем стиле</h5>
                  </div>
                  <div className="description__content-text">
                    <p>
                      Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений. Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи.
                    </p>
                    <p>
                      Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи.
                    </p>
                  </div>
                </div>
              </div>

              <div className="description__img__content">
                <img className="description__img--small" src={photo[4]} alt={title} />
                <img className="description__img--small" src={photo[5]} alt={title} />
                <img className="description__img--small" src={photo[6]} alt={title} />
              </div>

              <img className="description__img--big" src={photo[7]} alt={title} />

              <div className="container">
                <div className="description__content">
                  <div className="description__content-desc">
                    <h5 className="description__content-title">Уютная спальня с личным просторным гардеробом</h5>
                  </div>
                  <div className="description__content-text">
                    <p>
                      Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений. Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении,
                      допускает внедрение своевременного выполнения сверхзадачи.
                    </p>
                    <p>
                      Мы вынуждены отталкиваться от того, что глубокий уровень погружения, в своём классическом представлении, допускает внедрение своевременного выполнения сверхзадачи.
                    </p>
                  </div>
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

export default Description