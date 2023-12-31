/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { AllContainer, AllContent, Cubo } from './styles'
import { ButtonAlt } from '../../../styles/styles'
import { AiOutlineAppstore } from 'react-icons/ai'

interface AllContent {
  title: string
}

export function AllProjects({ title }: AllContent ) {
  return (
    <>
      <AllContainer>
        <h4>{title}</h4>
        <AllContent>
          <Link href={'/projects'}>
            <ButtonAlt>
                Projetos <AiOutlineAppstore size={20} />
            </ButtonAlt>
          </Link>

          <Cubo>
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <img src="/skills/php.svg" alt="Html" />
                </div>
                <div className="face2">
                  <img src="/skills/react.svg" alt="React JS" />
                </div>
                <div className="face3">
                  <img src="/skills/javascript.svg" alt="JavaScript" />
                </div>
                <div className="face4">
                  <img src="/skills/laravel.svg" alt="TypeScript" />
                </div>
                <div className="face5">
                  <img src="/skills/docker.svg" alt="Css" />
                </div>
                <div className="face6">
                  <img src="/skills/linux.svg" alt="Next JS" />
                </div>
              </div>
            </div>
          </Cubo>
        </AllContent>
      </AllContainer>
    </>
  )
}
