+++
title = "Why I Use the GPL"
date = 2025-09-10
description = "An explanation of why I choose to use the GNU General Public License (GPL) for my software projects."
[taxonomies]
tags = ["GPL", "Open Source", "Software Licensing"]
categories = ["Software", "Licensing"]
[extra]
image = "https://preview.redd.it/oyfim7x9h6va1.png?auto=webp&s=60579dee07d78dcaee88bf2881b2c86a956bef69"
  toc = true
in_search_index = true
+++

# Why I Use the GPL (and How It Protects My Code)

As a developer, one of the most important decisions you make when publishing code is **which license to use**. Personally, I choose the **GNU General Public License v3 (GPLv3)** for nearly all of my projects.  

Here’s why, and what you can do if someone tries to steal your code or claim it as their own.  

---

## Why the GPL?
The GPL is a **copyleft license**. That means:

- Anyone can run, study, modify, and share your code.  
- But if they **redistribute** it (modified or not), they must:  
  - Keep your copyright and license notice.  
  - Release their modifications under the GPL as well.  

This ensures that your work **stays free and open source forever**. No company can legally close-source it, rebrand it, and sell it back to you.  

By contrast, **permissive licenses** (MIT, BSD, Apache, etc.) allow redistribution without that requirement. Someone can take your code, hide the source, and profit from it without giving anything back.  

---

you can read the full GPLv3 text here:
https://www.gnu.org/licenses/gpl-3.0.en.html

also check lukesmith.xyz article on
[why he uses gpl](https://lukesmith.xyz/articles/why-i-use-the-gpl-and-not-cuck-licenses/)
i have added some points from his article below 


## Why Not MIT/BSD? (Inspired by Luke Smith’s “Cuck Licenses” Essay)

Permissive licenses (commonly referred to as “cuck licenses”) like the MIT license allow others to modify your software and release it under an unfree license. Copyleft licenses (like the Gnu General Public License) mandate that all derivative works remain free.



{{image_url(url="https://preview.redd.it/gpl-gigachad-v0-lfsxe7pwpgda1.jpg?width=640&crop=smart&auto=webp&s=f72b1d0db28eed57a3670ab3ccfe9d4602ebdfea", alt="Meme")}}



Some developers argue that MIT or BSD licenses are “freer” because they impose fewer restrictions.  
But as Luke Smith argued in his well-known essay *“Why I Use the GPL and Not Cuck Licenses”*, permissive licenses often end up serving corporations rather than communities.  

Key takeaways from his perspective:  

- **MIT/BSD are corporate-friendly** – They let companies take your code, close it, and profit without giving anything back.  
- **GPL enforces reciprocity** – If someone improves your work, they must share it under the same license.  
- **Freedom vs exploitation** – MIT/BSD give companies the freedom to exploit, while GPL ensures users’ freedom to study, share, and improve software.  
- **Real-world consequences** – For example, MINIX (released under BSD) was silently used inside Intel processors for their Management Engine, now seen as a security risk. If it had been GPL, Intel would’ve had to release the source.  
- **Respect and protection** – GPL enforces credit and sharing. MIT/BSD only rely on goodwill.  


{{image_url(url="https://lemmy.world/pictrs/image/9a59b61d-20a4-4f40-9c30-bc273a20dfdd.webp?format=webp", alt="Meme")}}

Context:

Andrew Tanenbaum developed MINIX, a modular operating system kernel. Intel went ahead and used it to build Management Engine, arguably one of the most widespread and invasive pieces of malware in the world, without even as much as telling him. There’s nothing Tanenbaum could do, since the MIT license allows this.

Erik Andersen is one of the developers of Busybox, a minimal implementation of that’s suited for embedded systems. Many companies tried to steal his code and distribute it with their unfree products, but since it’s protected under the GPL, Busybox developers [were able to sue](https://en.wikipedia.org/wiki/BusyBox#GPL_lawsuits) them and gain some money in the process.

Interestingly enough, Tanenbaum [doesn’t seem to mind](https://www.cs.vu.nl/~ast/intel/) what intel did. But there are [some examples](https://donatstudios.com/License-Grumbles) out there of people regretting releasing their work under a permissive license.


References:
https://lemmy.world/comment/10690861

In short: permissive licenses can look generous, but they make it easier for your work to be absorbed into proprietary systems. GPL prevents that.  

---

## What If Someone Claims My Code as Theirs?
This isn’t really "software piracy" — it’s **plagiarism or license violation**.  

Fortunately, both GPL and MIT/BSD already protect you:

- **GPL:** They must keep your name and license notice. Removing it = license violation.  
- **MIT/BSD:** They must credit you too. If they remove attribution, that’s also a violation.  
- **No license/public domain:** You have no protection; anyone can claim it.  

So as long as you choose a license, you’re covered.  

---

## 🛡️ What Actions Can You Take?

Here’s a step-by-step **action checklist** if you find a violation:  

### Step 1: Gather Evidence
- Save screenshots of your repo with timestamps.  
- Save screenshots/links of the infringing project.  

### Step 2: Contact Them
Send a polite but firm notice. Example:

> "Your project [link] uses my code from [link] but does not comply with GPLv3. Please restore attribution and comply with the license within 7 days."

### Step 3: Public Exposure
If ignored, make it public. Post an issue or blog about the violation. Communities often side with the original author.  

### Step 4: DMCA Takedown
File a takedown with the hosting platform (GitHub, GitLab, etc.).  
- GitHub DMCA portal: https://github.com/github/dmca  

### Step 5: Legal Enforcement
If it’s a company profiting from your work:  
- Send a **cease-and-desist letter**.  
- If needed, escalate to a copyright infringement lawsuit.  
- The **Free Software Foundation (FSF)** can sometimes assist with GPL cases: https://www.fsf.org/licensing  

---

## Ready-to-Use Templates

### Email to Violator
```text
Subject: License Violation Notice – [Your Project Name]

Hello [Name/Team],

I am the copyright holder of [Project Name], published at [repo link].  
Your project [violating project link] uses my code but does not comply with [GPLv3/MIT].  

Please restore attribution and comply with the license within 7 days.  
If not, I will escalate with a DMCA request and legal action.  

Sincerely,  
[Your Name]
```
### DMCA Takedown Request
```text
To: [Hosting Platform DMCA Email]
Subject: DMCA Takedown Request – Unauthorized Use of [Project Name]

I am the copyright holder of [Project Name], originally at [repo link].  
The repository [infringing link] contains my code without license compliance.  

I request removal of this repository.  
This claim is made in good faith and under penalty of perjury.  

Name: [Your Full Name]  
Email: [Your Email]  
Signature: [Your Name]
Date: [Date]
```
## Conclusion

Choosing the GPL is not just about protecting yourself — it’s about protecting users’ freedom.

With GPL, your work remains open, and violators risk real legal consequences.

With MIT/BSD, your name must stay, but your code can still be locked away inside proprietary software.

With no license, you give up all control.

```
If you value freedom, recognition, and fairness in software, the GPL is your strongest tool.
```


