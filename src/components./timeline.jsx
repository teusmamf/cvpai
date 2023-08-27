import React from "react";
import { timelineData } from "../../public/assets/data";
import { 
    VerticalTimeline, 
    VerticalTimelineElement 
} 
from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView, useSpring } from "react-spring";
import {motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { faBook,faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Timeline(router){


const [ref, inView] = useInView({
    triggerOnce: true,
  });




    return (
        
            <m.div key={router.pathname} initial={{x:"-100%"}} animate={{x:"0%"}} transition={{duration:1.0,ease:"easeInOut"}} exit={{x:"100%"}}>
               <h1 className="history_title">History</h1>
              <VerticalTimeline  animate={true}>
                {
                    timelineData.map(element => {
                      


                      const Animate = useSpring({
                            opacity: inView ? 1 : 0,
                            display:inView ? 'flex' : '',
                            transition: inView? '1.5s':'',
                    });
                       let iconStyle = {background:"#00008B",boxShadow: "0 0 30px 5px white",padding:"20px"}
                       let isworkIcon = element.icon  === "work";    
                       
                        console.log(inView);
                        return(
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.year}
                            dateClassName="date_icon"
                            iconStyle={iconStyle}
                            intersectionObserverProps={Animate}
                            ref={ref}
                            contentStyle={inView ? { boxShadow: "0 0 10px 5px white" } : {}}
                        >
                            <h3 className="vertical_time_line_element_title">{element.title}</h3>

                            <div className="container_education">
                            <FontAwesomeIcon icon={faBriefcase} className="icons"/>
                            <p className="vertical_time_line_element_subtitle">{element.description}</p>
                            </div> 
                            
                        </VerticalTimelineElement>
                        )

                    })
                }
              </VerticalTimeline>
              </m.div>
    )
}