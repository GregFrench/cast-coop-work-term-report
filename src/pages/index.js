import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Cast Co-op 2021 Work Term Report</title>
      
      <h1 style={headingStyles}>
        Cast Co-op 2021 Work Term Report
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p>Introduction</p>

      <p>Hi, I'm Greg. I'm a Bachelor of Computing co-op student at the University of Guelph currently studying computer science. Over the past Summer and Fall of 2021, I've been working as a co-op student at a social media startup called Cast. The following contains a brief overview of my experience.</p>

      <p>About Cast</p>

      <p>Cast was a social media company founded in 2020 located in the heart of downtown Toronto. It was primarily a mobile application that ran on both Android and iOS. The app's main core concept was built around social voting that allowed people to share their opinions on various topics and have people vote on those topics anonymously. These topics could range anywhere from social issues to politics to sports and even dating. Whatever was on someone's mind, they could ask it and people around the world could vote on it. Since Cast was founded during the Covid-19 pandemic, the company was remote-first by default but had an office downtown Toronto where employees could meet, hang out, and discuss strategy. I ended up visiting the office twice. Once to meet with the engineering team to discuss preliminary plans for the development of Cast V2, a newer and sleeker version of the app, and another to meet with the entire team right before the official launch of V2 at the end of the summer. The company also held two early morning daily standups over Google Meet, one for the engineering team, and one for the marketing team. On top of that, there were also weekly one-on-one meetings with each member of the team, meaning that each person would meet with every other person on the team virtually at least one time per week. This allowed each team member to discuss in-depth details of what they were working on to keep everyone in the loop. Unfortunately, the company folded in November of 2021 due to budgetary reasons and concerns that the app was not growing as fast enough as the founders had hoped.</p>

      <p>Job Description</p>

      <p>I was originally hired on with the company to do software QA. This would entail both manually testing the app as well as writing automated unit tests. The job quickly transitioned into more of a software engineering role as I took on more and more software-related tasks on top of the testing work I was doing at the time. This entailed working on the frontend mobile application using React Native, working on the backend using Node.js in conjunction with both a Postgresql database as well as Google Firestore.</p>

      <p>Goals</p>

      <p>During my time at Cast, I developed 6 learning goals. Goals that I could strive for to help make me a better developer, and a better professional in the software industry. Here is a brief overview of those goals along with my progress in achieving them.</p>

      <p>Write automated unit tests that cover the entire Cast mobile application - the purpose of this goal was to improve my ability to write automated unit tests and gain more experience using frontend unit testing tools such as Jest and React Testing Library. While I wasn’t able to test the entire system due to my role switching more to a software engineering role, I was able to write automated tests for large parts of the application which helped to keep those components of the application consistent and bug-free.</p>

      <p>Achieve expertise in React - React is an incredibly valuable skill to know and since one of the core technologies used at Cast was React Native, I thought it would be worth my time to spend time digging deep into the core features of React to learn as much as possible about the technology. This would not only make me a valuable contributor to the engineering team at Cast but also any future company that I work with that uses React. Overall, I ended up seeing my React skills grow tremendously and were able to obtain a solid grasp of the core concepts. I now feel a lot more comfortable building out apps and features with it.</p>

      <p>Improve my communication skills - The purpose of this goal was to improve the way I communicate technical information to other people. When communicating technical concepts it’s very important to explain them in a way that the other person can understand based on their background and level of understanding. If the other person comes from a non-technical background, it’s important not to use too much unnecessary technical jargon that just ends up confusing them. It’s better to break something down into simpler terms that they can understand. This is certainly a skill that needs to be developed and one that I have felt develop throughout my time at Cast, both through the daily standups every morning, and my one-on-one meetings with coworkers.</p>

      <p>Improve my SQL query skills - This goal was intended to improve my ability to write SQL queries, both in terms of my ability to write high-quality queries in one-shot, but also make them very performant in how they execute when interacting with the database. For example, I went from having limited knowledge of how “join” queries work, to being able to write pretty advanced join queries by the end of my term. This allowed me to take queries that were being split up into chunks, combine them into a single query using joins, thus reducing the latency of the HTTP requests utilizing those requests sometimes by an order of magnitude. I also learned a lot about how databases work under the hood to get a better understanding of what is going on when SQL queries are executed on a system.</p>

      <p>Continue to hone my data structures and algorithms skills - This was one of my favourites. One of my favourite aspects of programming is getting to work with algorithms and data structures. Throughout my term, I was able to work with many algorithms and data structures including but not limited to binary search, depth-first search, heaps, and hash tables. Being able to take theoretical concepts that I’ve learned in school and independently, and be able to apply those concepts to a real-world system to increase efficiency and make the overall system a lot faster was a great feeling and one that excites me going into the future.</p>

      <p>Improve my ability to write clean code - This goal was important as well. Being able to write clean, well-written code that is easy to understand is very important to me. This is also something that will be more and more important as I progress throughout my career. This includes being able to write code for other people and not just yourself so that other people can take your code, build upon it and refactor it. This is an invaluable skill to have and a skill I was able to improve upon during my term. Some examples include writing expressive variable names, writing concise functions that emphasized code-reuse throughout the application and using just the right amount of abstraction when writing components so that these same components could be used elsewhere in the application when the time arose. I look forward to continuing to improve this ability in the future.</p>

      <p>Conclusions</p>

      <p>Acknowledgments</p>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
