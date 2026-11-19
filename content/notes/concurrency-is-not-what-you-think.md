+++
title = "How Single-CPU Systems Multitask"
description = "Explore how computers run multiple programs at once, even with a single CPU, by understanding concurrency and scheduling"
date = 2025-06-23
[taxonomies]
tags = ["Operating Systems", "Concurrency", "CPU", "Multitasking"]
[extra]
toc = true
image = "/images/computer.jpg"
in_search_index = true
+++

Have you ever wondered how your computer can run multiple programs at the same time?

Most people think of **multi-core CPUs**, which is understandable with the marketing push from CPU manufacturers. However, the ability to multitask has been around **since the days of single-core processors**.

## A Historical Perspective

Back in the 1980s, machines like the **Commodore Amiga** and **Apple Macintosh** could already run multiple programs at once—even with only **one processor**.

{{ <image_url url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Amiga500_system.jpg/250px-Amiga500_system.jpg" alt="Online Image Example" /> }}

To understand how, we need to go back further.

### Mainframes and Limited Access

{{ <image_url url="https://media.wired.com/photos/59329428a312645844995f4d/master/w_1600,c_limit/AP120305028348.jpg" alt="Online Image Example" /> }}

Early computers were massive and expensive machines called **mainframes**. They filled entire rooms and were only accessible to governments, big companies, and universities. Due to their high cost and complexity, **computer time was highly valuable**.

Operating a program on these machines wasn't simple:

1. Load the compiler (often from magnetic tape).
2. Input the source code (e.g., in Fortran).
3. Generate Assembly code.
4. Use an assembler to produce machine code.
5. Finally, execute the program.

Each step involved manual tape mounting and waiting, during which the **CPU sat idle**, even though other users couldn’t access it.

### The Birth of Operating Systems

To improve efficiency, researchers created early **operating systems** that enabled **multiple users** to connect via devices like **teletypes** or **dumb terminals**.

This led to **time-sharing** systems, where the operating system would **switch between users' programs**, keeping the CPU busy and maximizing the value of expensive computers.

---

## Concurrency in Single-CPU Systems

A **CPU executes one instruction at a time**, but it does so incredibly fast which gives the illusion of simultaneous execution. This is the core idea of **concurrency**.

> Even with one CPU, computers can appear to run many processes at once by rapidly switching between them.

Systems like **Multics** (developed in the 1960s) were pioneers in this approach.


{{ <image_url url="https://www.macos.utah.edu/documentation/short_courses/mac_os_x_overview/history_and_evolution/unix_history/mainColumnParagraphs/010/image/openstep1.jpg" alt="Online Image Example" /> }}

[refrence](https://www.macos.utah.edu/documentation/short_courses/mac_os_x_overview/history_and_evolution/unix_history.html)

Later, personal computers adopted similar techniques to serve multiple users, but to allow a **single user to run multiple applications**.

---

## How CPUs Execute Instructions

At a low level, the CPU operates in a **fetch-decode-execute** cycle:

1. The **address register** holds the memory location of the next instruction.
2. The instruction is **fetched** and moved to the **instruction register**.
3. The CPU **decodes and executes** the instruction.
4. The address register is updated to point to the next instruction.

**Jump instructions** allow for loops and conditions, by modifying the address register manually.

This means programs don’t need to be split in memory—the **operating system changes the CPU's state** to switch between processes.

---

## Scheduling and Process Management

Once a program starts running, it becomes a **process**.

The OS uses a **queue** to manage all active processes. Two key components handle this:

- **Scheduler**: Determines which process should run next.
- **Dispatcher**: Loads the selected process into the CPU.

### But When Does the OS Run?

Programs often rely on the OS for tasks like file access or memory allocation. These are handled through **interruptions**.

When an **interrupt** occurs (e.g., from an I/O request):

1. The CPU saves the current process’s state.
2. It jumps to the **interrupt service routine (ISR)** in OS memory.
3. The OS handles the request and schedules the next process.

This is how the **OS regains control** of the CPU.

---

## The Problem With Cooperative Scheduling

Originally, systems used **cooperative scheduling**:

- A process keeps the CPU until it voluntarily gives it up.
- This can lead to problems if a process enters an **infinite loop** with no I/O.
- The OS never regains control, potentially locking the system.

This method is insecure, especially with malicious programs.

---

## Enter Preemptive Scheduling

To solve this, hardware support is essential.

A **hardware timer** is introduced:

1. Before assigning the CPU to a process, the OS sets the timer.
2. If the timer expires, it **automatically triggers an interrupt**.
3. This forces the CPU to return control to the OS.

> Preemptive scheduling allows the OS to **interrupt any process** and regain CPU control—even if the process doesn’t cooperate.

Modern systems, including versions of Windows from **95 onward**, use this method. Interestingly, **Multics supported it in the 1960s**!

---

## What About Multi-core Systems?

Multitasking on a single core uses concurrency to **simulate** parallel execution.

However, as the number of processes grows, delays become noticeable.

### Hardware Solution: Multi-core CPUs

- Each core can handle a process independently.
- This enables **true parallelism**.

Yet, even in multi-core systems, concurrency is still crucial—because **we often have more processes than cores**.

---

## Final Thought

> **Concurrency is about dealing with lots of things at once.  
Parallelism is about doing lots of things at once.**


---
