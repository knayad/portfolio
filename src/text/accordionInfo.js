import { Link } from "react-scroll";

const ProgrammingInfo = (
  <p>
    Check out the different programming projects I have done!
    <br />
    <ul>
      <li>
        {" "}
        <a href="hire">
          <Link to="projects">Recent projects</Link>
        </a>
        <p>utilizes Github's API to pull repositories</p>
      </li>
      <li>
        {" "}
        <a
          href="https://knayad.github.io/nadia.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          My first (vanilla) website - NOT UPDATED
        </a>{" "}
        <p>javascript, html, css [raw]</p>
      </li>
      <li>
        {" "}
        <a href="home"> The website you're on</a>{" "}
        <p>react.js, html, css and javascript</p>
      </li>
      <li>
        {" "}
        <a href="home">
          <Link to="spline">3D avatar using Spline</Link>
        </a>{" "}
        <p>Spline is a 3D design tool </p>
      </li>
    </ul>
  </p>
);

const Content = (
  <p>
    <ul>
      <li> SheDev </li>
      <p>YouTube series for to-be developers.</p>
      <li>Catch 22</li>
      <p>
        A (comical) dialogue about shitty things that usually come with a catch.
        <a
          href="https://open.spotify.com/show/6riGUEJhRunKWVWlKeSZTm?si=8f0cb8934a1f4829"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Find it on Spotify.</p>
        </a>
      </p>
    </ul>
  </p>
);

const About = (
  <>
    <p>
      You need to know two things:
      <ol>
        <li>I enjoy learning.</li>
        <li> I'm like a cat on it's fifth life.</li>
      </ol>
      That's why I became interested in software development. You just keep
      learning!
    </p>
    <p>
      <ul>
        <li>
          Some of my interests are listed <a href="about">here.</a>
        </li>
        <li>
          Biased reviews by people I know, can be found{" "}
          <a href="about">
            <Link to="reviews"> here</Link>
          </a>
        </li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </p>
  </>
);

export { ProgrammingInfo, Content, About };
