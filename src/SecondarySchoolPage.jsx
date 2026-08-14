import React, { useEffect, useState } from 'react';
import './SecondarySchoolPage.css';

const A = '/assets/';

const programs = [
  {
    title: 'Junior Secondary',
    copy: 'A strong transition into deeper study habits, literacy, numeracy, sciences, and responsible independence.',
    image: `${A}straitgate-high-school1.jpg`,
  },
  {
    title: 'Senior Secondary',
    copy: 'Focused academic pathways, examination preparation, mentoring, and practical learning for confident readiness.',
    image: `${A}straitgate-high-school6.jpg`,
  },
  {
    title: 'Boarding School',
    copy: 'Comfortable boarding accommodation with supervised routines, guided prep, meals, worship, recreation, and pastoral care.',
    image: `${A}college-academic-journey.jpg`,
  },
];

const services = [
  {
    title: 'Visit School',
    copy: 'Families can arrange a tour of Straitgate High School or Straitgate College.',
    image: `${A}flaticon/visit-school-white.png`,
  },
  {
    title: 'Student Care',
    copy: 'Pastoral care, guidance, discipline, mentoring, and daily support for every learner.',
    image: `${A}flaticon/student-care-white.png`,
  },
  {
    title: 'Admissions',
    copy: 'Start the process for High School or College and our team will guide the next steps.',
    image: `${A}flaticon/admissions-white.png`,
  },
];

// const news = [
//   {
//     title: 'Science and innovation projects',
//     date: 'Aug 11',
//     meta: 'Student Discovery',
//     image: `${A}home-news.jpg`,
//   },
//   {
//     title: 'Sports, discipline, and teamwork',
//     date: 'Aug 11',
//     meta: 'Campus Life',
//     image: `${A}home-football-academy.jpg`,
//   },
//   {
//     title: 'Creative arts and confident expression',
//     date: 'Aug 11',
//     meta: 'Co-curricular',
//     image: `${A}home-creative-arts-club.jpg`,
//   },
// ];

const events = [
  { day: '14', month: 'Sep', title: 'Secondary School Open Day', time: '10:00 am - 1:00 pm' },
  { day: '21', month: 'Sep', title: 'College Boarding Information Session', time: '11:00 am - 12:30 pm' },
  { day: '05', month: 'Oct', title: 'STEM, Arts and Leadership Showcase', time: '9:00 am - 2:00 pm' },
];

const classes = [
  { title: 'STEM Program', teacher: 'Science Faculty', grade: 'JSS - SS', image: `${A}home-stem-club.jpg` },
  { title: 'Language & Literacy', teacher: 'English Faculty', grade: 'JSS - SS', image: `${A}home-press-club.jpg` },
  { title: 'Music & Performing Arts', teacher: 'Arts Faculty', grade: 'JSS - SS', image: `${A}home-music-performing-arts.jpg` },
];

const teachers = [
  { name: 'Dr. Caroline Alao', role: 'Head of High School', image: `${A}high-school-head.jpg` },
  { name: 'Mr. Joseph Oyegbile', role: 'Head of College', image: `${A}schead.jpg` },
];

const gallery = [
  `${A}straitgate-high-school.jpg`,
  `${A}straitgate-high-school2.jpg`,
  `${A}straitgate-high-school4.jpg`,
  `${A}college-campus-drive.jpg`,
  `${A}college-academic-journey.jpg`,
  `${A}home-stem-club.jpg`,
];

const headMessages = [
  {
    quote: 'Every student is at the heart of our college community.',
    body: 'Straitgate College is a student-centred community where learners are known, supported, and challenged to grow in faith, character, academics, creativity, and leadership. With modern resources, digital learning, laboratories, and dedicated faculty, students are prepared to thrive spiritually, socially, and academically.',
    name: 'Head of School',
    school: 'Straitgate College',
  },
  {
    quote: 'Every student is at the heart of our high school community.',
    body: 'Straitgate High School provides a world-class, Christ-centred education that builds academic excellence, critical thinking, creativity, empathy, and responsibility. Through strong teaching, modern resources, personalized learning, and rich extracurricular opportunities, students are prepared for higher education, careers, and purposeful service.',
    name: 'Head of School',
    school: 'Straitgate High School',
  },
];

