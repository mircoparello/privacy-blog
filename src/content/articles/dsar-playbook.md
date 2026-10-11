---
title: "Data subject access requests: a practical playbook"
description: "DSARs are the most common and most underestimated obligation in GDPR compliance. Here's a field-tested playbook for handling them well."
pubDate: 2025-02-18
topic: "Data Subject Rights"
tags: ["DSAR", "Operations", "Data Subject Rights"]
readingTime: "10 min read"
featured: false
---

If there's one GDPR obligation that every privacy team underestimates, it's the data subject access request. It looks simple on paper — the data subject has the right to a copy of their data, and you have one month to provide it. In practice, it's a multi-stakeholder fire drill that touches every system you run, every vendor you use, and every assumption you made about your data architecture.

I've handled hundreds of these. Here's the playbook I use.

## Step 1: Verify identity, but not too much

The first instinct is often to demand a passport, a utility bill, and a signed letter. Resist this. The GDPR requires you to take "reasonable measures" to verify identity, not to perform KYC. For most online services, the account's authenticated email is sufficient.

The trap is over-verification, which is itself a GDPR violation — you're processing additional personal data for a purpose that may not be justified. The rule of thumb: verify at the level your service already verifies.

> If you let a user log in with an email and a password, that's the identity you accept for a DSAR. Don't ask for more.

## Step 2: Scope the request before you scope the data

Most data subjects don't know the full range of what you hold. They ask for "all my data" when they mean "all the data I think you have, which is roughly the data I can see in your app." Your job is to translate the request into the actual systems and processors it touches.

Build a standard intake form that asks:
- Which email address or account identifier?
- Approximate date range?
- Specific concerns (marketing, profiling, a specific incident)?
- Are they also requesting rectification, erasure, or restriction?

This is not gatekeeping — it's making the request actionable. Most requesters want their data to solve a problem, and helping them articulate the problem gets you to a useful response faster.

## Step 3: Map the data before you collect it

Before you start pulling data, list every system and processor that might hold personal data about this individual. For a typical SaaS company, this includes:

- The production database
- The analytics warehouse
- The CRM
- The email marketing tool
- The customer support tool
- The billing system
- The logs and APM systems (often forgotten)
- Third-party processors (marketing pixels, embedded widgets, AI providers)

The forgotten systems are the ones that get you in trouble. Logs in particular are a recurring problem — they often contain full request bodies, which means they contain personal data the data subject didn't know you had.

## Step 4: Collect, review, deliver

For each system, run the export, normalise it to something human-readable, and review it for two things:

1. **Third-party data.** If the export contains other people's personal data — which it almost always does for messaging products — you have to redact it. This is a legitimate ground for not disclosing that data, and you should document the redaction.

2. **Inferences and derived data.** You're not required to disclose the internal logic of your profiling, but you are required to disclose the *outcome* — the segments, the scores, the categories. Get this right; it's a common complaint trigger.

Deliver the response in a structured, common format (JSON, CSV, or PDF depending on the data) through a secure channel. Don't email it as an attachment.

## Step 5: Document, even if you didn't fulfill

If you can't fulfill the request — because you don't have the data, or because an exemption applies — document why. The data subject has the right to know why you didn't act, and the supervisory authority has the right to ask. A short, clear letter explaining the reasoning is worth its weight in gold during an investigation.

## The systemic lesson

The reason DSARs are painful is rarely that individual requests are hard. It's that they expose the gap between the privacy program you have on paper and the data architecture you have in production.

Every painful DSAR is a free audit of your data architecture. Use it that way. If you can't answer a DSAR without three engineers and a week of work, you have an architecture problem, not a DSAR problem — and the next request is going to be just as painful unless you fix the underlying system.

The teams that handle DSARs well are the teams that have invested in data discovery, lineage tracking, and a real understanding of where personal data flows through their systems. That investment pays off not just in DSARs but in every other GDPR obligation, because they all depend on the same underlying visibility.

— EM
