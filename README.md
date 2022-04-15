# React component: input with autocomplete <!-- omit in toc -->

## Table <!-- omit in toc -->

- [1. Installing and starting server](#1-installing-and-starting-server)
- [2. Goal - qualities of the codebase](#2-goal---qualities-of-the-codebase)
- [3. How I approached the problem](#3-how-i-approached-the-problem)
  - [3.1. Setting up some basics](#31-setting-up-some-basics)
  - [3.2. Analyzing the countries list data structure:](#32-analyzing-the-countries-list-data-structure)
  - [3.3. Search algorithm: the right data structure?](#33-search-algorithm-the-right-data-structure)
  - [3.4. Creating the search algorithm](#34-creating-the-search-algorithm)

## 1. Installing and starting server

1. npm install
2. npm start

## 2. Goal - qualities of the codebase

1. As extensible as possible
2. DRY
3. Documented

## 3. How I approached the problem

I am going to approach this problem exactly as I would if it had been given to me by a lead.

### 3.1. Setting up some basics

1. Managing to console log what is entered in my input
2. Writing what I input in a li element of the ul
3. console.log country entries
4. folder structure

### 3.2. Analyzing the countries list data structure:

1.  Countries are sorted alphabetically. Influences the algorithm search.
2.  There is a possible typo: a missing Capital letter on afghanistan => code should take that into account?
3.  There are commas on some entries (Korea, North) that may or may not be an issue.
4.  There are no special characters like £, é

> If we were in a real setting, there is a question that I would ask my lead: my assignment is to create an autocomplete based on the input's ordered letters (If i type "Gre", I will need to return starting with "Gre": Greece, Greenland, Grenada).

> But a user typing "South" - as I would myself type it to get "South Korea"- would not get "Korea, South" result, which may not be a good Ux.

> For the sake of the exercice I will just assume that lead said to stick to ordered letters.

### 3.3. Search algorithm: the right data structure?

1. My first reflex would be to wonder if the data structure that I am supposed to use is the best one for the job.

When I type my first letter, I am going to have to traverse the whole array until the first element starting with this letter, which could well be a O(n) operation if the first letter is "Z".

> For the sake of the exercice, I will assume that I am supposed to use an array and keep it as it is. Truth is, I feel the need to go again through my data structure and algorithm course but won't have time to do so in a timely manner.

### 3.4. Creating the search algorithm

Since our array elements are "ordered", I am looking at an algorithm that is not going to traverse the whole array.

=> If the first letter that I type is a "D", I need to be able to stop the algorithm a soon as it reaches an entry where the first letter is "E".

> Note: it occurs to me that I don't know from the top of my head all the methods available for arrays, and their synthaxes: will that be problematic in a live interview?