function SectionTitle({ image, children, align = 'left' }) {
  return (
    <div className={`sectionTitle ${align === 'center' ? 'center' : ''}`}>
      <img src={image} alt="" />
      <h2>{children}</h2>
    </div>
  );
}

function HeadMessage({ message, className = '' }) {
  return (
    <div className={`messageBody ${className}`}>
      <h2>Message from Head of School</h2>
      <blockquote>"{message.quote}"</blockquote>
      <p>{message.body}</p>
      <cite>
        <strong>{message.name}</strong>
        <span>{message.school}</span>
      </cite>
    </div>
  );
}

export default function SecondarySchoolPage() {
  const [activeMessage, setActiveMessage] = useState(0);
  const [exitingMessage, setExitingMessage] = useState(null);
  const [isMessageChanging, setIsMessageChanging] = useState(false);
  const currentMessage = headMessages[activeMessage];

  const changeMessage = (direction) => {
    if (isMessageChanging) return;

    setExitingMessage(currentMessage);
    setIsMessageChanging(true);
    setActiveMessage((index) => {
      const nextIndex = (index + direction + headMessages.length) % headMessages.length;
      return nextIndex;
    });

    window.setTimeout(() => {
      setExitingMessage(null);
      setIsMessageChanging(false);
    }, 700);
  };

  const showPreviousMessage = () => {
    changeMessage(-1);
  };

  const showNextMessage = () => {
    changeMessage(1);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      changeMessage(1);
    }, 10000);

    return () => window.clearInterval(timer);
  }, [activeMessage, isMessageChanging]);

  return (
    <>
      <main id="top">
        <div className="utilityBar">
          <div className="shell utilityInner">
            <span>contact@straitgateschools.com</span>
            <span>+234 802 995 7378</span>
            <div className="utilitySocial" aria-label="Social links"><a href="#footer">f</a><a href="#footer">in</a><a href="#footer">ig</a></div>
            <a className="supportLink" href="#admissions">Admissions</a>
          </div>
        </div>
        <header className="siteHeader">
          <div className="shell navInner">
            <a className="brand" href="#top" aria-label="Straitgate Secondary School">Straitgate</a>
            <nav aria-label="Main navigation">
              <a href="#top">Home</a><a href="#about">About Us</a><a href="#admissions">Admissions</a><a href="#classes">Academics</a><a href="#school-life">School Life</a><a href="#footer">Contact</a>
            </nav>
            <button className="menuButton" aria-label="Open menu">Menu</button>
          </div>
        </header>
        <section className="hero">
          <img src={`${A}high-school-campus-drive.jpg`} alt="Straitgate secondary school campus" />
          <div className="heroShade" />
          <div className="heroInner">
            <h2>Straitgate</h2>
            <h1>Secondary <span>School</span></h1>
            <p>Take a tour of Straitgate and discover a secondary school community shaped by faith, academics, leadership, and care.</p>
            <a href="#tour">Take A Tour</a>
          </div>
        </section>

        <section className="programCards" id="tour">
          <div className="shell threeCards">
            {programs.map((program) => (
              <article key={program.title}>
                <img src={program.image} alt={program.title} />
                <div>
                  <h3>{program.title}</h3>
                  <p>{program.copy}</p>
                  <a href="#classes">Learn More</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="shell aboutInner">
            <div className="aboutTitle">
              <h2>About Our School</h2>
              <div className="aboutStats" aria-label="School highlights">
                <div>
                  <strong>High School</strong>
                  <span>Junior to senior secondary learning pathway</span>
                </div>
                <div>
                  <strong>College</strong>
                  <span>Focused preparation for examinations and life after school</span>
                </div>
                <div>
                  <strong>Boarding</strong>
                  <span>Structured accommodation, supervision, and pastoral support</span>
                </div>
              </div>
            </div>
            <div className="aboutText">
              <p className="large">
                Straitgate Secondary School brings High School and College into one clear journey:
                learners are known personally, challenged academically, and formed spiritually.
              </p>
              <p>
                We help students build disciplined study habits, confident communication, practical
                problem-solving, service, creativity, and leadership. Across Magodo and Magboro, the
                experience remains rooted in excellence, care, and Christ-centered character.
              </p>
            </div>
          </div>
        </section>

        <section className="services" id="school-life">
          <div className="shell serviceGrid">
            {services.map((service) => (
              <article key={service.title}>
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <a href="#footer">Read More</a>
              </article>
            ))}
          </div>
        </section>

        {/* <section className="newsEvents">
          <div className="shell newsEventsGrid">
            <div>
              <SectionTitle image={`${A}home-news.jpg`}>News & Updates</SectionTitle>
              <div className="newsList">
                {news.map((item) => (
                  <article key={item.title}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <p>{item.date} / {item.meta}</p>
                      <h3>{item.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <aside className="events">
              <h2>Upcoming Events</h2>
              {events.map((event) => (
                <article key={event.title}>
                  <div className="dateBox">
                    <strong>{event.day}</strong>
                    <span>{event.month}</span>
                  </div>
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.time} / Straitgate Campus</p>
                  </div>
                </article>
              ))}
              <a className="outlineBtn" href="#footer">View All Events</a>
            </aside>
          </div>
        </section> */}

        <section className="classes" id="classes">
          <div className="shell">
            <SectionTitle image={`${A}flaticon/online-class-blue.png`} align="center">Our Classes</SectionTitle>
            <div className="classGrid">
              {classes.map((item) => (
                <article key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Teacher : {item.teacher}</p>
                    <p>Grade : {item.grade}</p>
                    <a href="#footer">Read More</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="teachers">
          <div className="shell">
            <SectionTitle image={`${A}flaticon/campus-blue.png`} align="center">School Heads</SectionTitle>
            <div className="teacherGrid">
              {teachers.map((teacher) => (
                <article key={teacher.name}>
                  <img src={teacher.image} alt={teacher.name} />
                  <h3>{teacher.name}</h3>
                  <p>{teacher.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial" aria-live="polite">
          <div className="shell testimonialInner">
            <div className="messageControls">
              <button type="button" onClick={showPreviousMessage} aria-label="Show previous head of school message">
                <span aria-hidden="true">&larr;</span>
              </button>
              <button type="button" onClick={showNextMessage} aria-label="Show next head of school message">
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
            <div className="messageStage">
              {exitingMessage && <HeadMessage message={exitingMessage} className="isExiting" />}
              <HeadMessage key={currentMessage.school} message={currentMessage} className="isEntering" />
            </div>
          </div>
        </section>

        <section className="imageStrip">
          {gallery.map((image) => (
            <img key={image} src={image} alt="Straitgate school life" />
          ))}
        </section>

        <footer className="footer" id="footer">
          <div className="shell footerGrid">
            <div>
              <div className="footerBrand">Straitgate</div>
              <p>14 Robert Street, Magodo, Lagos</p>
              <p>Road D, Forthright Gardens Estate, Magboro, Ogun State</p>
            </div>
            <div>
              <h3>Our Campus</h3>
              <p>High School</p>
              <p>College</p>
              <p>Student Life</p>
            </div>
            <div>
              <h3>Academics</h3>
              <p>Junior Secondary</p>
              <p>Senior Secondary</p>
              <p>STEM & Arts</p>
            </div>
            <div>
              <h3>Admissions</h3>
              <a href="https://sghs.educare.school/admission-form" target="_blank" rel="noreferrer">Apply to High School</a>
              <a href="https://sgc.educare.school/admission-form" target="_blank" rel="noreferrer">Apply to College</a>
            </div>
            <div className="iconCredits">
              <h3>Icon Credits</h3>
              <a href="https://www.flaticon.com/free-icons/school" target="_blank" rel="noreferrer">School icons created by Magnific - Flaticon</a>
              <a href="https://www.flaticon.com/free-icons/health" target="_blank" rel="noreferrer">Health icons created by Magnific - Flaticon</a>
              <a href="https://www.flaticon.com/free-icons/admission" target="_blank" rel="noreferrer">Admission icons created by Three musketeers - Flaticon</a>
              <a href="https://www.flaticon.com/free-icons/online-class" target="_blank" rel="noreferrer">Online class icons created by Magnific - Flaticon</a>
              <a href="https://www.flaticon.com/free-icons/campus" target="_blank" rel="noreferrer">Campus icons created by prinda895 - Flaticon</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
