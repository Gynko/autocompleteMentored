# React component: input with autocomplete <!-- omit in toc -->

## Table <!-- omit in toc -->

- [1. Installing and starting server](#1-installing-and-starting-server)
- [2. Goal - qualities of the codebase](#2-goal---qualities-of-the-codebase)
- [3. How I approached the problem](#3-how-i-approached-the-problem)
  - [3.1. Setting up some basics](#31-setting-up-some-basics)
  - [3.2. Analyzing the countries list data structure:](#32-analyzing-the-countries-list-data-structure)
  - [3.3. Search algorithm](#33-search-algorithm)

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

> If we were in a real setting, there is a question that I would ask my lead: my assignment is to create an autocomplete based on the input's ordered letters (If i type "Gre", I will need to return starting with "Gre": Greece, Greenland, Grenada).

But a user typing "South" - as I would myself type it to get "South Korea"- would not get "Korea, South" result, which may not be a good Ux.

For the sake of the exercice I will just assume that lead said to stick to ordered letters.

### 3.3. Search algorithm

My first reflex would be to wonder if the data structure that I am supposed to use is the best one for the job.
