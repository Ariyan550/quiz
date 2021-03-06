// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "১৯৩৫ সালে ভারত শাসন আইনে প্রাদেশিক ক্ষমতার তালিকা ছিল",
    answer: "আইন শৃঙ্খলা",
    options: [
      "আইন শৃঙ্খলা",
      "দেশরক্ষা",
      "যোগাযোগ",
      "মৃদু"
    ]
  },


    {
    numb: 2,
    question: "১৯১৯ সালে ভারত শাসন আইনের বিরুদ্ধে ভারতীয় কংগ্রেস কোন আন্দোলনের ডাক দেয়",
    answer: "সত্যাগ্রহ",
    options: [
      "স্বরাজ",
      "ব্রিটিশ বিতরণ",
      "অসহযোগ",
      "সত্যাগ্রহ"
    ]
  },




    {
    numb: 3,
    question: "১৯৩৭ সালের প্রাদেশিক নির্বাচনে বাংলা প্রদেশসমূহ আসন সংখ্যা কত",
    answer: "২৫০",
    options: [
      "২৬০",
      "২৭০",
      "২৫০",
      "৩০০"
    ]
  },



    {
    numb: 4,
    question: "মুসলিম লীগের পক্ষ থেকে মোহাম্মদ আলী জিন্নাহ কত দফা দাবি পেশ করে",
    answer: "১৪দফা",
    options: [
      "১৫দফা",
      "১৪দফা",
      "১২দফা",
      "৬দফা"
    ]
  },

  
    {
    numb: 5,
    question: "লাহোর প্রস্তাব কত তারিখে উত্থাপন করা হয়",
    answer: "২৩ মার্চ",
    options: [
      "২১ মার্চ",
      "২৩ মার্চ",
      "২৮ মার্চ",
      "২৫ মার্চ"
    ]
  },
  


     {
     numb: 6,
     question: "স্যার সলিমুল্লাহ কত সালে জন্মগ্রহণ করেন",
     answer: "১৮৭১",
     options: [
       "১৮৭২",
       "১৮৭৪",
       "১৮৭১",
       "১৮৬৯"
     ]
   },



     {
     numb: 7,
     question: "অবিভক্ত বাংলার প্রথম মুখ্যমন্ত্রী কে",
     answer: "শেরে বাংলা একে ফজলুল হক",
     options: [
       "হোসেন শহীদ সোহরাওয়ার্দী",
       "শেরে বাংলা একে ফজলুল হক",
       "মাওলানা আব্দুল হামিদ খান ভাসানী",
       "দেশবন্ধু চিত্তরঞ্জন দাশ"
     ]
   },



     {
     numb: 8,
     question: "স্বরাজ দল গঠন করেন কে",
     answer: "দেশবন্ধু চিত্তরঞ্জন দাশ",
     options: [
       "দেশবন্ধু চিত্তরঞ্জন দাশ",
       "মাওলানা আব্দুল হামিদ খান ভাসানী",
       "শেরে বাংলা একে ফজলুল হক",
       "হোসেন শহীদ সোহরাওয়ার্দী"
     ]
   },


     {
     numb: 9,
     question: "বঙ্গবন্ধু উপাধি প্রদান করা হই কত তারিখে",
     answer: "১৯৬৯ সালের ২৩ ফেব্রুয়ারি",
     options: [
       "১৯৬৯ সালের ২১ ফেব্রুয়ারি",
       "১৯৬৯ সালের ২৬ ফেব্রুয়ারি",
       "১৯৬৯ সালের ২৫ ফেব্রুয়ারি",
       "১৯৬৯ সালের ২৩ ফেব্রুয়ারি"
     ]
   },





     {
     numb: 10,
     question: "অবিভক্ত বাংলার শেষ মুখ্যমন্ত্রী কে",
     answer: "হোসেন শহীদ সোহরাওয়ার্দী",
     options: [
       "হোসেন শহীদ সোহরাওয়ার্দী",
       "শেরে বাংলা একে ফজলুল হক",
       "মাওলানা আব্দুল হামিদ খান ভাসানী",
       "দেশবন্ধু চিত্তরঞ্জন দাশ"
     ]
   },



     {
     numb: 11,
     question: "ছয় দফা কর্মসূচি কত তারিখে উত্থাপন করা হই",
     answer: "৬ ফেব্রুয়ারি",
     options: [
       "২ ফেব্রুয়ারি",
       "৪ ফেব্রুয়ারি",
       "৬ ফেব্রুয়ারি",
       "৮ ফেব্রুয়ারি"
     ]
   },



     {
     numb: 12,
     question: "কত তারিখে ভারত বাংলাদেশকে স্বীকৃতি দেই",
     answer: "৬ ডিসেম্বর",
     options: [
       "২ ডিসেম্বর",
       "৪ ডিসেম্বর",
       "৮ ডিসেম্বর",
       "৬ ডিসেম্বর"
     ]
   },




     {
     numb: 13,
     question: "মধ্যরাত থেকে ঢাকাই কত তারিখে ১৪৪ ধারা জারি করা হই",
     answer: "1952 ২০ ফেব্রুয়ারি",
     options: [
       "1952 ২০ ফেব্রুয়ারি",
       "1952 ২৪ ফেব্রুয়ারি",
       "1952 ২৩ ফেব্রুয়ারি",
       "1952 ২২ ফেব্রুয়ারি"
     ]
   },




     {
     numb: 14,
     question: "কত তারিখে তমুদ্দিন মজলিস গঠন করা হই",
     answer: "১৯৪৭ সালের ১ সেপ্টেম্বর",
     options: [
       "১৯৪৮ সালের ২১ সেপ্টেম্বর",
       "১৯৪৯ সালের ৮ সেপ্টেম্বর",
       "১৯৪৭ সালের ১ সেপ্টেম্বর",
       "১৯৫২ সালের ৫ সেপ্টেম্বর"
     ]
   },




     {
     numb: 15,
     question: "বাংলার সৈয়দ আহমদ বলা হয় কাকে?",
     answer: "নবাব আব্দুল লতিফ",
     options: [
       "নবাব আব্দুল লতিফ",
       "হোসেন শহীদ সোহরাওয়ার্দী",
       "শেরে বাংলা একে ফজলুল হক",
       "মাওলানা আব্দুল হামিদ খান ভাসানী"
     ]
   },



     {
     numb: 16,
     question: "যুক্তফ্রন্ট গঠিত হয় কত সালে",
     answer: "1953 সালের 4 ডিসেম্বর",
     options: [
       "195৪ সালের ১৬ ডিসেম্বর",
       "195৮ সালের ৮ ডিসেম্বর",
       "1953 সালের 4 ডিসেম্বর",
       "195২ সালের ৫ ডিসেম্বর"
     ]
   },



       












       




];