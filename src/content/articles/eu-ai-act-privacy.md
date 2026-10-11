---
title: "The EU AI Act's quiet revolution in privacy programs"
description: "The AI Act doesn't replace GDPR — it sits on top of it. Here's what changes for DPOs who suddenly find themselves responsible for AI governance too."
pubDate: 2025-03-14
topic: "EU AI Act"
tags: ["AI Act", "GDPR", "Governance", "DPIA"]
readingTime: "12 min read"
featured: true
---

For most data protection officers, the AI Act arrived like a second GDPR — another sprawling regulation with a long tail of compliance work, dropped on top of an already full plate. But the more time I spend with the text, the more I think the interesting story isn't the regulation itself. It's the quiet merger it's forcing between privacy programs and AI governance.

## Two regulations, one program

The first thing to understand is that the AI Act and the GDPR are not parallel regimes. They overlap, deliberately, in ways that matter.

A high-risk AI system that processes personal data is subject to *both*. The GDPR governs the lawful basis, the data subject rights, the DPIA. The AI Act governs the risk management system, the data governance requirements, the technical documentation, the human oversight. If you're a DPO whose company deploys such a system, you don't get to pick which regime applies. You get to do both.

> The AI Act doesn't replace your GDPR program. It adds a second floor on top of it — and the staircase between them is steeper than it looks.

In practice, this means the privacy team and the AI governance team can no longer be separate groups that meet once a quarter. They have to be the same group, or at least tightly integrated, because the obligations bleed into each other at every step.

## Where the obligations actually overlap

Three places where I see the most friction in practice:

### 1. Data governance meets purpose limitation

The AI Act requires that training, validation, and testing data be "relevant, sufficiently representative, and free of errors" to the extent possible. The GDPR requires that personal data be collected for specified, explicit, and legitimate purposes and not further processed incompatibly.

These two requirements pull in different directions. The AI Act wants *more* and *better* data. The GDPR wants *less* and *more specific* data. Reconciling them is not a legal question — it's an engineering and product question, and it has to be answered at the data pipeline level, not in a memo.

### 2. DPIAs meet fundamental rights impact assessments

For high-risk AI systems, the AI Act effectively requires a fundamental rights impact assessment (FRIA) for certain deployers in public services. The GDPR already requires a DPIA for high-risk processing. These are not the same document, but they share methodology, evidence, and most of their substance.

The trap is doing them as separate exercises with separate consultants. The opportunity is building one impact-assessment practice that produces both artifacts — and that the engineering team treats as a single input to design decisions.

### 3. Transparency obligations multiply

The GDPR gives data subjects the right to meaningful information about the logic of automated decision-making. The AI Act gives deployers obligations to inform individuals when they're interacting with AI. The Digital Services Act adds another layer for certain online platforms.

Each of these is a separate legal hook, but they all flow into the same product surface — the consent flow, the privacy notice, the in-product disclosure. If they're not designed together, the user experience becomes a wall of legalese that satisfies no one.

## What I'd build first

If you're a DPO whose company is building or deploying AI systems, here's where I'd start — not in order of regulation, but in order of actual leverage:

1. **Map your AI inventory against your processing inventory.** Not as a one-time exercise. As a living artifact. The two should be queryable against each other: "show me every model that touches customer data," "show me every high-risk system that doesn't have a DPIA."

2. **Build one impact assessment process, not two.** A single methodology that produces DPIAs where the GDPR requires them and FRIAs where the AI Act requires them. Same evidence library, same stakeholder review, same cadence.

3. **Pull engineering into the data governance conversation early.** The AI Act's data governance requirements are unenforceable from a legal memo. They have to be implemented as checks in the data pipeline — and that means engineers have to own them, with privacy as a design partner.

4. **Track the transparency surface as a product.** Your privacy notice, your cookie banner, your AI disclosure, your DSA notice — they're all part of one user-facing surface that has to be coherent. Treat it as one.

## What doesn't change

A lot, actually. The GDPR's core principles — lawfulness, fairness, purpose limitation, data minimisation, accuracy, storage limitation, integrity, accountability — are still the spine of any privacy program. The AI Act doesn't replace them. It just makes you confront them in a new context, with new stakeholders, and at a scale that the original GDPR drafters didn't quite anticipate.

The work, as always, is translation. Translating legal requirements into engineering decisions. Translating engineering constraints back into legal advice. Translating both into product choices that users can actually live with.

The DPOs who do this well over the next two years are going to be the ones whose companies can ship AI features without regulatory fire drills. The ones who don't are going to spend a lot of time writing remediation plans.

— EM
