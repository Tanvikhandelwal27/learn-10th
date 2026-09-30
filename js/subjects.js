(function () {
  const { data, breadcrumb, subjectCard } = window.App;
  const subjectList = document.querySelector("#subject-list");
  const homeSubjects = document.querySelector("#home-subjects");
  if (subjectList) {
    document.querySelector("#page-breadcrumb").innerHTML = breadcrumb([{ label: "Subjects" }]);
    subjectList.innerHTML = data.subjects.map(subjectCard).join("");
  }
  if (homeSubjects) homeSubjects.innerHTML = data.subjects.map(subjectCard).join("");
})();