import skillsFrontendData from "../../data/skilsFrontend.data";
import skillsDesignData from "../../data/skillsDesign.data";
import style from "./AboutMe.module.css";
import { forwardRef } from "react";

const AboutMe = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="aboutMe" className={style.about_me_section}>

      {/* Text about me */}
      <div className={style.about_me_text}>
        <h1>Sobre mi</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          ipsum cum ipsam optio laborum corrupti itaque enim recusandae,
          quaerat, tenetur dolor doloribus dicta labore aperiam culpa distinctio
          rem quasi vel!
        </p>
      </div>
      <div className={style.skills_list_container}>

        {/* List skills development */}
        <ul className={style.list_skills_dev}>
          <li className={style.tag}>&lt;Frontend /&gt;</li>
          {skillsFrontendData.map((skill, key) => (
            <li key={key} className={style.skill_item}>
              <p>{skill.name}</p>
              <img src={skill.icon} alt={skill.name} />
            </li>
          ))}
        </ul>

        {/* List skills graphic design */}
        <ul className={style.list_skills_design}>
          <li className={style.tag}>Diseño gráfico &#x270E;</li>
          {skillsDesignData.map((skill, key) => (
            <li key={key} className={style.skill_item}>
              <p>{skill.name}</p>
              <img src={skill.icon} alt={skill.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
});

export default AboutMe;
