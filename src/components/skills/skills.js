const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="content">
        <div className="title">
          <span>My Skills</span>
        </div>
        <div className="skills-details">
          <div className="text">
            <div className="topic">Skill Reflects Our Knowledge</div>
            <p>
              I possess strong web development skills, including expertise in
              HTML, CSS, and JavaScript for creating visually appealing and
              responsive front-end designs. Additionally, I have experience with
              PHP for backend development and MySQL for managing databases,
              allowing me to create full-stack web solutions.
            </p>
            <div className="experience">
              <div className="num">3</div>
              <div className="exp">
                Years Of <br />
                Experience
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="box">
              <div className="topic">HTML</div>
              <div className="per">90%</div>
            </div>
            <div className="box">
              <div className="topic">CSS</div>
              <div className="per">75%</div>
            </div>
            <div className="box">
              <div className="topic">JavaScript</div>
              <div className="per">85%</div>
            </div>
            <div className="box">
              <div className="topic">PHP</div>
              <div className="per">60%</div>
            </div>
            <div className="box">
              <div className="topic">C#</div>
              <div className="per">60%</div>
            </div>
            <div className="box">
              <div className="topic">PYTHON</div>
              <div className="per">80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
