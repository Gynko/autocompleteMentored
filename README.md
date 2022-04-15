# React component: input with autocomplete <!-- omit in toc -->

## Table <!-- omit in toc -->

- [1. Installing and starting server](#1-installing-and-starting-server)
- [2. Goal - qualities of the codebase](#2-goal---qualities-of-the-codebase)
- [3. How I approached the problem](#3-how-i-approached-the-problem)
  - [3.1. Setting up some basics](#31-setting-up-some-basics)

## 1. Installing and starting server

1. npm install
2. npm start

## 2. Goal - qualities of the codebase

1. As extensible as possible
2. DRY
3. Documented

## 3. How I approached the problem

### 3.1. Setting up some basics

1. Managing to console log what is entered in my input
2. Writing what I input in a li element of the ul
3. console.Logging country entries

Analyzing the countries list data structure:

1.  Countries are sorted alphabetically. Influences the algorithm search.
2.  There is a possible typo: a missing Capital letter on afghanistan => code should take that into account?
3.  There are commas on some entries (Korea, North) that may or may not be an issue.
