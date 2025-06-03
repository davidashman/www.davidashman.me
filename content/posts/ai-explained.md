---
title: "AI Explained"
date: 2025-06-02
draft: false
tags:
  - AI
image: /images/brain.png
description: ""
toc: false
---

Nowadays, it seems like all you hear about is AI.  How AI will make this easier and that better.  How we will all be unemployed and answering to the AI by the end of the decade.  As a technology executive, it's critically important for me to understand the AI landscape and how it will impact my organization.  I am never satisfied with just reading the latest trends and applying them, though.

As a technologist, I need to understand how things work.  So I dug into AI and quickly recognized how the terminology that is used in AI makes it seem like magic to anyone that isn't a data scientist.  I felt there was an opportunity to try to boil things down a bit for people to understand AI's technical underpinnings without committing to a PhD in data science.

# Models and Functions
At their root, AI models are nothing more than math functions that can be used to calculate an output based on some inputs.  What does that actually mean though?  Well let's start at the most basic algebraic function: `y = ax + b`.  I know, math... stick with me here.

The function `y = mx + b` means that given an input, `x`, you can calculate `y`, with two constants, `m` and `b`, defining the slope and y intercept.  This type of function results in a two-dimentional graph that looks like this:

![Simple algebraic graph](/images/2d-graph.png)

Pretending that this simple algebraic function is the AI model, what this will do is when the input is given to the model, the function will be evaluated to the `y` value and that will be returned as the output.  Now this is a massive simplification of modern large language models in AI.  The actual functions representing modern LLMs are multi-dimensional (think beyond three dimensions) and have millions or even billions of constants.

You may have noticed models being described as having "billions of parameters" (like ChatGPT-3 having 175 billion parameters).  What that means is the mathematical function representing the model has 175 BILLION constants in it - that's not your average algebraic function.

# LLMs and Generative AI
Generative AI is the latest, greatest AI that has taken the industry by storm.  It's goal is to do it's best to compose a sequence of words that will best approximate a human response to a prompt.  These models will take input as a sequence of tokens (each token representing one word, generally), 

# Training the Model
The next logical question, then, is how can a math function be "trained".  Again, here's an example of using a fancy term (training the model, like we would train a person to learn something) when it's not really that complicated.  When a model is trained, what is actually happening is the function that defines the model is being handed a VERY large set of inputs (and their correspending outputs, if it's using supervised learning) and the training software will go through all of the different combinations of parameters (or constants) to see which set will create a complete function that best represents 