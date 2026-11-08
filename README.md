# Student Enterprise Initiative Platform

A deployable Next.js starter project based on the interactive Student Enterprise Initiative prototype.

## Included

- Public website: home, about, how it works, eligibility and FAQs
- Seven-step applicant form
- Admin dashboard with sample application records
- Application search and status filtering
- Applicant profile and manual status review
- AI-screening explanation page with explicit demo-only labels
- Placeholder sections for judges, scoring, winners, grant management, cycles and progress reports

## Run locally

Requirements: Node.js 18.17+ (Node.js 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Create a GitHub repository and upload this project.
2. Sign in to Vercel using your GitHub account.
3. Select **Add New → Project** and import the repository.
4. Keep the detected Next.js framework settings.
5. Select **Deploy**.
6. Vercel will provide a public URL.

No environment variables are required for this front-end demonstration.

## Important: prototype limitations

This is a front-end starter, not a production grant-management system.

- Applicant form submissions are not sent to a server or persisted.
- File inputs only capture a filename; no secure file upload/storage is configured.
- Sample admin records are hard-coded demonstration data.
- Admin access is not authenticated. The `/admin` route is publicly accessible.
- Status updates are in browser component state and are not a durable audit log.
- AI screening is not connected to OCR, AI models, or external business verification.
- Email notifications, duplicate-application controls and role permissions are not implemented.
- Application-cycle dates/status are not connected to a backend.

**Do not use this version to collect real applicant personal data or documents.**

## Recommended production architecture

- Next.js + TypeScript frontend
- Supabase/PostgreSQL or managed PostgreSQL backend
- Supabase Auth or equivalent authentication with MFA
- Private object storage with signed URLs and file scanning
- Server-side validation and duplicate checks per application cycle
- Role-based access control for administrators, reviewers, judges and finance users
- Audit log for every status change, score, override and disbursement
- OCR/document extraction and AI-assisted screening behind server-side APIs
- Human review for eligibility and selection decisions
- Transactional email provider for application receipts and notifications

Before launch, add a privacy notice, retention policy, access controls and a process for handling applicant data under applicable Nigerian data-protection requirements.
