
// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 

// √s(s-a)(s-b)(s-c)

function area (a, b, c) {
    let s = (a + b + c) / 2 ;
    let triangleAreaFormula = s*(s-a)*(s-b)*(s-c);
    let triangleArea = Math.sqrt(triangleAreaFormula);
    return triangleArea ;
}


let areaIs = area(13, 14, 15);
console.log(areaIs);