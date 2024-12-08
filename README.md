# Project Name - Blog Management System with Dashboard

[Full Stack code](https://github.com/nowshen-khan/blog-website)  
[Only backend code](https://github.com/nowshen-khan/backend)  
[Only frontend code](https://github.com/nowshen-khan/frontend)  

[Frontend Hosting](https://blog-website-frontend-wheat.vercel.app)  
[Backend Hosting](https://backend-six-pied.vercel.app)  


A simple blog management system built with **React**, **Node.js**, **Express**, and **MongoDB** to create, view, and manage blogs effectively.

---

## 📖 Features
- 📚 View all blogs with basic information.
- 📝 Detailed blog page for each blog.
- 🖋️ Add, edit, and delete blogs.
- ✅ Contact Message and Mark Message as `Seen` or `Unseen`.
- 📊 Message status counter (e.g., seen/unseen).

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)

---

## 🚀 Installation

Follow these steps to run the project locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/nowshen-khan/blog-website.git
cd blog-website

2. Install Dependencies

Backend:
cd backend
npm install

Frontend:
cd frontend
npm install

3. Run the Application

Backend:
cd backend
npm run dev

Frontend:
cd frontend
npm run dev

The project will be available at http://localhost:5173.

blog-website/
│
├── frontend/       # React Frontend
│   ├── public/     # Static assets
│   ├── src/        # React components, pages, and services
│
├── backend/        # Backend API
│   ├── models/     # Mongoose schemas
│   ├── routes/     # Express routes
│   ├── controllers/# Business logic
│
└── README.md       # Project documentation


📸 Screenshots
Home Page:
![Homepage](https://github.com/user-attachments/assets/5230cf9b-08fe-45c3-8fff-5a2bb24e90af)

Blog Details Page:
![blog](https://github.com/user-attachments/assets/1e34df63-d8bd-4dd5-bc0c-faff778f1f3b)
![sblog](https://github.com/user-attachments/assets/0ded27c0-e1bf-4fe3-b351-cd9b43f7b77a)

About Page:
![about](https://github.com/user-attachments/assets/b59968a5-a9b3-4495-b569-3e15db8e2dca)

Service Page:
![service](https://github.com/user-attachments/assets/fa6479c5-191f-4b86-83ae-f6d109e4278a)

Contact Page:
![contact](https://github.com/user-attachments/assets/749429ab-5578-4b49-a2b9-ea408eea8f49)

Dashboard:
Registration: ![dregistration](https://github.com/user-attachments/assets/f2c9cecc-51cb-436b-b9f4-3d6f905269ec)
Login: ![dlogin](https://github.com/user-attachments/assets/ebe46a3e-ba01-454f-81e0-bebbc3349f89)
Blog: ![dblog](https://github.com/user-attachments/assets/69bb878a-4659-48d9-a761-67af53d6e9e3)
Service: ![dservice](https://github.com/user-attachments/assets/187316ed-2108-48b3-b029-5b019ccdf321)
Team: ![dteam](https://github.com/user-attachments/assets/c14f007c-e1db-470e-b1f5-f222b4b86ae5)
Message: ![dmessage](https://github.com/user-attachments/assets/32d706bc-f1e8-4283-a278-f9032adcd1b0)

⚙️ API Endpoints

🌟 Features in Progress
    🔍 Search functionality for blogs.
    📊 Pagination for large data sets.
    🌈 Light/Dark theme toggle.

💻 Contributing
Contributions are welcome! Follow these steps to contribute:
    Fork this repository.
    Create a branch for your feature (git checkout -b feature-name).
    Commit your changes (git commit -m 'Add a new feature').
    Push to the branch (git push origin feature-name).
    Create a pull request.

🛡️ License
This project is licensed under the GPL License.

🤝 Contact
For questions or collaboration opportunities, reach out:

    Name: Nowshen Khan
    Email: nowshen.anjum@gmail.com
    GitHub: nowshen-khan

####Requirement

মডিউল ২৭ এর অ্যাসাইনমেন্ট 

সর্বশেষ অ্যাসাইনমেন্টে  আপনাকে স্বাগতম। এই এসাইনমেন্টে আপনাকে একটি ব্লগ এজেন্সি ওয়েবসাইট তৈরি করতে হবে।  


ডিজাইন + ‍সার্ভিস রিকোয়ারমেন্ট:  

আপনাকে মোট পাঁচটি পেইজ তৈরি করতে হবে গ্রাহককে দেখানোর কাজে। সেগুলো হচ্ছে - 

1. home page ( এই পেজে মোট ৬টি সেকশন থাকবে সেগুলো হচ্ছে, - Menu, Slider/hero section, Blog section(6 item show dynamic), Custom any section, Footer) 

2. about page ( এই পেজে মোট ৪ টি সেকশন থাকবে সেগুলো হচ্ছে, - Menu, About section, Team section (item show dynamic), Footer)

3. blog page ( এই পেজে মোট ৩ টি সেকশন থাকবে সেগুলো হচ্ছে, - Menu, Blog section (item show dynamic), Footer)

4. service page ( এই পেজে মোট ৩ টি সেকশন থাকবে সেগুলো হচ্ছে, - Menu, Service section (item show dynamic), Footer)

5. contact page ( এই পেজে মোট ৩ টি সেকশন থাকবে সেগুলো হচ্ছে, - Menu, Contact form (with work this form), Footer)


💯 অবশ্যই এই পাঁচটি পেইজ মোবাইল রেস্পন্সিভ হতে হবে। থাকতে হবে ছোট একটি ড্যাশবোর্ড যা আপনি আপনার মন মতো করে ডিজাইন করতে পারেন।  
    এবং সেটি অবশ্যই প্রাইভেটে থাকবে সেখান থেকে মূলত আপনি ডায়নামিক তথ্যগুলো CRUD অপারেশন চালাবেন। 
    অর্থাৎ আপনি ড্যাশবোর্ড থেকে Blog  ডায়নামিক কনটেন্ট, Team  ডায়নামিক কনটেন্ট, service  ডাইনামিক কন্টেন্ট  ইত্যাদি 
    Create, read, delete, update  করতে পারবেন।  অবশ্যই ড্যাশবোর্ডটি মূল ডিজাইনের সাথে এটাচ থাকতে হবে। 
    ড্যাশবোর্ডে যদি কেউ প্রবেশ করতে চায় তাহলে অবশ্যই তাকে লগইন করে প্রবেশ করতে হবে।
    কোন অবস্থায় লগইন ছাড়া ড্যাশবোর্ডে প্রবেশ করা যাবে না। অবশ্যই আপনার ব্যাকএন্ড node, express, MongoDB দিয়ে করতে হবে।
    তৈরি করতে হবে প্রয়োজনীয় এপিআই গুলো। অবশ্যই আপনাকে mongodb atlas ব্যবহার করতে হবে।
    অবশ্যই আপনার ফ্রন্টএন্ড টি লাইভে হোস্ট থাকতে হবে আপনি আপনার ফ্রন্টএন্ড https://www.netlify.com/ তে হোস্ট করতে পারেন। 
    অবশ্যই আপনার ব্যাকএন্ড সার্ভার লাইভে হোস্ট থাকতে হবে। ব্যাকএন্ড সার্ভার লাইভে হোস্ট করার জন্য আপনি https://vercel.com/ ব্যবহার করতে পারেন।
    অবশ্যই আপনার কোড গুলো https://github.com/ এ জমা রাখতে হবে। এবং প্রাইভেসি পাবলিক করে রাখতে হবে। 
    README.md ফাইলে আপনার ফ্রন্টএন্ড live link এবং ব্যাকএন্ড এর server link থাকতে হবে।
    আপনার ড্যাশবোর্ডে লগইন করার জন্য লগইন রাউট এবং ইমেইল আইডি পাসওয়ার্ড জমা রাখতে হবে। 
