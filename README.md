# JobSearch.wtf

> Because the job market is BS

A comprehensive platform empowering software engineers to effortlessly manage their job search journey. From tracking job applications and interview schedules to capturing insightful notes and conducting retrospectives. It streamlines the entire process, enabling engineers to navigate their career path with clarity and confidence.

## Stack

- React
- Next.js
- Tailwind CSS
- Turso
- Drizzle
- tRPC
- Vercel
- Clerk Auth

## TODO
- [x] Make it deploy (vercel)
- [x] Scaffold basic ui
- [x] setup database (Turso)
- [x] attach db to ui
- [x] add auth (Clerk)
- [x] add job applications
- [x] Error management (Sentry)
- [x] replace daisyui with shadui
- [x] routing (parallel route)
- [ ] Analytics (posthog)
- [ ] Rate limiting (upstash)
- [ ] Add company model
  - [ ] adjust db to associate relation with company on applications
  - [ ] Ranking of company for that job application
    - company_id
    - job_application_id
    - composite index on company_id + job_application_id
    - rank
- [ ] Add additional fields to job applications
  - [ ] Notes
  - [ ] Ranking of company
  - [ ] Recruiter Contact
  - [ ] Interview Dates
  - [ ] Expected Timeline (next contact? hiring timeline?)
- Add Interview model
  - [ ] Notes
  - [ ] Retrospective
  - [ ] Areas you did well
  - [ ] Areas you could improve
  - [ ] Interviewers Names & Contact Info