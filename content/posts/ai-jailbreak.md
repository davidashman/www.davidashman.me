---
title: "Prison Break!"
date: 2025-06-20
draft: true
author: "David Ashman"
params:
  image: "/images/prison-break.jpg"
description: ""
toc: false
---

In the late 2000s, Apple disrupted the mobile device world with the introduction of the original iPhone.  Handheld devices existed, like the Palm Pilot, and even pseudo-smart phones, like the RIM Blackberry, were available to the brave.  But Apple's iPhone was different - it was the first mass-market mobile device that combined music, video, web and phone all in one incredibly built device.  It was the first to introduce a physics engine that made a cold glass and metal device feel almost organic.  It was also released without a critical component - an app ecosystem.

We all know the history - it didn't take too long for Apple to fix that and open up their app store along with the paradigm shift it had on the packaged software industry.  But for those first few years, resourceful engineers and entrepeneurs needed to take things into their own hands - the _jailbreak_ world was born.

I spent three years building software in the jailbreak community for iPhones.  It was an exciting time where anything was possible because of the freedom jailbreaking provided to developers to access and control what the iPhone could do.  With that freedom came risk, though.  Everyone that built software for jailbreak devices and those that jailbroke their phones all knew it and accepted that risk - the benefits were there.  Eventually, Apple caught up both with the app store and new features for iOS, along with closing up more and more of the security issues that jailbreaking exploited.

How does this relate to the current AI environment?  AI, particularly GenAI and LLMs, were the first mass-market AI technologies to really capture the imagination of non-technical people.  Here was a technology that built on years and years of work in machine learning to create a simple-to-use tool that could do amazing things that felt... organic.  Just like with Apple's original iPhone, the first generation of AI is missing the ability to really break out of it's own models and do things that people can only dream of.  Model Context Providers (MCPs) solve this problem.  Now the brain has a body it can work with to actually do things it's thinking about.

Back to jailbreaking...

Once the AIs have broader access to the "real world" via MCPs, the attack surface of AIs moves from the potential of an AI saying something incorrect or possibly offensive to actually doing harm.  An AI with access to a bank system can incorrectly transfer funds.  An AI with access to your company data can accidentally release that data to the public.  The incredibly bright people building these AIs are aware of this and have been working on building safegaurds into them to prevent harm.  But just like with the original iPhone, there is _always_ a way in.  

I believe we are not far off from seeing our first malitious attacker manipulating how an LLM handles a prompt in order to break out of the jail that the LLM's creators have attempted to put in place to keep data safe.  Legacy applications are limited in what damage they can do, as long as you are following best practices to defend against OWASP attack vectors.  But LLMs are different and the non-deterministic nature of them that makes them incredibly powerful is the same nature that makes them harder to defend.

All is not lost, though.  These are still software systems and without connections to the outside systems, likely via MCPs, they are still just thinking, not doing.  Some baseline defenses all engineers that are working on building agentic systems need to think about include:

- Zero trust principles still apply and every MCP that you look to adopt into your system needs to be vetted.  The AI should be given the least possible privilege to interact with the MCP and interactions need non-repudiated audit logs.  Access to the MCP needs to be revoked as soon as the task is complete.
- Focus your security efforts on the MCP interfaces - again, without MCPs, AIs are just brains and they can't do anything or get to sensitive information without them.  Do not trust the defenses in the LLM - build defenses into your MCPs to ensure they are safe.
- If you are fine-tuning your LLM, learn more about Reinforcement Learning with Human Feedback (RLHF) and other approaches to building ethical models.  These methods can't prevent the LLMs from doing something bad, but can make them less likely.

The AI ecosystem needs to catch up with some of the existing security features of modern web applications too:
- The ecosystem needs an OAuth-like authorization system - something that allows the human to grant specific scopes to the agent to do something on it's behalf and under it's supervision.
- MCP needs a mechanism for providers to define "sensitive" tools and resources that will require human approval prior to the AI taking action on it.

AI is here and it's not going away.  Technology leaders need to ignore the hype and focus on how to safely operationalize this technology just like every other new technology before it.