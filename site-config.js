/* GE3791 site settings. EACH NEW COHORT: edit only this file (see README.md). */
window.SITE = {
  siteUrl: "https://karthi21c.github.io/GE3791-HVE/",
  cohort: "2026–27",
  examDate: "2026-11-18",          // yyyy-mm-dd
  examLabel: "18 November 2026",
  examSession: "FN",
  updated: "10 Nov 2026",
  analytics: {                     // anonymous usage counting; leave blank to switch off
    endpoint: "https://script.google.com/macros/s/AKfycbx_z1HNnk7TNlydstY3ZV54H9-Et5BqhD4vHFDTIJULgHJoA9qQdqnFmaUv-VDqZLOvdw/exec",                  // the same web app URL used in agent.html
    goatcounter: "karthi21c",               // optional: your GoatCounter code, e.g. "ge3791-kcet"
    showCounter: true,             // show "N learners have used this site" on the home page
    counterMin: 25                 // show it only after this many devices
  },
  pattern: [
    ["Time and marks", "3 hours, 100 marks, answer all questions."],
    ["Part A", "10 questions × 2 marks = 20. Two from each unit, in unit order (Q1–2 Unit I, Q3–4 Unit II, Q5–6 Unit III, Q7–8 Unit IV, Q9–10 Unit V)."],
    ["Part B", "5 questions × 13 marks = 65. One either/or question per unit, in unit order (Q11 Unit I … Q15 Unit V). Both choices come from the same unit."],
    ["Part C", "1 question × 15 marks, either/or. It has been a unit essay (Apr 2025, 2026), a long cross-unit question (2024) or a three-part case of 5 marks each (Nov 2025). Unit IV (gender and social discrimination) came in Part C in three of the four papers. Prepare all five units."]
  ]
};
