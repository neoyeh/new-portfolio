'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchData } from '../features/data/dataSlice';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const gitlinkbuild = (data: string | string[] | null | undefined ) => {
  if (!data) return null;

  if (Array.isArray(data) && data.length) {
    return data.map((link, index) => (
      <a
        href={link}
        key={index}
        className="
          flex flex-end text-text-info transition-colors duration-[250ms]
          hover:text-text-default"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} fixedWidth className="text-[20px]" />
      </a>
    ));
  }

  if (typeof data === "string") {
    return (
      <a
        href={data}
        className="
          flex flex-end text-text-info transition-colors duration-[250ms]
          hover:text-text-default
        "
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} fixedWidth className="text-[20px]" />
      </a>
    );
  }

  return null;
};

export default function Home() {
  const dispatch = useAppDispatch();
  const { projects } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="
      flex flex-wrap w-full pr-[25px]
      md:pr-0 
    ">
      {projects.map((item) => (
        <div key={item.years} className="
        flex flex-nowrap relative w-full
        ">
          <div className="
            font-bigShoulders
            sticky top-0 flex flex-none items-center z-10 w-[45px] h-[185px] pt-[40px] pb-[20px] text-[24px]
            md:pt-[12px] md:pb-0
          ">{item.years}</div>
            <div className="
              flex flex-wrap flex-[1_1_auto] gap-[15px]
              md:gap-0
            ">
              {item.protfolio_list
                .filter((card) => !card.hidden)
                .map((card) => (
                  <div key={card.project_name} className="
                    protfolio-card
                    flex flex-wrap flex-none mb-[15px]
                    md:mb-0 
                  ">
                    <div className="protfolio-card-padding relative w-full">
                      <div className="
                        relative w-full h-full flex flex-wrap flex-col
                      ">
                        <div className="image-block">
                          <LazyLoadImage
                            width="720"
                            height="480"
                            src={`https://neoyeh.github.io/neo-portfolio/dist/${card.image}`} 
                            alt={card.project_name}
                          />
                        </div>
                        <div className="w-full flex flex-wrap p-[20px_15px_50px] items-start flex-[1_1_auto]">
                          <div className="w-full">
                            <div className="text-text-dafault text-base leading-relaxed font-medium pb-[4px]">{card.project_name}</div>
                            {card.text && 
                              <div 
                                className="text-text-info text-sm leading-relaxed font-medium "
                                dangerouslySetInnerHTML={{__html: card.text}}
                              />}
                          </div>
                          {(card.link_live || card.link_github) && (
                            <div className="
                              flex w-full pt-[15px] gap-[12px]
                            ">
                              {card.link_live && (
                                <a
                                  href={card.link_live}
                                  className="
                                    flex flex-end text-text-info transition-colors duration-[250ms]
                                    hover:text-text-default
                                  "
                                  target="_blank"
                                  rel="nofollow noopener noreferrer"
                                >
                                  <FontAwesomeIcon icon={faDesktop} fixedWidth className="
                                    text-[20px]
                                  " />
                                </a>
                              )}
                              {gitlinkbuild(card.link_github)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
      ))}
    </div>
  );
};