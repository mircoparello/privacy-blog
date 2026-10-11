---
title: "Privacy by design in the age of large language models"
description: "Article 25 was written for a world of structured databases. LLMs break that world — and force us to figure out what data minimisation even means when the model is the database."
pubDate: 2025-03-02
topic: "Privacy Engineering"
tags: ["LLMs", "Privacy by Design", "Data Minimisation"]
readingTime: "8 min read"
featured: false
---

Article 25 of the GDPR — privacy by design and by default — has always had an uncomfortable relationship with machine learning. The principle says you should collect the minimum data necessary, process it for the minimum time, and build in safeguards from the start. ML models, by their nature, want the opposite: more data, longer retention, and architectures that often obscure what was learned from what.

With large language models, the tension gets sharper. An LLM is, in a real sense, a database you can't query directly — a giant statistical compression of its training corpus, some of which is personal data. So what does data minimisation mean when the model is the database?

## The three places personal data lives in an LLM system

When you're building with LLMs, personal data shows up in at least three distinct places, and each needs its own minimisation strategy.

### 1. Training data

If you're pre-training or fine-tuning on data that contains personal information — even incidentally, as in a scraped web corpus — that's processing under the GDPR. The legal basis, the purpose specification, the data subject rights all apply. The minimisation question is whether the personal data is actually necessary for the training objective, and there's a growing toolkit for answering no: filtering, deduplication, PII detection and redaction, and the use of synthetic or curated datasets.

The hard truth is that most teams don't do this well, because the cost of doing it well is high and the regulatory pressure is still nascent. That's going to change.

### 2. Prompts and context

Every time a user puts personal data into a prompt — their own, someone else's, or a customer's — that's processing. If you're the provider of the LLM-based service, you're a controller (or sometimes a processor) for that data. If you're sending it to a third-party model API, you're doing a transfer and a disclosure.

The minimisation question here is: did you actually need to send that field? Many LLM applications over-share context by default, dumping entire user records into prompts when only a few fields are relevant. Trimming context isn't just a cost-saving measure — it's a data minimisation measure, and it should be documented as such.

### 3. Model outputs

Models can and do emit personal data they were trained on, especially when prompted adversarially. This is the famous "regurgitation" problem. From a GDPR perspective, the question is whether the controller of the model is liable for re-disclosure of training data, and the answer is — it depends, but the safe assumption is yes.

> The model is not a black box you can hand to users and walk away from. It's a disclosure surface, and you have to treat it like one.

## What privacy by design actually looks like for LLMs

The principles don't change. The implementation does.

**Data minimisation at the prompt boundary.** Build a layer between your application and the model API that strips personal data not needed for the task. Use PII detection. Use field-level access controls. Log what you sent, not what the user typed.

**Purpose limitation via separate models.** Don't train one giant model on everything. Train smaller, task-specific models on the minimum data each task requires. This is also better for cost, latency, and quality — which is convenient.

**Storage limitation via ephemeral contexts.** Don't retain prompts longer than you need to. Many providers now offer zero-retention API modes; use them where you can.

**Transparency via logging, not notice.** Users can't meaningfully consent to all the ways an LLM might use their data. So invest in internal logging and audit instead — know what your system is doing, and be able to demonstrate it.

## The uncomfortable part

The hardest part of privacy by design for LLMs isn't the engineering. It's the product question: do you actually need an LLM for this?

A surprising number of LLM features I review could be implemented with a rules-based system, a retrieval pipeline, or a much smaller specialised model — all of which are dramatically easier to make privacy-respecting. The LLM is chosen because it's the default, not because it's the right tool.

The most powerful privacy-by-design intervention I make as a DPO is not redacting a prompt or running a DPIA. It's asking, in the design review, whether the LLM is doing work that a non-LLM could do. Often the answer is yes. Often that changes the conversation.

— EM
