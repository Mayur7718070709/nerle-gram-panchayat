# GramSetu AI: Production Implementation Blueprint

## 1. Multi-village subscription model

Build one SaaS platform, not a separate app per village. Every record carries a `tenant_id` (village ID). A new subscription creates a tenant, village profile, admin user, configuration, billing plan, and isolated document folder.

- `Super Admin`: platform-wide access, subscriptions, village onboarding, support, and aggregate analytics.
- `Village Admin`: only their village, staff, notices, payments, certificates, complaints, and reports.
- `Department Staff`: assigned service queues only.
- `Citizen`: OTP login and only their household, bills, applications, and complaints.

Suggested plans: Trial, Pragati (all MVP services), and Pragati+ (advanced analytics, integrations, and higher message limits). Meter WhatsApp messages, AI usage, storage, and payment volume.

## 2. Recommended production stack

- Frontend: Next.js PWA for citizen and admin portals.
- API: NestJS or FastAPI with REST APIs and background jobs.
- Primary data: PostgreSQL with Row Level Security on `tenant_id`.
- Cache and OTP rate limits: Redis.
- Files: S3-compatible object storage in an India region, encrypted per tenant.
- Search and AI knowledge: PostgreSQL `pgvector`, partitioned by tenant.
- Notifications: Meta WhatsApp Cloud API plus an Indian SMS provider for OTP.
- Hosting: AWS Mumbai, Azure Central India, or an India-region managed platform.

Core tables: `tenants`, `subscriptions`, `users`, `citizens`, `households`, `properties`, `water_connections`, `bills`, `payments`, `complaints`, `complaint_events`, `applications`, `certificates`, `schemes`, `notices`, `notification_logs`, `audit_logs`, and `ai_conversations`.

## 3. End-to-end onboarding

1. Super Admin creates the village tenant and chooses a subscription.
2. Village signs the agreement and verifies the official administrator.
3. Import citizen, property, water connection, and opening-balance data from approved CSV templates.
4. Deduplicate by village household ID and verified mobile number.
5. Configure wards, departments, certificate formats, tax rules, and payment account.
6. Train the tenant-specific AI knowledge base on approved notices, schemes, and village information.
7. Pilot with staff, then activate citizens through OTP and WhatsApp opt-in.

## 4. Security design

- Enforce tenant isolation in both API authorization and PostgreSQL Row Level Security.
- Encrypt traffic with TLS and sensitive data at rest with managed keys.
- Store OTPs as short-lived hashes; rate-limit attempts by mobile, IP, and device.
- Require MFA for Super Admin and Village Admin; use least-privilege roles.
- Keep immutable audit logs for every admin action, bill change, certificate, and payment.
- Use signed, expiring URLs for documents and QR codes for certificate verification.
- Never expose full Aadhaar numbers. Prefer government-approved identifiers and consent.
- Run daily backups, quarterly restore tests, dependency scans, and annual penetration tests.
- Keep production, staging, and demo data completely separate.

## 5. Payments and monthly QR bills

There is no truly free payment gateway: UPI may have zero transaction charges in some arrangements, but providers can charge platform, settlement, or service fees. Start with UPI intent/dynamic QR through a regulated provider such as Razorpay, Cashfree, PayU, PhonePe PG, or the village bank's supported solution.

Monthly billing job:

1. Generate house tax, water, and other bills per household.
2. Create a unique payment reference and dynamic QR.
3. Send the QR and bill link through WhatsApp/SMS.
4. Verify payment only through the gateway webhook, never from the citizen screen.
5. Issue a signed digital receipt and reconcile with the bank settlement report.

## 6. Complaint workflow

Citizen submits category, ward, description, location, and photo. The rules engine assigns department and SLA. Staff acknowledges, adds progress evidence, and resolves. Citizen confirms or reopens. Every event is timestamped; overdue complaints escalate to Village Admin and appear in analytics.

## 7. Marathi AI and farmer assistant

Use a retrieval-based assistant. The model must answer from approved tenant data and official scheme/agriculture sources, cite the source, and hand off to staff when uncertain. Add Marathi speech-to-text and text-to-speech for voice access. Keep farmer advice clearly advisory; high-risk pesticide, disease, weather, and financial answers should route to verified sources or an agriculture officer.

## 8. Production rollout sequence

1. Phase 1: OTP, citizen registry, complaints, bills/payments, notices, admin dashboard.
2. Phase 2: certificates, scheme checker, WhatsApp workflows, Marathi AI knowledge base.
3. Phase 3: farmer AI, voice assistant, district analytics, and integration APIs.
4. Phase 4: security audit, load testing, disaster recovery drill, and Maharashtra-wide sales rollout.
