import React from "react";
import Header from "../components/Header";

const Interest = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
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
      </div>
    </>
  );
};

export default Interest;
