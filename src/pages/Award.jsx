import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Junior FrontEnd Devloper
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Кандидат Мастера Спорта по боксу
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Победа на соревнованиях по боксу в категории до 79кг в 2020
                году.
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Участие и успехи в хакатонах и конкурсах Makers
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Award;
