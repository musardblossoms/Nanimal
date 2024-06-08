import React from 'react';
import {
  Link,
  Text,
  Font,
  Page,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#112131",
    borderBottomStyle: "solid",
    alignItems: "stretch",
    marginBottom: 10,
  },
  detailColumn: {
    flexDirection: "column",
    flexGrow: 9,
    textTransform: "uppercase",
  },
  name: {
    fontSize: 24,
    fontFamily: "Lato Bold",
  },
  subtitle: {
    fontSize: 10,
    justifySelf: "flex-end",
    fontFamily: "Lato",
  },
  link: {
    fontFamily: "Lato",
    fontSize: 10,
    color: "black",
    textDecoration: "none",
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
});

const Header = () => (
  <View style={headerStyles.container}>
    <View style={headerStyles.detailColumn}>
      <Text style={headerStyles.name}>Nan Wroblewski</Text>
      <Text style={headerStyles.subtitle}>
        +1 (330) 704-0488 |{' '}
        <Link src="mailto:vr000nan@gmail.com">vr000nan@gmail.com</Link> |{' '}
        <Link src="https://nanimal.dev">nanimal.dev</Link> |{' '}
        <Link src="https://www.linkedin.com/in/nan-wroblewski-09547a224/">LinkedIn</Link>
      </Text>
    </View>
  </View>
);

const titleStyles = StyleSheet.create({
  title: {
    fontFamily: "Lato Bold",
    fontSize: 14,
    marginBottom: 8,
    textTransform: "uppercase",
    color: "#20349F",
  },
});

const Title = ({ children }) => (
  <Text style={titleStyles.title}>{children}</Text>
);

const listStyles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
    opacity: 0,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: "Lato",
  },
});

const List = ({ children }) => children;

const Item = ({ children }) => (
  <View style={listStyles.item}>
    <Text style={listStyles.bulletPoint}>•</Text>
    <Text style={listStyles.itemContent}>{children}</Text>
  </View>
);

