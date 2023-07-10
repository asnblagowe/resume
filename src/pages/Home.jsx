import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Masirbaev
              <span class="text-primary">Mukhamedin</span>
            </h1>
            <div class="subheading mb-5">+996 507 250 764</div>
            <p class="lead mb-5">
              Я молодой и амбициозный джуниор фронтэнд разработчик с огромным
              интересом к созданию интерактивных и эстетически привлекательных
              веб-приложений. Обладаю основными навыками веб-разработки, включая
              владение языками HTML, CSS, JavaScript и React . Я стремлюсь
              постоянно улучшать свои навыки и расширять свои знания в области
              фронтэнд разработки.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="#!">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/asnblagowe">
                <i class="fab fa-github"></i>
              </a>
              <a
                class="social-icon"
                href="https://twitter.com/m_masirbaev?s=21&t=d6-CZJx8Rvua4HeRqfejyQ"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                class="social-icon"
                href="https://www.facebook.com/profile.php?id=100023712773494"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                class="social-icon"
                href="https://instagram.com/blago_mukha?igshid=MzRlODBiNWFlZA=="
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0"> High School 152 "ГБОУ СОШ"</h3>
                <div class="subheading mb-3">Mathematical bias</div>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2010 - May 2021</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">kyrgyzstnan International University</h3>
                <div class="subheading mb-3">Business and diplomacy</div>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2021 - May 2023</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>

              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Любовь к активным видам отдыха на открытом воздухе, таким как
              велосипедные прогулки. Активное занятие бегом, участие в марафонах
              и занятие призовых мест. Люблю проводить время с друзьями,
              особенно если включены активные виды отдыха или совместные
              тренировки.
            </p>
            <p class="mb-0">
              Коммуникативные навыки и способность работать в команде. Умение
              находить баланс между профессиональной деятельностью и активным
              образом жизни. Стремление к самосовершенствованию и изучению новых
              технологий в веб-разработке и спорте.
            </p>
          </div>
        </section>
        <hr class="m-0" />

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

export default Home;
