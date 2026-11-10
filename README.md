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
| `quiz.html`, `simulation.html`, `agent.html` | Practice tools |
| `style.css`, `assets/` | Look and logo |

## Each new cohort (about 30 minutes)
1. **Settings**: open `site-config.js`. Change `cohort`, `examDate` (yyyy-mm-dd), `examLabel`, `examSession`, `updated`. The banners, the exam row in the assessment table and the countdown all update by themselves.
2. **New paper**: when the university paper is out, open `past-papers.js`, copy the last block in `PAPERS`, change the name and code, and type in the questions. Set `u` to the unit number(s). Then update the `REPEATS` list at the bottom, and review `key-answers.js` so the outlines still match what the papers ask.
3. **Schedule**: the 35-period schedule in `index.html` and the assignment dates are fixed to the 2026 calendar. For a new cohort, regenerate them from the course-plan workbook with the new start date and holidays, and replace the schedule rows. Also change "Teaching dates", the assessment weeks and the "Set on" dates.
4. **Agent**: in the CA Register, clear last year's rows in `Agent_Tasks`, `Agent_PINs` and `Agent_Log`, update `Agent_FAQ`, then run Class agent > Make student PINs. Use a fresh roster and Attendance sheet for the new class.
5. **Check**: open the site on a phone. Test the exam banner, the revision tabs, the quiz and the agent.

## If a change does not show
GitHub Pages can take a few minutes, and phones keep old copies. When you change a `.js` file, also change the `?v=` number after its name in `revision.html` and `index.html` (for example `v=20261111`), then refresh.

## Rules
- Keep question papers, PDFs and slides in Google Drive as view-only. Do not put downloadable files in this repository (it is public).
- Do not reproduce copyrighted textbooks. Use your own notes and summaries.
- Syllabus changes (a new regulation): update the unit text in `index.html` and the `U` array inside `revision.html`.