const skillsStyles = StyleSheet.create({
  title: {
    fontFamily: "Lato Bold",
    fontSize: 11,
    marginBottom: 4,
  },
  skills: {
    fontFamily: "Lato",
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={skillsStyles.title}>{name}</Text>
    <List style="list-style-type: none;">
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = () => (
  <View style={experienceStyles.container}>
    <Title>Skills</Title>
    <Text style={skillsStyles.skills}>
     I'm a Fullstack Developer with 4 years of hands-on experience in MERN and a bunch of other tech stacks. I thrive on effective communication and love collaborating with cross-functional teams, creating an inclusive and collaborative work environment. I'm genuinely excited about bringing my skills and enthusiasm to innovative projects, ready to make a positive impact in the exciting world of web-based software engineering.
    </Text>
    <SkillEntry
      name="Key Skills"
      skills={[
        "MERN (MongoDB, Express, React, Node)",
        "AWS (S3 and Lambda)",
        "OOP Languages and Frameworks (Java, SpringBoot, PHP)",
        "Agile Methodologies",
        "WordPress",
      ]}
    />
  </View>
);

const experienceStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  entryContainer: {
    marginBottom: 6,
  },
  title: {
    fontFamily: "Lato Bold",
    fontSize: 11,
    color: "black",
    textDecoration: "none",
  },
  date: {
    fontSize: 10,
    fontFamily: "Lato Italic",
    marginBottom: 5,
  },
  details: {
    fontSize: 10,
    fontFamily: "Lato",
  },
});

const ExperienceEntry = ({ company, position, date, details }) => (
  <View style={experienceStyles.entryContainer}>
    <Text style={experienceStyles.title}>{company} | {position}</Text>
    <Text style={experienceStyles.date}>{date}</Text>
    <List>
      {details.map((detail, i) => (
        <Item key={i}>{detail}</Item>
      ))}
    </List>
  </View>
);

const Experience = () => (
  <View style={experienceStyles.container}>
    <Title>Professional Experience</Title>
    <ExperienceEntry
      company="Rise Marketing"
      position="UI/UX Developer"
      date="August 2023 - April 2024"
      details={[
        "Developed and maintained responsive and user-friendly websites for a private senior health care company using WordPress, React, JavaScript, and Node.js.",
        "Implemented custom WordPress themes and plugins to meet specific design and functionality requirements, ensuring seamless integration with existing systems.",
        "Utilized React.js to create dynamic user interfaces, enhancing the user experience and engagement on the website.",
        "Leveraged JavaScript and Node.js to build backend functionalities, such as user authentication and data processing, ensuring efficient and secure operations.",
        "Conducted usability testing and gathered feedback to iteratively improve the website's design and functionality, ensuring it meets the needs and preferences of senior users and caregivers.",
        "Optimized website performance for speed and accessibility, implementing best practices in HTML/CSS, JavaScript, and server-side rendering techniques.",
        "Collaborated with cross-functional teams including designers, developers, and stakeholders to translate business requirements into effective website solutions, fostering a collaborative and inclusive work environment.",
      ]}
    />
    <ExperienceEntry
      company="JP Morgan Chase & Co."
      position="Software Engineer 1"
      date="October 2022 - July 2023"
      details={[
        "Developed and maintained scalable and reliable applications for a call center environment using Java, React, TypeScript, SpringBoot, and AWS Lambda.",
        "Implemented backend services and APIs using Java and SpringBoot, ensuring high performance, security, and maintainability of the application.",
        "Utilized React.js and TypeScript to build intuitive and responsive user interfaces, enhancing the user experience for call center agents and supervisors.",
        "Leveraged AWS Lambda functions to implement serverless microservices, enabling efficient and cost-effective execution of business logic and data processing tasks.",
        "Adopted Agile methodology to iteratively deliver features and updates, participating in daily stand-ups, sprint planning, and retrospectives to ensure alignment with project goals and timelines.",
        "Integrated third-party APIs and services to enhance the functionality of the call center application, such as telephony systems and customer relationship management (CRM) platforms.",
        "Implemented automated testing and continuous integration/continuous deployment (CI/CD) pipelines to maintain code quality and streamline the deployment process, ensuring rapid delivery of new features and updates.",
        "Collaborated closely with cross-functional teams including product managers, designers, and QA engineers to translate business requirements into technical solutions, fostering a collaborative and customer-focused development process.",
      ]}
    />
    <ExperienceEntry
      company="Fullstack Academy"
      position="Instructional Associate/Mentor II"
      date="January 2022 - Present"
      details={[
        "Guided multiple cohorts of students through a comprehensive course on fullstack application development, covering key technologies including JavaScript, SQL, Node.js, and React, as well as best practices in software engineering.",
        "Facilitated engaging and interactive classroom sessions, providing clear explanations, hands-on exercises, and real-world examples to reinforce learning objectives and deepen understanding.",
        "Offered personalized support and mentorship to students during office hours, assisting with assignment clarification, debugging code, and addressing any challenges or obstacles they encountered in their learning journey.",
        "Played a pivotal role in the grading process, meticulously evaluating student assignments against grading rubrics and providing constructive feedback to support their growth and development.",
        "Demonstrated a commitment to student success by identifying struggling students early on and proactively offering additional support and resources to help them overcome obstacles and achieve their goals.",
        "Fostered a collaborative and inclusive learning environment, encouraging peer-to-peer collaboration and knowledge sharing among students, and facilitating group projects and coding challenges to reinforce teamwork and communication skills.",
        "Stayed current with industry trends and best practices in fullstack application development, continually updating course materials and instructional approaches to ensure relevance and effectiveness in preparing students for careers in software engineering.",
        "Collaborated closely with fellow instructors and program administrators to enhance the curriculum, develop new instructional materials, and implement improvements based on student feedback and performance data.",
      ]}
    />
  </View>
);

const educationStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontFamily: "Lato Bold",
    fontSize: 11,
  },
  details: {
    fontFamily: "Lato",
    fontSize: 10,
    marginBottom: 8,
  },
});

const Education = () => (
  <View style={educationStyles.container}>
    <Title>Education</Title>
    <Text style={educationStyles.title}>University of North Florida, Jacksonville, FL</Text>
    <Text style={educationStyles.details}>September 2019 - May 2020</Text>
    <Text style={educationStyles.title}>Certificate of Software Engineering and Web Development | Fullstack Academy | December 2021</Text>
    <Text style={educationStyles.details}>AWS Cloud Practitioner Certificate | Amazon Web Services | February 2023</Text>
    <Text style={educationStyles.details}>Credential ID 4P25C0N2T2Q1QW3Y</Text>
    <Text style={educationStyles.title}>Certified Scrum Master | Scrum Alliance | January 2024</Text>
    <Text style={educationStyles.details}><Link src="https://bcert.me/bc/html/show-badge.html?b=jpkeagdo">View Here</Link></Text>
  </View>
);

const resumeStyles = StyleSheet.create({
  page: {
    padding: 30,
  },
});

Font.register({
  family: "Lato",
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});

Font.register({
  family: "Lato Italic",
  src: "https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf",
});

Font.register({
  family: "Lato Bold",
  src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
});

const PDFFile = () => (
  <Document
    author="Nan Wroblewski"
    keywords="resume, software engineer, web developer, frontend dev, backend, junior, entry level, associate, JavaScript, React, Node, SpringBoot, SQL, AWS, Agile"
    subject="Resume"
    title="Nan Wroblewski Resume"
  >
    <Page size="A4" style={resumeStyles.page}>
      <Header />
      <Skills />
      <Experience />
      <Education />
    </Page>
  </Document>
);

export default PDFFile;
