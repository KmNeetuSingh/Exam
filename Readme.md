# **Software Requirements Specification (SRS)**  
**Project Title:** Online Exam Invigilation App  
**Date:** [Insert Date]  
**Prepared by:** [Your Name]

---

## 1. **Introduction**

### 1.1 Purpose  
The purpose of this application is to allow proctors to monitor students during online exams and verify student identities in real time. The system ensures academic integrity through features such as ID verification, live video monitoring, screen activity logging, and automated alerts.

### 1.2 Scope  
This web-based application will include:
- User registration/login for students and proctors
- ID upload and verification (manual or AI-assisted)
- Live webcam streaming for invigilation
- Screen sharing and activity tracking
- Auto-flagging suspicious behavior
- Report generation for exam sessions

### 1.3 Definitions, Acronyms, Abbreviations  
- **Proctor:** Authorized person supervising the exam  
- **Student:** Registered user attempting the exam  
- **ID Verification:** Matching user photo ID with webcam image  
- **Live Stream:** Real-time webcam feed from the student’s device  
- **Flag:** An automatic or manual report of suspicious activity

---

## 2. **Overall Description**

### 2.1 Product Perspective  
The app is independent and cloud-hosted, accessible via modern web browsers. It will use third-party APIs for face recognition and activity logging if needed.

### 2.2 Product Functions  
- Secure login for students and proctors  
- Start exam session with webcam and screen share  
- Capture student ID and match with live feed  
- Real-time monitoring dashboard for proctors  
- Alert system for anomalies (e.g., multiple faces, no face, audio cues)  
- Auto-save logs and create reports

### 2.3 User Characteristics  
- **Students:** Moderate technical knowledge, must use a webcam-enabled device  
- **Proctors:** Trained to use dashboard and evaluate reports

---

## 3. **Functional Requirements**

| ID | Requirement Description |
|----|--------------------------|
| FR1 | User registration and login with role-based access |
| FR2 | Upload and verify government-issued ID |
| FR3 | Enable webcam and screen recording at exam start |
| FR4 | Live proctor dashboard with multiple video feeds |
| FR5 | Flag and notify on suspicious activities |
| FR6 | Record and store exam session logs |
| FR7 | Generate reports with time-stamped events |
| FR8 | Logout and session expiration handling |

---

## 4. **Non-Functional Requirements**

- **Performance:** Handle up to 1000 concurrent users  
- **Security:** End-to-end encryption of video streams and user data  
- **Usability:** Simple UI, mobile-responsive (students use laptops or desktops)  
- **Reliability:** 99.9% uptime during exams  
- **Compliance:** GDPR and local data protection laws  

---

## 5. **External Interface Requirements**

- **Frontend:** React.js / Ripple UI or similar  
- **Backend:** Node.js / Fastify or Express  
- **Database:** MongoDB / PostgreSQL  
- **APIs:** Face recognition, real-time video (WebRTC), cloud storage  
- **Devices:** Laptop/desktop with webcam and internet connection

---

## 6. **Assumptions and Dependencies**

- Stable internet is required for all users  
- Face verification API or module will be integrated  
- Students must use devices with a functioning webcam  
- All exams are scheduled and assigned beforehand

---