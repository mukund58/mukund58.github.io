+++
title = "Building VendorBridge"
date = 2026-07-22
description = "Building a Procurement & Vendor Management ERP using React, ASP.NET Core Minimal API and PostgreSQL during my summer internship."
[taxonomies]
tags = ["ASP.NET Core", "React", "PostgreSQL", "Internship", "ERP", "Minimal API"]
[extra]
toc = true
image = "/images/vendorbridge/dashboard.png"
in_search_index = true
+++

# Building VendorBridge

**Company:** Help Me Buddy IT Pvt. Ltd.

**Duration:** 18 May 2026 – 28 June 2026

---
## Project at a Glance

| Item | Details |
|------|---------|
| Duration | 6 Weeks |
| Company | Help Me Buddy IT Pvt. Ltd. |
| Project | VendorBridge ERP |
| Backend | ASP.NET Core Minimal API |
| Frontend | React |
| Database | PostgreSQL |
| ORM | Entity Framework Core |
| Authentication | JWT |
| Architecture | Layered Architecture |
| APIs | REST |
| Documentation | Swagger |

## Introduction

During my summer internship at **Help Me Buddy IT Pvt. Ltd.**, I worked on a real-world ERP application called **VendorBridge**.

VendorBridge is a Procurement & Vendor Management ERP that helps organizations manage their complete procurement workflow digitally—from vendor registration to purchase orders and invoices.

This internship was my first experience building a large-scale backend using **ASP.NET Core Minimal APIs** and **Entity Framework Core**.

---
## Why ASP.NET Core?

Before this internship, I had experimented with .NET but had never built a complete production-style application.

I wanted to understand how modern backend systems are designed beyond simple CRUD applications.

ASP.NET Core Minimal APIs appealed to me because they provide a lightweight approach to building REST services while still supporting dependency injection, middleware, authentication, validation, and Entity Framework Core.

This internship gave me an opportunity to apply these technologies to a real business problem.

## Why this project?

Many companies still manage procurement using Excel sheets, emails and paper documents.

This creates several problems:

- Slow approval process
- Difficult vendor comparison
- Manual invoice generation
- No centralized records
- Lack of transparency

VendorBridge solves these problems by bringing the entire procurement lifecycle into one application.

## Thinking Beyond CRUD

One of the biggest lessons from this internship was learning that software is not just about writing APIs.

Every feature starts with understanding a business workflow.

Instead of asking:

> "What tables do I need?"

I learned to ask:

> "How does procurement actually work?"

Understanding vendors, RFQs, quotations, approvals, purchase orders, and invoices helped me design a backend that reflected real-world business processes.


## Challenges I Faced

### Understanding the Procurement Domain

The hardest part wasn't writing code—it was understanding procurement itself.

Terms like:

- RFQ
- Purchase Orders
- Quotations
- Vendor Categories

were completely new to me.

I spent the first few days learning the business process before implementing the database schema.


## Lessons Learned

This internship changed how I approach backend development.

Some important lessons were:

- Design business workflows before designing tables.
- Keep APIs small and focused.
- Write clean code instead of clever code.
- Database design matters more than most beginners think.
- Documentation saves debugging time.
- Good architecture makes future features easier to build.

## If I Continued This Project

If I had more time, I would add several production-ready improvements.

- Redis caching
- Background jobs using Hangfire
- Docker Compose
- CI/CD with GitHub Actions
- Azure deployment
- Unit and Integration Testing
- SignalR for real-time notifications
- Audit history
- File storage using Azure Blob Storage
---

## Tech Stack

### Backend

- ASP.NET Core 8 Minimal API
- Entity Framework Core
- PostgreSQL
- JWT Authentication
- Role-Based Authorization
- FluentValidation
- Dependency Injection

### Frontend

- React
- React Router
- Axios

### Tools

- Git & GitHub
- Swagger
- Postman
- Visual Studio Code

---
## Production-Oriented Features

Rather than focusing only on CRUD operations, I tried to build features commonly found in production software.

Some examples include:

