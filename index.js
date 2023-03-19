const testimonial = [
    {
        name: 'Ezra I.',
        photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        text: 'After using Apple my business skyrocketed! I STRONGLY recommend Apple to EVERYONE interested in running a successful online business! Its really wonderful.'
    },
    {
        name: 'Errol J',
        photoUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        text: 'Needless to say we are extremely satisfied with the results.'
    },
    {
        name: 'Hugo T.',
        photoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        text: 'The service was excellent. I cant say enough about Apple. Apple is the most valuable business resource we have EVER purchased.'
    }
];
const image = document.querySelector('img');
const testimony = document.querySelector('.text');
const user = document.querySelector('.username');
let idx = 0;
function updateTestimonial() {

    const { name, photoUrl, text } = testimonial[idx];
    image.src = photoUrl;
    testimony.innerText = text;
    user.innerText = name;

    idx = idx + 1;
    if (idx === testimonial.length) {
        idx = 0;
    }
    setTimeout(updateTestimonial, 3000);
}
updateTestimonial();
