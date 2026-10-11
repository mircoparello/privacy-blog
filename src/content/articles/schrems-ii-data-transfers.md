---
title: "After Schrems II: the new geography of data transfers"
description: "Five years on, the post-Schrems II transfer landscape has settled into an awkward equilibrium. Here's how I think about it in practice."
pubDate: 2025-01-22
topic: "Cross-Border Transfers"
tags: ["Schrems II", "Transfers", "SCCs"]
readingTime: "9 min read"
featured: false
---

Five years after Schrems II, the law of international data transfers has settled into an awkward equilibrium. The Privacy Shield is dead. The EU-US Data Privacy Framework exists, but its scope is limited to US organisations self-certifying under it. Standard Contractual Clauses are still with us, but they now come with a transfer impact assessment obligation that nobody quite knows how to do well.

This is how I think about transfers in practice, in 2025.

## The three buckets

I mentally sort transfers into three buckets, each with a different risk profile and a different compliance strategy.

### Bucket 1: DPF-certified recipients

If your recipient is US-based and certified under the EU-US Data Privacy Framework, you're in the easiest bucket. The DPF provides an adequacy decision, which means transfers to certified recipients are not restricted.

The caveats: certification has to be current (check the public list), the recipient has to be acting as a controller or processor in a way that's covered by their certification, and you should still document your reliance. The DPF is not a permanent solution — it's a political compromise that could be challenged again — but for now it works.

### Bucket 2: SCCs with a clean transfer impact assessment

For recipients not covered by the DPF — most non-US recipients, and US recipients that haven't certified — Standard Contractual Clauses are still the workhorse. But SCCs alone aren't enough. You need a Transfer Impact Assessment (TIA) showing that the law of the recipient's jurisdiction doesn't undermine the SCCs' safeguards.

A clean TIA is one where you can credibly conclude, based on the recipient's circumstances and the nature of the transfer, that there's no reason to believe the personal data will be subject to government access that exceeds what's necessary in a democratic society.

For many SaaS-to-business transfers in jurisdictions with strong rule-of-law traditions, this conclusion is reachable. It's not automatic, but it's not heroic.

### Bucket 3: SCCs with supplementary measures

This is the hard bucket. If your TIA concludes that the SCCs alone aren't enough — typically because the recipient is in a jurisdiction with sweeping surveillance powers — you need supplementary measures. These can be contractual, organisational, or technical, but in practice the only ones that really work are technical: encryption with keys held outside the recipient's jurisdiction, pseudonymisation with the mapping held elsewhere, end-to-end encryption that prevents the recipient from accessing the data in the clear.

> If you're in bucket 3 and your supplementary measures are purely contractual, you're probably not actually in compliance. You're in hope.

## The honest reality

Most companies I see are somewhere between bucket 2 and bucket 3, with documentation that's somewhere between "robust" and "we'll deal with it if we get caught." This is not because they're malicious — it's because the regulatory framework demands a level of forensic analysis of foreign surveillance law that no normal compliance team can sustain across every vendor.

The honest answer is that the transfer regime is, in practice, a risk-management question rather than a compliance question. You do the TIA. You document the supplementary measures you can. You prioritise the high-risk transfers — large-scale, sensitive, novel jurisdictions — and accept that the long tail of small transfers to established SaaS vendors in friendly jurisdictions is a calculated risk.

This is not satisfying. It's not what the regulators want. But it's what most practitioners are doing, and pretending otherwise makes the conversation less useful, not more.

## What I'd change if I were drafting

The transfer regime is one of the parts of GDPR that most clearly needs revisiting. The framework we have was designed for a world of identified transfers to identified recipients — not for a world of cloud infrastructure, sub-processors four layers deep, and global content delivery networks. The current framework asks us to do a TIA for a transfer to an AWS region that we'd do anyway because there's no other way to run the workload.

A workable reform would recognise that some transfers are structural — they're the cost of using modern infrastructure — and regulate them at the infrastructure level rather than the transfer level. We're not there yet, and until we are, practitioners will keep doing the awkward dance of mapping sub-processors, running TIAs on AWS regions, and hoping the next Schrems case doesn't break the whole thing again.

— EM