- JWT Authentication
- Role-Based Authorization
- Global Exception Handling
- Validation
- Activity Logging
- RESTful API Design
- Swagger Documentation
- Layered Architecture
- Entity Framework Core
- PostgreSQL

## Project Architecture

The backend follows a layered architecture.

```

React Frontend

↓

REST APIs

↓

Minimal API Endpoints

↓

Business Logic

↓

Entity Framework Core

↓

PostgreSQL

```

Keeping the application modular made it easier to maintain and extend.

---

## Major Features

### Authentication

- JWT Authentication
- Login
- Register
- Refresh Tokens
- Protected APIs

---

### Vendor Management

- Create Vendors
- Update Vendor Details
- Vendor Categories
- Search Vendors

---

### Request For Quotations (RFQ)

Procurement officers can

- Create RFQs
- Publish RFQs
- Add Products
- Set Deadlines

Vendors can submit quotations for published RFQs.

---

### Quotation Comparison

One of my favorite modules.

The system compares vendor quotations based on

- Price
- Delivery Time
- Vendor Rating

making vendor selection much easier.

---

### Approval Workflow

Managers review procurement requests before purchase orders are generated.

This creates a proper approval chain inside the organization.

---

### Purchase Orders

After approval,

- Purchase Orders are generated
- Vendors receive updates
- Procurement history is maintained

---

### Invoice Generation

The ERP automatically creates invoices which can later be exported as PDF.

---

### Reports & Analytics

The dashboard provides

- Procurement Trends
- Vendor Performance
- Monthly Spending
- Purchase Statistics

which helps management take better decisions.

---

## Database Design

The project contains multiple interconnected tables including

- Users
- Roles
- Vendors
- Vendor Categories
- RFQs
- Quotations
- Purchase Orders
- Invoices
- Activity Logs

Entity Framework Core handled relationships and migrations efficiently.


---

## What I Learned

This internship taught me much more than simply writing APIs.

I learned

- Designing scalable REST APIs
- Database modelling
- Clean project organization
- JWT Authentication
- Role Based Authorization
- Entity Framework Core
- PostgreSQL
- API testing using Swagger
- Git workflow
- Debugging production-like issues

---

### Database Design

Designing relationships was much harder than writing controllers.

Choosing where to place foreign keys, handling cascading deletes, and modelling approval workflows required several iterations before arriving at a clean design.

---

### Authentication

Implementing secure authentication using JWT taught me how production APIs protect resources while supporting different user roles.
---

### Database Design

Designing relationships between multiple modules was challenging.

Thinking through foreign keys and business rules took much longer than writing CRUD APIs.

---

### Authentication

Implementing secure authentication with JWT and role-based authorization helped me understand how modern backend applications protect APIs.

---

## Screenshots

### Login

{{ responsive_img(path="images/vendorbridge/login.png", alt="Sample image") }}

---

### Dashboard

{{ responsive_img(path="images/vendorbridge/dashboard.png", alt="Sample image") }}

---

### Vendor Directory

{{ responsive_img(path="images/vendorbridge/vendors.png", alt="Sample image") }}

---

### RFQ Module

{{ responsive_img(path="images/vendorbridge/rfq.png", alt="Sample image") }}

---

### Reports

{{ responsive_img(path="images/vendorbridge/reports.png", alt="Sample image") }}

---

## Internship Outcomes

By the end of the internship I had built a complete backend application using modern Microsoft technologies.

More importantly, I became comfortable with

- ASP.NET Core
- Minimal APIs
- Entity Framework Core
- PostgreSQL
- Authentication
- Authorization
- REST APIs
- ERP domain modelling

This project gave me confidence to build larger backend systems in the future.

---

## Final Thoughts

When I started this internship, I thought backend development was mostly about writing CRUD APIs.

By the end, I realized that backend engineering is really about solving business problems through software design.

Building VendorBridge taught me how authentication, database modelling, API design, and business workflows fit together to create a complete application.

This internship strengthened my interest in backend engineering and gave me confidence to build larger systems using the .NET ecosystem.
