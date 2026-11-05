+++
title = "Wireframe Tool"
date = 2025-06-20
description = "web-based application for designer"
[taxonomies]
tags = ["DevOps", "Wireframe", "Design", "PHP", "MySQL"] 
[extra]
toc = true
image = "/images/wireframePage.png"
in_search_index = true
+++

## Wireframe Tool Project Report

**Institute:** Birla Vishvakarma Mahavidyalaya  
[Project Repo](https://github.com/mukund58/Wireframe-tool)

**Group Members:**  
- Mukund Parmar (23CP014)  
- Jaivik Prajapati (23CP002)  

## Snapshots

### Home Page

{{ responsive_img(path="images/project.png", alt="Sample image") }}

### Login and Signup Page

{{ responsive_img(path="images/project-login.png", alt="Sample image") }}
{{ responsive_img(path="images/project-signup.png", alt="Sample image") }}


### Dashboard Page

- Send verification email
- Edit or delete draft
- Create new drafts

{{ responsive_img(path="images/project-dashborad.png", alt="Sample image") }}
{{ responsive_img(path="images/project-DashboardDraft.png", alt="Sample image") }}

### Editor Page

- Name and create drafts
- View/search all drafts

{{ responsive_img(path="images/project-editor.png", alt="Sample image") }}


## 1. Introduction

The **Wireframe Tool** is a web-based application designed to assist UI/UX designers in creating wireframes efficiently. The tool provides an infinite canvas where users can collaboratively design, modify, and share wireframes. It is developed using the LAMP stack (Linux, Apache, MySQL, PHP) and aims to streamline the design process with real-time collaboration features.


## 2. Purpose

The primary goal of this project is to create an intuitive and feature-rich wireframe design tool that allows users to design interfaces collaboratively.

### What is a Wireframe?

A wireframe is a simple sketch or blueprint that shows the basic layout of a website or app.

### Why Use Wireframes?

- Clarify ideas.
- Get early feedback.
- Save time.
- Focus on function.

### Benefits of Using Wireframes

- Improves user experience.
- Faster changes.
- Clearer development.
- Saves costs.

### Objectives

- Provide an infinite canvas for designing wireframes.
- Enable real-time collaboration through link-based sharing.
- Store and retrieve wireframe data efficiently.
- Offer an easy-to-use UI without coding knowledge.


## 3. Modules

### 3.1 User Authentication Module
- Registration and login
- Secure session handling
- Password encryption and reset

### 3.2 Wireframe Design Module
- Infinite canvas
- Drag-and-drop UI elements
- Layered object management

### 3.3 Collaboration Module
- Shareable links
- Real-time sync via WebSockets/AJAX
- View/edit permission management

### 3.4 Storage and Database Module
- MySQL storage and retrieval
- Load previous designs
- Optimized queries

### 3.5 Export and Sharing Module
- Export to PDF/PNG/SVG
- Unique sharing links
- Print-ready outputs


## 4. Functional Requirements

### 4.1 User Authentication
- Secure login/logout
- Password hashing
- Session management

### 4.2 Wireframe Creation
- Drag and drop elements
- Resize, move, delete
- Undo/redo support

### 4.3 Collaboration
- Invite via link
- Real-time updates
- Shared views for all collaborators

### 4.4 Data Storage and Retrieval
- Save wireframes in DB
- Access previous work
- Autosave support

### 4.5 Export and Sharing
- Export to standard formats
- Shareable links
- Print options


## Additional Functional Requirements

### 1. User Management
- Register with email, username, password
- Role-based access (admin/user)
- Update profile info

### 2. Draft Management
- Create/view/edit/delete drafts
- Use assets in drafts

### 3. Asset Management (Admin)
- Add/update/delete assets
- Assets linked to drafts
- Access control

### 4. Draft-Asset Relationship
- Multiple assets per draft

### 5. Security & Authorization
- Only authenticated users can access features
- Hashed passwords

### 6. Database Constraints
- Valid user-draft relationship

### 7. Import/Export
- Drafts as JSON import/export



## ER Model

{{ responsive_img(path="images/ER.png", alt="Sample image") }}



## Relational Schema
{{ responsive_img(path="images/RS.png", alt="Sample image") }}


---


