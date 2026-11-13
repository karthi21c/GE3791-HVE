# GE3791 Human Values and Ethics: course site

Live at https://karthi21c.github.io/GE3791-HVE/

## Files
| File | Purpose |
|---|---|
| `index.html` | Course page: overview, resources, 35-period schedule, assessment, exam banner |
| `revision.html` | Exam revision: 3-day plan, paper pattern, unit tabs, previous-paper questions |
| `site-config.js` | **Cohort settings**: exam date, session, "last updated", paper pattern |
| `past-papers.js` | **Previous papers** and the "topics that came back" list |
| `key-answers.js` | **Model-answer outlines** for the most repeated questions (the "Top repeated" tab) |
| `materials.js` | **Drive links** to class slides and handouts for each unit tab (view-only files in Google Drive) |
| `key-answers-ta.js` | Tamil gist for the Top repeated answers (same order as `key-answers.js`) |
| `practice.html`, `practice-data.js` | 25-question practice quiz and its questions |
| `quiz.html`, `simulation.html`, `agent.html` | Practice tools |
| `style.css`, `assets/` | Look and logo |

## Each new cohort (about 30 minutes)
1. **Settings**: open `site-config.js`. Change `cohort`, `examDate` (yyyy-mm-dd), `examLabel`, `examSession`, `updated`. The banners, the exam row in the assessment table and the countdown all update by themselves.
2. **New paper**: when the university paper is out, open `past-papers.js`, copy the last block in `PAPERS`, change the name and code, and type in the questions. Set `u` to the unit number(s). Then update the `REPEATS` list at the bottom, and review `key-answers.js` so the outlines still match what the papers ask.
3. **Schedule**: the 35-period schedule in `index.html` and the assignment dates are fixed to the 2026 calendar. For a new cohort, regenerate them from the course-plan workbook with the new start date and holidays, and replace the schedule rows. Also change "Teaching dates", the assessment weeks and the "Set on" dates.
4. **Agent**: in the CA Register, clear last year's rows in `Agent_Tasks`, `Agent_PINs` and `Agent_Log`, update `Agent_FAQ`, then run Class agent > Make student PINs. Use a fresh roster and Attendance sheet for the new class.
5. **Check**: open the site on a phone. Test the exam banner, the revision tabs, the quiz and the agent.

## If a change does not show
GitHub Pages can take a few minutes, and phones keep old copies. When you change a `.js` file, also change the `?v=` number after its name in `revision.html`, `practice.html` and `index.html` (for example `v=20261111`), then refresh.

## Rules
- Keep question papers, PDFs and slides in Google Drive as view-only. Do not put downloadable files in this repository (it is public).
- Do not reproduce copyrighted textbooks. Use your own notes and summaries.
- Syllabus changes (a new regulation): update the unit text in `index.html` and the `U` array inside `revision.html`.

## Added in round 4
- key-answers-map.js: the 13-mark answer map (suggested mark split, opening line, common mistake) for each repeated topic, same order as key-answers.js. Review it each year.
- Listen buttons on the Top repeated tab use the phone's own text-to-speech. Tamil needs a Tamil voice installed on the phone; if it is missing, the page says so.
- materials.js now lists one Drive folder per unit. Keep each folder shared "Anyone with the link: Viewer" and switch off download on the files. Files can still be listed by name under `files`.
- When you change any data file, change the `?v=` string in the script tags so phones fetch the new copy.

## Added in round 5: banner and visitor counting
- kcet-banner.jpg is the college letterhead, shown at the top of every page.
- One place for the Apps Script web app URL: SITE.analytics.endpoint in site-config.js. The class agent page and the usage counter both read it, so agent.html no longer needs editing.
- track.js counts anonymously (random device code, no names, no registration numbers, no cookies). Learners can stop counting on their device from the footer link.
- Optional GoatCounter: sign up free at goatcounter.com, then put your site code in SITE.analytics.goatcounter.
- Usage analytics in Apps Script: add Analytics.gs to the same project, replace Code.gs and Agent.gs, redeploy the web app as a new version, then use the menu Usage analytics > Refresh usage summary.
- Each new cohort: set cohort in site-config.js. Usage rows carry the cohort label, so years can be compared.

## K-level rule (decided Nov 2026)
- The five course outcomes keep the K levels printed in the syllabus (CO1 K2, CO2 K3, CO3 K4, CO4 K3, CO5 K4). These are the targets.
- Every class activity and assignment is tagged to the outcome it builds, at or below that outcome's level.
- Only exception: the Unit 5 mini-project, pitched at K5 and shown as a stretch task under CO4.
- Each year, when you add or change an activity, check its tag against this rule before publishing.

## Practice quiz: modes, badges, weekly board, question batches
- Modes: Practice (25 questions), Exam mode (20 questions in 20 minutes, answers at the end), Weak-unit set (10 questions from the weakest unit).
- Progress, streak and badges are kept on the learner's phone. The quiz favours questions the learner has not yet seen.
- Weekly board (optional, anonymous): the learner joins with a nickname. Points: 10 for each active day, 5 per attempt (3 a day at most), 10 once a day for a new personal best. It resets every Monday (IST). Needs the web app URL in site-config.js.
- Hide a nickname: Usage analytics > Hide a nickname from the weekly board (adds it to the sheet LB_Hidden; delete the row to show it again).
- Question bank: practice-data.js holds ids 1 to 25. New batches are separate files (practice-data-b1.js has ids 26 to 50). A batch goes live only when its file name is listed in practiceBatches in site-config.js. Never reuse or renumber an id: the "most missed questions" report relies on it.
- Adding a batch next year: copy practice-data-b1.js, give new ids, add the file name to practiceBatches.

- Batch 2 (practice-data-b2.js, ids 51 to 75) is ready. To switch both batches on: practiceBatches: ["practice-data-b1.js", "practice-data-b2.js"]. Keep the review workbook for each batch with the course records.
- For each new cohort, a lighter routine works well: read "Most missed practice questions" in Usage_Summary, then replace or reword the five weakest or unclear questions in their batch file and keep every id the same. Add new questions as a new batch with fresh ids.
