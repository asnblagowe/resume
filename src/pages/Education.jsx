import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />

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
      </div>
    </>
  );
};

export default Education;
