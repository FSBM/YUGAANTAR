import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import CountdownItem from "../../components/CountDown/CountDown";
import EventInfo from "../../components/EventInfo/EventInfo";
import { useCountdownStore } from "../../store/countDown";
import {
  festTitle,
  primeEvent1,
  primeEvent2,
  primeEvent3,
  Correct,
  Code,
  Networking,
  TechTalks,
  BriefCase,
  Participants,
  Trophy,
  X,
  LinkedIn,
  Instagram,
  Youtube,
  Discord,
  Globe,
  Street,
  tech_fest_1,
  tech_fest_2,
  tech_fest_3,
  tech_fest_4,
  tech_fest_5,
  tech_fest_6
} from "../../assets/Images";

import Navbar from "../../components/Navbar/Navbar";

const YugaantarFest: React.FC = () => {
  const { days, hours, minutes, seconds, calculateTimeLeft } =
    useCountdownStore();

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const countdownItems = [
    { value: days.toString(), label: "DAYS" },
    { value: hours.toString(), label: "HOURS" },
    { value: minutes.toString(), label: "MINUTES" },
    { value: seconds.toString(), label: "SECONDS" },
  ];

  const eventItems = [
    { value: "Tech Odyssey", imgUrl: primeEvent1 },
    { value: "Gaming Arena", imgUrl: primeEvent2 },
    { value: "Music Revolution", imgUrl: primeEvent3 },
  ];

  // Event data for different categories
  const eventData = {
    techEvents: [
      { 
        id: 1, 
        title: "Code Quest", 
        image: tech_fest_1,
        description: "Competitive Programming Challenge"
      },
      { 
        id: 2, 
        title: "Tech Odyssey", 
        image: tech_fest_3,
        description: "Innovation & Technology Showcase"
      },
      { 
        id: 3, 
        title: "AI Workshop", 
        image: tech_fest_2,
        description: "Artificial Intelligence Deep Dive"
      },
      { 
        id: 4, 
        title: "Hackathon", 
        image: tech_fest_4,
        description: "24-hour Coding Marathon"
      },
      { 
        id: 5, 
        title: "Web Dev Contest", 
        image: tech_fest_5,
        description: "Frontend & Backend Challenge"
      },
      { 
        id: 6, 
        title: "Machine Learning Workshop", 
        image: tech_fest_6,
        description: "Deep Learning & AI Applications"
      }
    ],
    culturalEvents: [
      { 
        id: 6, 
        title: "Music Revolution", 
        image: primeEvent3,
        description: "Battle of the Bands"
      },
      { 
        id: 7, 
        title: "Dance Battle", 
        image: Street,
        description: "Street & Classical Dance Competition"
      },
      { 
        id: 8, 
        title: "Art Exhibition", 
        image: TechTalks,
        description: "Digital & Traditional Art Showcase"
      },
      { 
        id: 9, 
        title: "Drama Competition", 
        image: Networking,
        description: "Stage Performance Challenge"
      },
      { 
        id: 10, 
        title: "Poetry Slam", 
        image: Globe,
        description: "Creative Writing & Performance"
      }
    ],
    proShows: [
      { 
        id: 11, 
        title: "Gaming Arena", 
        image: primeEvent2,
        description: "Professional Gaming Tournament"
      },
      { 
        id: 12, 
        title: "Celebrity Talk", 
        image: TechTalks,
        description: "Industry Expert Sessions"
      },
      { 
        id: 13, 
        title: "Concert Night", 
        image: primeEvent3,
        description: "Live Music Performance"
      },
      { 
        id: 14, 
        title: "Stand-up Comedy", 
        image: Street,
        description: "Professional Comedy Show"
      },
      { 
        id: 15, 
        title: "Fashion Show", 
        image: Globe,
        description: "Designer Fashion Showcase"
      }
    ]
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentEvents, setCurrentEvents] = useState(eventData.techEvents);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
    
    // Update events based on selected category
    switch(index) {
      case 0:
        setCurrentEvents(eventData.techEvents);
        break;
      case 1:
        setCurrentEvents(eventData.culturalEvents);
        break;
      case 2:
        setCurrentEvents(eventData.proShows);
        break;
      default:
        setCurrentEvents(eventData.techEvents);
    }
  };

  return (
    <>
      {/* <div className={styles.background}>
        <img className={styles.blue_gradient} src="./Ellipse.svg" alt="" />
      </div> */}
      <main className={`${styles.landingPage} ${styles.background}`}>
        <Navbar />
        <div className={styles.container}>
          <img src={festTitle} className={styles.festName} />
          <h1 className={styles.festTitle}>
            <span>CHANGE OF ERA</span>
          </h1>
          <p className={styles.festDescription}>
            Scaler School of Technology's premier Technology and Cultural Festival with live events, exciting prize pools and networking opportunities with top industry professionals.
          </p>
          <section className={styles.eventInfo}>
            <EventInfo
              iconSrc="./Calendar.svg"
              text="November 28, 2025"
              alt="Calendar icon"
            />
            <EventInfo
              iconSrc="./MapPin.svg"
              text="SST Campus, Electronic City"
              alt="Location icon"
            />
          </section>
          <div className={styles.actionButtons}>
            <button className={styles.primaryButton}>Register Now</button>
          </div>

          <section className={styles.countdown}>
            {countdownItems.map((item, index) => (
              <CountdownItem
                key={index}
                value={item.value}
                label={item.label}
              />
            ))}
          </section>
        </div>
        <section className={styles.eventsHeader}>
          <h6>EXPERIENCE THE</h6>
          <img src={Street} alt="Street" />
        </section>

        <section className={styles.events_display}>
          <div className={styles.events_list_box}>
            {eventItems.map((item, index) => (
              <div key={index} className={styles.primeEvents}>
                <img src={item.imgUrl} alt={item.value} />
                <span>{item.value}</span>
              </div>
            ))}
          </div>


          <div className={styles.event_category_buttons}>
            <div
              className={styles.moving_background}
              style={{ transform: `translateX(${activeIndex * 107.5}%)` }}
            ></div>
            <button 
              onClick={() => handleButtonClick(0)}
              className={activeIndex === 0 ? styles.active : ''}
            >
              Tech Events
            </button>
            <button 
              onClick={() => handleButtonClick(1)}
              className={activeIndex === 1 ? styles.active : ''}
            >
              Cultural Events
            </button>
            <button 
              onClick={() => handleButtonClick(2)}
              className={activeIndex === 2 ? styles.active : ''}
            >
              Pro Shows
            </button>
          </div>

          <div className={styles.eventCards} key={activeIndex}>
            <div className={styles.endCards}>
              <div 
                className={styles.eventCard}
                style={{ 
                  backgroundImage: `url(${currentEvents[0]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>
              <div 
                className={styles.eventCard}
                style={{ 
                  backgroundImage: `url(${currentEvents[1]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>
            </div>
            <div className={styles.middleCards}>
              <div 
                className={styles.eventCard}
                style={{ 
                  backgroundImage: `url(${currentEvents[2]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>
              <div 
                className={styles.eventCard}
                style={{ 
                  backgroundImage: `url(${currentEvents[3]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>
            </div>
            <div className={styles.frontCards}>
              <div 
                className={styles.eventCard}
                style={{ 
                  backgroundImage: `url(${currentEvents[4]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>
            </div>
          </div>
        </section>

        <section className={styles.whyToJoinUs}>
          <div>
            <h1>Why to Join us?</h1>
            <span>
              We have a fantastic lineup of speakers and sessions for you to
              learn and enhance your skills.
            </span>
            <div className={styles.whyCards}>
              <div>
                <img src={TechTalks} alt="Tech Talks" />
                <h2>Tech Talks</h2>
                <span>
                  Several speakers are coming together to talk about their
                  experiences in the industry. We will also have a few lightning
                  talks with our members.
                </span>
              </div>
              <div>
                <img src={Correct} alt="Correct" />
                <h2>Top Industry Professionals</h2>
                <span>
                  Experts from the industry will be on hand to answer your
                  questions and give you advice on how to get int the industry.
                </span>
              </div>
              <div>
                <img src={Networking} alt="Networking" />
                <h2>Networking</h2>
                <span>
                  You will have the opportunity to network with other students
                  and professionals in the industry. Meet and connect with your
                  peers as well as industry professionals who can help you get
                  your foot in the door.
                </span>
              </div>
              <div>
                <img src={Code} alt="Code" />
                <h2>Hackathons and Competitions</h2>
                <span>
                  We will be hosting a series of hackathons and competitive
                  programming competitions with exciting rewards and cash
                  prizes. Our members will also give a few lightning talks.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.festiveHighlights}>
          <h1>Festive Highlights</h1>
          <div>
            <div>
              <img src={Participants} alt="Participants" />
              <span>1000+</span>
              <p>Participants</p>
            </div>
            <div>
              <img src={Trophy} alt="Trophy" />
              <span>20+</span>
              <p>Events</p>
            </div>
            <div>
              <img src={BriefCase} alt="BriefCase" />
              <span>3+</span>
              <p>Days of Fun</p>
            </div>
          </div>
        </section>

        <footer>
          <div>
            <div className={styles.footerTitle}>Connect with us</div>
            <div className={styles.socialIcons}>
              <img src={X} alt="X" onClick={
                () => window.open('https://x.com/Scaler_SST', '_blank')
              }/>
              <img src={LinkedIn} alt="LinkedIn" onClick={
                () => window.open('https://www.linkedin.com/in/yugaantar-sst/', '_blank')
              }/>
              <img src={Instagram} alt="Instagram" onClick={
                () => window.open('https://www.instagram.com/yugaantar.sst', '_blank')
              }/>
              <img src={Youtube} alt="Youtube" onClick={
                () => window.open('https://www.youtube.com/@ScalerSchoolOfTechnology', '_blank')
              }/>
              <img src={Discord} alt="Discord" />
            </div>
            <div className={styles.copyright}>© 2024 Yugantar Fest. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default YugaantarFest;
